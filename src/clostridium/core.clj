(ns clostridium.core
  (:use [clojure.string :only [split-lines]]))

(defn addToStack [b item]
    (assoc b :stack (conj (:stack b) item))
)

(defn removeFromStack [b]
  (let [items (:stack b)]
    (if (empty? (:stack b))
      {
       :b b
       :item 0
      }
      {
       :b (assoc b :stack (pop items))
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
      (addToStack (:b two) (op (:item two) (:item one)))
    )
  )
)

(def maxValue Integer/MAX_VALUE)

(defn current
  ([b] (current (:grid b) (reverse (:pc b))))
  ([grid pc]
   (if
     (empty? pc)
      grid
      (current
        (get grid 
          (if (>= (first pc) 0)
            (first pc)
            (throw (Exception. "foo")); (+ maxValue (first pc))
          )
          \ 
        )
        (rest pc)
      )
    )
   )
)

(defn jumpPC 
  [grid pc dir]
  (let [
        d (first dir)
        c (first pc)
       ]
    (case d
      -1 
        (conj (rest pc) 
         (let [
            items (sort > (filter (partial >= c) (keys grid)))
            coord (some #(if (= \  current (get grid %) (rest pc)) false %) items)
               ]
             (do
               ;(prn "coord" coord pc (current (get grid coord) (rest pc)))
               coord
             )
         )
        )
      1 pc
      0 (conj (jumpPC (get grid c) (rest pc) (rest dir)) c)
    )
  )
)

(defn updatePC [b]
  (let [initial 
        (map 
          #(let [val (+ %1 %2)]
             (if (< val 0)
               (+ val maxValue)
               (if (>= val maxValue)
                 (- val maxValue)
                 val
                )
              )
            )
           (:pc b) (:dir b)
        )]
    (assoc b :pc
      (if (not= (current (:grid b) (reverse initial)) \ )
        initial ; easy case, can just return the basic value
        (if (not= (apply + (map #(Math/abs %) (:dir b))) 1)
          (throw (Exception. "Don't support directions with a magnitude other than 1"))
          (reverse (jumpPC (:grid b) (reverse initial) (reverse (:dir b))))
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
     (assoc grid (first coord) (setVal (get grid (first coord)) (rest coord) value))
   )
)

(defn rotateCCW [b] (assoc b :dir (let [[x y] (:dir b)] [(* y -1) x])))
(defn rotateCW [b] (assoc b :dir (let [[x y] (:dir b)] [y (* x -1)])))

(def initialInstructions
  (merge
    numberInsts 
    upperCharInsts
    {
     \  (fn [b] b)
     \. (fn [b]
          (let [{:keys [b item]} (removeFromStack b)]
            (do
              (print (str item " "))
              b
            )
          )
        )
     \, (fn [b]
          (let [{:keys [b item]} (removeFromStack b)]
            (do
              (print (str (char item)))
              b
            )
          )
        )
     \# (fn [b] (updatePC b))
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
            (assoc b :grid (setVal (:grid b) [y x] v))
          )
        )
     \g (fn [nb]
          (let [
                {:keys [b items]} (removeManyFromStack nb 2)
                [x y] items
               ]
            (addToStack b (current (:grid b) [y x]))
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
      \' (fn [nb] (let [b (updatePC nb)]
                    (updatePC (addToStack b (current b)))
                  ))
      \; (fn [nb]
           (loop [b (updatePC nb)]
             (if (= \; (current b))
               b
               (recur (updatePC b))
              )
            )
          )
      \w (fn [nb] 
            (let [
                  {:keys [b items]} (removeManyFromStack nb 2)
                  [one two] items
                  ]
              (if (> one two)
                (rotateCCW b)
                (if (< one two)
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
              (do
                (println "Absolute delta " x " " y " " (:pc b) (:dir b))
                (assoc b :dir [x y])
              )
            )
          )
      \t reflect ; FIXME: change this to implement concurrency
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
   :stack []
   :running true
   :stringMode false
  }
)


;(defn gridLimit
; ([b] (gridLimit (:grid b) [])
;  ([grid values]
;   (if (seq? (first grid))
;     (gridLimit (

(defn doInst [b]
  (let [
        inst (current b)
        insts (:inst b)
        f (get insts inst)
       ]
    (updatePC
      (if 
        (and (not= inst \") (:stringMode b))
        (addToStack b (current b))
        (if (nil? f)
          (throw (Exception. (str "No such command '" inst "'")))
          (f b)
        )
      )
    )
  )
)

(defn doAndPrint [b]
  (let [ret (doInst b)]
    (do
      (comment
        (>= (first (:pc ret)) 100)
        (prn (:pc ret) (:dir ret) (current ret) (:stack ret))
      )
      ret
    )
  )
)

(defn runBefunge [fname]
  (let [b (makeInitial fname)]
    (loop [b (makeInitial fname)]
      (if (:running b)
        (recur (doAndPrint b))
        nil
      )
    )
  )
)

(defn -main
  "I don't do a whole lot."
  [& args]
  (println "Hello, World!"))
