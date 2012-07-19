(ns clostridium.core
  (:use [clojure.string :only [split-lines]])
  (:gen-class)
)

(defn toss [b] (first (:stack b)))
(defn ross [b] (rest (:stack b)))

(defn setNewToss [b t]
  (assoc b :stack (conj (ross b) t))
)

(defn addToStack [b item]
  (setNewToss b (conj (toss b) item))
)

(defn removeFromStack [b]
  (let [items (toss b)]
    (if (empty? items)
      {
       :b b
       :item 0
      }
      {
       :b (setNewToss b (pop items))
       :item (peek items)
      }
    )
  )
)

(defn removeManyFromStack [nb many]
  (loop [items [] board nb]
    (if (= (count items) many)
      {:b board :items items}
      (let [{:keys [b item]} (removeFromStack board)]
        (recur (conj items item) b)
      )
    )
  )
)

(defn reflect [b]
  (assoc b :dir (map #(* -1 %) (:dir b))))

(def numberInsts
  (loop [
         insts {}
         digit 0
        ]
    (if (= digit 10)
      insts
      (recur (assoc insts (char (+ (int \0) digit)) (fn [b] (addToStack b digit))) (inc digit))
    )
  )
)

(def upperCharInsts
  (loop [
         insts {}
         c 0
        ]
    (if (= c 26)
      insts
      (recur (assoc insts (char (+ (int \A) c)) (fn [b] (reflect b))) (inc c))
    )
  )
)

(defn mathop [op]
  (fn [b]
    (let [one (removeFromStack b)
          two (removeFromStack (:b one))]
      (try
        (addToStack (:b two) (op (:item two) (:item one)))
        (catch ArithmeticException e (addToStack (:b two) 0))
        (catch Exception e
          (do
            (println "math exception" op (:item two) (:item one))
            (throw e)
          )
        )
      )
    )
  )
)

(def maxValue Integer/MAX_VALUE)

(defn clipValue [val]
  (mod val maxValue)
)

(defn current
  ([b] (current (:grid b) (reverse (:pc b))))
  ([grid pc]
   (if (empty? pc)
      (if (seq? grid)
        (throw (Exception. "Grid still a sequence"))
        grid
      )
      (current
        (get grid (clipValue (first pc)) \ )
        (rest pc)
      )
    )
   )
)

(defn- step 
  ([pc dir] (step pc dir 1))
  ([pc dir howMany] (map #(clipValue (+ %1 (* howMany %2))) pc dir))
)

(defn jumpPC
  [grid pc dir]
  (let [
        d (first dir)
        c (first pc)
        s (fn [hm val] (step (rest pc) (rest dir) (hm c val)))
        cu (fn [hm val] (current (get grid val) (s hm val)))
        j (fn [order choose howMany]
              (let [
                items (sort order (filter (partial choose c) (keys grid)))
                coord (some #(if (= \  (cu howMany %)) false %) items)
                ret
                  (if (nil? coord)
                    (if (or (= d -1) (= d 1))
                      (first (sort order (keys grid)))
                      (let [
                            n (+ 1 (howMany c (+ 1 maxValue)))
                            init (step pc dir n)
                          ]
                        (do
                          ;(println "jumping" init)
                          (first (jumpPC grid init dir))
                        )
                      )
                    )
                    coord
                  )
                ]
                (conj (step (rest pc) (rest dir) (howMany c ret)) ret)
              )
            )
       ]
    (cond
      (= d -1) (j > > (constantly 1))
      (> d 0)
        (j <
          #(let [
                 diff (- %2 %1)
                ]
              (do
                (if (not= d 1)
                  ;(println d "diff" %1 %2 diff)
                  nil
                )
                (and (< 0 diff) (= (rem diff d) 0))
              )
            )
          #(let [
                 diff (- %2 %1)
                 n (quot diff d)
                ]
              (do
                (if (not= d 1)
                  ;(println d "n" %1 %2 n)
                  nil
                )
                n
              )
            )
          )
      (= d 0) (conj (jumpPC (get grid c) (rest pc) (rest dir)) c)
      :else (throw (Exception. "Flying!"))
    )
  )
)


(defn updatePCSkipSpace 
  ([b noJump dir]
    (let [initial (step (:pc b) dir)]
        (cond
          noJump ; easy case, can just return the basic value
            (assoc b :pc initial)
          (not= (current (:grid b) (reverse initial)) \ ) ; shortcut for simple "not a space" cases
            (assoc b :pc initial)
          (:stringMode b)
            (addToStack (assoc b :pc (reverse (jumpPC (:grid b) (reverse (:pc b)) (reverse dir)))) (int \ ))
          :else
            (assoc b :pc (reverse (jumpPC (:grid b) (reverse (:pc b)) (reverse dir))))
        )
    )
  )
)

(defn updatePC 
  ([b] (updatePC b false))
  ([b noJump] (updatePC b noJump (:dir b)))
  ([b noJump dir] 
    (loop [
           nb (updatePCSkipSpace b noJump dir)
           colonMode false
          ]
      (if (or noJump (:stringMode nb))
        nb
        (if (= \; (current nb))
          (do
            ;(println ";" colonMode (:pc nb))
            (recur (updatePCSkipSpace nb noJump dir) (not colonMode))
          )
          (if colonMode
            (do
              ;(println ";" colonMode (:pc nb) (current nb) noJump (:stringMode nb))
              (if (> (first (:pc nb)) 160)
                (throw (Exception. "FIXME"))
                (recur (updatePCSkipSpace nb noJump dir) colonMode)
              )
            )
            (do
              ;(println "found end")
              nb
            )
          )
        )
      )
    )
  )
)

(defn setVal
  [grid coord value]
   (if
     (= (count coord) 0)
     value
     (assoc grid (clipValue (first coord)) (setVal (get grid (clipValue (first coord))) (rest coord) value))
   )
)

(defn rotateCCW [b] (assoc b :dir (let [[x y] (:dir b)] [(* y -1) x])))
(defn rotateCW [b]  (assoc b :dir (let [[x y] (:dir b)] [y (* x -1)])))

(defn runInst [b inst]
  (let [
        insts (:inst b)
        f (get insts inst)
       ]
    (if (and (not= inst \") (:stringMode b))
      (if (and (not (empty? (toss b))) (= (char inst) \  (char (peek (toss b)))))
        b
        (addToStack b (int inst))
      )
      (if (nil? f)
        (throw (Exception. (str "No such command '" inst "'" (seq (:pc b)))))
        (f b)
      )
    )
  )
)

(def initialInstructions
  (merge
    numberInsts 
    upperCharInsts
    {
     ;\  (fn [b] b)
     \. (fn [b]
          (let [{:keys [b item]} (removeFromStack b)]
            (do
              (print (str item " "))
              (flush)
              b
            )
          )
        )
     \, (fn [b]
          (let [{:keys [b item]} (removeFromStack b)]
            (do
              (print (str (char item)))
              (flush)
              b
            )
          )
        )
     \# (fn [b] (updatePC b true))
     \@ (fn [b] (assoc b :running false))
     \> (fn [b] (assoc b :dir [1 0]))
     \v (fn [b] (assoc b :dir [0 1]))
     \< (fn [b] (assoc b :dir [-1 0]))
     \^ (fn [b] (assoc b :dir [0 -1]))
     \$ (fn [b] (:b (removeFromStack b)))
     \" (fn [b] (assoc b :stringMode (not (:stringMode b))))
     \_ (fn [nb]
          (let [{:keys [b item]} (removeFromStack nb)]
            (assoc b :dir
              (if (= item 0)
                [1 0]
                [-1 0]
              )
            )
          )
        )
     \| (fn [nb]
          (let [{:keys [b item]} (removeFromStack nb)]
            (assoc b :dir
              (if (= item 0)
                [0 1]
                [0 -1]
              )
            )
          )
        )
     \+ (mathop +)
     \- (mathop -)
     \* (mathop *)
     \/ (mathop quot)
     \% (mathop rem)
     \` (mathop #(if (> %1 %2) 1 0))
     \\ (fn [b]
          (let [
                one (removeFromStack b)
                two (removeFromStack (:b one))]
              (addToStack (addToStack (:b two) (:item one)) (:item two))
          )
        )
     \: (fn [nb]
          (let [{:keys [b item]} (removeFromStack nb)]
            (addToStack (addToStack b item) item)
          )
        )
     \! (fn [nb]
          (let [{:keys [b item]} (removeFromStack nb)]
            (addToStack b (if (= item 0) 1 0))
          )
        )
     \p (fn [nb]
          (let [
                {:keys [b items]} (removeManyFromStack nb 3)
                [x y v] items
                ]
            (assoc b :grid (setVal (:grid b) [y x] (char v)))
          )
        )
     \g (fn [nb]
          (let [
                {:keys [b items]} (removeManyFromStack nb 2)
                [x y] items
               ]
            (addToStack b (int (current (:grid b) [y x])))
          )
        )
      \a (fn [b] (addToStack b 10)) 
      \b (fn [b] (addToStack b 11)) 
      \c (fn [b] (addToStack b 12)) 
      \d (fn [b] (addToStack b 13)) 
      \e (fn [b] (addToStack b 14)) 
      \f (fn [b] (addToStack b 15))
      \[ rotateCW
      \] rotateCCW
      \' (fn [nb]
           (let [b (updatePC nb true)]
             (addToStack b (int (current b)))
           )
         )
      \w (fn [nb] 
            (let [
                  {:keys [b items]} (removeManyFromStack nb 2)
                  [one two] items
                  ]
              (if (< one two)
                (rotateCCW b)
                (if (> one two)
                  (rotateCW b)
                  b
                )
              )
            )
          )
      \x (fn [nb] 
            (let [
                  {:keys [b items]} (removeManyFromStack nb 2)
                  [x y] items
                  ]
              (assoc b :dir [y x])
            )
          )
      \t reflect ; FIXME: change this to implement concurrency
      \k (fn [nb]
           (let [
                 nextinst (current (updatePC nb))
                 {:keys [b item]} (removeFromStack nb)
                ]
             (if (= item 0)
               (updatePC b) ; 0k needs to skip, which is weird...
               (loop [x (range item)
                     ret b]
                 (do
                   ;(println "k" nextinst x (int nextinst) (current ret) (:pc (updatePC nb)))
                   (if (empty? x)
                     ret
                     (recur (rest x) (runInst ret nextinst))
                   )
                 )
               )
              )
            )
          )
      \n (fn [b] (setNewToss b []))
      \r reflect
      \s (fn [nb]
          (let [
                {:keys [b item]} (removeFromStack (updatePC nb))
                ]
            (assoc b :grid (setVal (:grid b) (:pc b) (char item)))
          )
        )
      \z (fn [b] b)
      \j (fn [nb]
           (let [
                 {:keys [b item]} (removeFromStack nb)
                 dir (if (< item 0) (map #(* % -1) (:dir b)) (:dir b))
                 newI (if (< item 0) dec inc)
                 ]
             (do
               ;(println "jump" (toss nb) item (:stack nb))
               (loop [
                    i 0
                    b2 b
                   ]
                 (if (= i item)
                   b2
                   (recur (newI i) (updatePC b2 true dir))
                 )
               )
             )
           )
         )

    }
  )
)

(defn buildGrid [fname]
  (let [data (slurp fname)
        lines (split-lines data)]
    (zipmap (range (count lines)) (map #(zipmap (range (count %1)) (vec %1)) lines))
  )
)

(defn makeInitial [fname]
  {:grid (buildGrid fname)
   :inst initialInstructions
   :pc [0,0]
   :dir [1,0]
   :stack [[]]
   :running true
   :stringMode false
  }
)

(defn doInst [b]
  (let [
        inst (char (current b))
       ]
     (updatePC (runInst b inst))
  )
)

(defn doAndPrint [b]
  (let [ret (doInst b)]
    (do
      ;(prn (:pc ret) (:dir ret) (current ret) (:stack ret))
      ret
    )
  )
)

(defn runBefunge [fname]
  (loop [b (makeInitial fname)]
    (if (:running b)
      (recur (doAndPrint b))
    )
  )
)

(defn -main
  [fname]
  (runBefunge fname)
)
