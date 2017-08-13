(ns clostridium.befunge
  (:use [clojure.string :only [split]])
  #?(:cljs (:require [decimal.core :as dc])))

(defn toss [b] (first (:stack b)))
(defn soss [b] (second (:stack b)))
(defn ross [b] (rest (:stack b)))

(defn setNewToss [b t]
  (assoc b :stack (conj (ross b) t)))

(defn setNewSoss [b s]
  (let [nb (assoc b :stack (conj (conj (rest (ross b)) s) (toss b)))]
    (do
      ;(println "new soss" (:stack nb))
      ;(println "soss" (soss nb) (peek (toss nb)))
      nb)))

(defn newTossAndSoss [b t s]
  (setNewToss (setNewSoss b s) t))

(defn addToStack [b item]
  (setNewToss b (conj (toss b) item)))

(defn removeFromStack [b]
  (let [items (toss b)]
    (if (empty? items)
      {:b b
       :item 0}
      {:b (setNewToss b (pop items))
       :item (peek items)})))

(defn removeManyFromStack [nb many]
  (if (< many 0) ;bad value
    {:b nb :items []}
    (loop [items [] board nb]
      (if (= (count items) many)
        {:b board :items items}
        (let [{:keys [b item]} (removeFromStack board)]
          (recur (conj items item) b))))))

(defn reflect [b]
  (assoc b :dir (map #(* -1 %) (:dir b))))

(defn charcode [c]
  #?(:clj (int c)
     :cljs (.charCodeAt c 0)))

(def numberInsts
  (loop [insts {}
         digit 0]
    (if (= digit 10)
      insts
      (recur
       (assoc insts
              (char (+ (charcode \0) digit))
              (fn [b] (addToStack b digit)))
       (inc digit)))))

(def upperCharInsts
  (loop [insts {}
         c 0]
    (if (= c 26)
      insts
      (recur (assoc insts (char (+ (charcode \A) c)) (fn [b] (reflect b))) (inc c)))))

(defn mathop [op]
  (fn [b]
    (let [one (removeFromStack b)
          two (removeFromStack (:b one))]
      (try
        (addToStack (:b two) (op (:item two) (:item one)))
        #?(:clj (catch ArithmeticException e (addToStack (:b two) 0)))
        (catch #?(:clj Exception :cljs js/Object) e
          (do
            (println "math exception" op (:item two) (:item one))
            (throw e)))))))

(def maxValue (quot #?(:clj Integer/MAX_VALUE :cljs 2147483647) 2)) ; divided by two to avoid exceeding MAX_VALUE while we're doing clipValue
(def negMaxValue (* -1 maxValue))

; want a value between -maxValue .. +maxValue
; Start by adding maxValue to get all the valid values within 0..(2*maxValue)
; Then mod to clip within that range
; Then subtract maxValue to get it back to the original value

(defn clipValue [val]
  (if (and (< val maxValue) (< negMaxValue val))
    val
    (- (mod (+ val maxValue) (* maxValue 2)) maxValue)))

(defn throw-msg [msg]
  #?(:clj (throw (Exception. msg))
     :cljs (js/throw msg)))

(defn current
  ([b] (current (:grid b) (reverse (:pc b))))
  ([grid pc]
   (if (empty? pc)
     (if (seq? grid)
       (throw-msg "Grid still a sequence")
       grid)
     (current
      (get grid (clipValue (first pc)) \ )
      (rest pc)))))

(defn orderedPoint [b order]
  (loop [grid (:grid b)
         values []]
    (if (char? grid)
      values
      (let [currentKey (first (sort order (keys grid)))]
        (recur (get grid currentKey) (conj values currentKey))))))

(defn leastPoint [b] (orderedPoint b <))
(defn greatestPoint [b] (orderedPoint b >))

(defn- step
  ([pc dir] (step pc dir 1))
  ([pc dir howMany] (map #(clipValue (+ %1 (* howMany %2))) pc dir)))

(defn jumpPC
  [grid pc dir]
  (let [d (first dir)
        c (first pc)
        s (fn [hm val] (step (rest pc) (rest dir) (hm c val)))
        cu (fn [hm val] (current (get grid val) (s hm val)))
        j (fn [order choose howMany]
            (let [items (sort order (filter (partial choose c) (keys grid)))
                  coord (some #(if (= \  (cu howMany %)) false %) items)
                  ret
                  (if (nil? coord)
                    (if (or (= d -1) (= d 1))
                      (first (sort order (keys grid)))
                      (let [n (+ 1 (howMany c (+ 1 maxValue)))
                            init (step pc dir n)]
                        (do
                          ;(println "jumping" init)
                          (first (jumpPC grid init dir)))))
                    coord)]
              (conj (step (rest pc) (rest dir) (howMany c ret)) ret)))]
    (cond
      (= d -1) (j > > (constantly 1))
      (> d 0)
      (j <
         #(let [diff (- %2 %1)]
            (do
              (if (not= d 1)
                  ;(println d "diff" %1 %2 diff)
                nil)
              (and (< 0 diff) (= (rem diff d) 0))))
         #(let [diff (- %2 %1)
                n (quot diff d)]
            (do
              (if (not= d 1)
                  ;(println d "n" %1 %2 n)
                nil)
              n)))
      (= d 0) (conj (jumpPC (get grid c) (rest pc) (rest dir)) c)
      :else (throw-msg "Flying!"))))

(defn updatePCSkipSpace
  ([b noJump dir]
   (let [initial (step (:pc b) dir)
         sp (peek (toss b))
         spaceValue (int \ )]
     (cond
       noJump
       (assoc b :pc initial)
       (not= (current (:grid b) (reverse initial)) \ ) ; shortcut for simple "not a space" cases
       (assoc b :pc initial)
       (:stringMode b)
       (if (= sp spaceValue)
         (assoc b :pc initial)
         (addToStack (assoc b :pc (reverse (jumpPC (:grid b) (reverse (:pc b)) (reverse dir)))) spaceValue))
       :else
       (assoc b :pc (reverse (jumpPC (:grid b) (reverse (:pc b)) (reverse dir))))))))

(defn updatePC
  ([b] (updatePC b false))
  ([b noJump] (updatePC b noJump (:dir b)))
  ([b noJump dir]
   (loop [nb (updatePCSkipSpace b noJump dir)
          colonMode false]
     (if (or noJump (:stringMode nb))
       nb
       (if (= \; (current nb))
         (recur (updatePCSkipSpace nb noJump dir) (not colonMode))
         (if colonMode
           (recur (updatePCSkipSpace nb noJump dir) colonMode)
           nb))))))

(defn setVal
  [grid coord value]
  (if
   (= (count coord) 0)
    value
    (assoc grid (clipValue (first coord)) (setVal (get grid (clipValue (first coord))) (rest coord) value))))

(defn rotateCCW [b] (assoc b :dir (let [[x y] (:dir b)] [(* y -1) x])))
(defn rotateCW [b]  (assoc b :dir (let [[x y] (:dir b)] [y (* x -1)])))

(defn clipChar [i]
  (cond
    (char? i) i
    (> i #?(:clj (int Character/MAX_VALUE) :cljs 65535)) \ 
    (< i 0) \ 
    :default (char i)))

(defn runInst [b inst]
  (let [insts (:inst b)
        f (get insts inst)]
    (if (and (not= inst \") (:stringMode b))
      (if (and (not (empty? (toss b))) (= (clipChar inst) \  (clipChar (peek (toss b)))))
        b
        (addToStack b (charcode inst)))
      (if (nil? f)
        (do
          (str "No such command '" inst "'" (seq (:pc b)))
          ;(if (and (<= (int inst) 128) (>= (int inst) 32)) ; within valid range, but undefined
          (reflect b))
        (f b)))))

(defn popMany [st ct]
  (if (= ct 0)
    st
    (if (= (count st) 0)
      []
      (popMany (pop st) (- ct 1)))))

(defn peekMany
  ([st ct] (peekMany st ct []))
  ([st ct items]
   (if (= ct 0)
     items
     (if (= (count st) 0)
       (peekMany [] (- ct 1) (cons 0 items))
       (peekMany (pop st) (- ct 1) (cons (peek st) items))))))

(defn pushMany [existing more]
  (vec (concat existing more)))

(defn transfer [src dest ct rev]
  (let [op (if rev reverse identity)
        newSrc (popMany src ct)
        newDest (pushMany dest (op (peekMany src ct)))]
    (do
      ;(println "transfer" src dest ct)
      ;(println "transfer" newSrc newDest)
      [newSrc newDest])))

(defn makeFingerprint [nb]
  (let [{:keys [b item]} (removeFromStack nb)
        {:keys [b items]} (removeManyFromStack b item)
        fingerprint (reduce #(+ (* 256 %1) %2) 0 items)]
    {:b b
     :fingerprint fingerprint}))

(def initialInstructions
  (merge
   numberInsts
   upperCharInsts
   {\  (fn [b] b)
    \. (fn [b]
         (let [{:keys [b item]} (removeFromStack b)]
           (do
             (print (str item " "))
             (flush)
             b)))
    \, (fn [b]
         (let [{:keys [b item]} (removeFromStack b)]
           (do
             (print (str (char item)))
             (flush)
             b)))
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
                    [-1 0]))))
    \| (fn [nb]
         (let [{:keys [b item]} (removeFromStack nb)]
           (assoc b :dir
                  (if (= item 0)
                    [0 1]
                    [0 -1]))))
    \+ (mathop +)
    \- (mathop -)
    \* (mathop *)
    \/ (mathop quot)
    \% (mathop rem)
    \` (mathop #(if (> %1 %2) 1 0))
    \\ (fn [b]
         (let [one (removeFromStack b)
               two (removeFromStack (:b one))]
           (addToStack (addToStack (:b two) (:item one)) (:item two))))
    \: (fn [nb]
         (let [{:keys [b item]} (removeFromStack nb)]
           (addToStack (addToStack b item) item)))
    \! (fn [nb]
         (let [{:keys [b item]} (removeFromStack nb)]
           (addToStack b (if (= item 0) 1 0))))
    \p (fn [nb]
         (let [{:keys [b items]} (removeManyFromStack nb 3)
               [y x v] items
               [ox oy] (map + [x y] (:storageOffset b))]
           (assoc b :grid (setVal (:grid b) [oy ox] (clipChar v)))))
    \g (fn [nb]
         (let [{:keys [b items]} (removeManyFromStack nb 2)
               [y x] items]
           (addToStack b (int (current (:grid b) [y x])))))
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
           (do
               ;(println "pushing" (int (current b)) (:pc b))
             (addToStack b (charcode (current b))))))
    \w (fn [nb]
         (let [{:keys [b items]} (removeManyFromStack nb 2)
               [one two] items]
           (if (< one two)
             (rotateCCW b)
             (if (> one two)
               (rotateCW b)
               b))))
    \x (fn [nb]
         (let [{:keys [b items]} (removeManyFromStack nb 2)
               [x y] items]
           (assoc b :dir [y x])))
    \t reflect ; FIXME: change this to implement concurrency
    \k (fn [nb]
         (let [nextinst (current (updatePC nb))
               {:keys [b item]} (removeFromStack nb)]
           (if (= item 0)
             (updatePC b) ; 0k needs to skip, which is weird...
             (loop [x (range item)
                    ret b]
               (do
                   ;(println "k" nextinst x (int nextinst) (current ret) (:pc (updatePC nb)))
                 (if (empty? x)
                   ret
                   (recur (rest x) (runInst ret nextinst))))))))
    \n (fn [b] (setNewToss b []))
    \r reflect
    \u (fn [nb]
         (if (= (count (ross nb)) 0)
           (reflect nb)
           (let [{:keys [b item]} (removeFromStack nb)]
             (cond (= item 0)
                   b
                   (> item 0)
                   (let [[s t] (transfer (soss b) (toss b) item true)]
                     (newTossAndSoss b t s))
                   (< item 0)
                   (let [[t s] (transfer (toss b) (soss b) (* -1 item) true)]
                     (newTossAndSoss b t s))))))
    \s (fn [nb]
         (let [{:keys [b item]} (removeFromStack (updatePC nb true))]
           (assoc b :grid (setVal (:grid b) (reverse (:pc b)) (clipChar item)))))
    \z (fn [b] b)
    \j (fn [nb]
         (let [{:keys [b item]} (removeFromStack nb)
               dir (if (< item 0) (map #(* % -1) (:dir b)) (:dir b))
               newI (if (< item 0) dec inc)]
           (do
               ;(println "jump" (toss nb) item (:stack nb))
             (loop [i 0
                    b2 b]
               (if (= i item)
                 b2
                 (recur (newI i) (updatePC b2 true dir)))))))
    \{ (fn [nb]
         (let [{:keys [b item]} (removeFromStack nb)
               newBoard (assoc b :stack (conj (:stack b) []))
               vecConcat (comp vec concat)
               elementBoard
               (cond (< item 0)
                     (setNewSoss newBoard (vecConcat (soss newBoard) (repeat (* -1 item) 0)))
                     (= item 0)
                     newBoard
                     (> item 0)
                     (let [[s t] (transfer (soss newBoard) (toss newBoard) item false)]
                       (newTossAndSoss newBoard t s)))]
           (do
                  ;(println "stack" (:stack nb) item)
                  ;(println "stack" (:stack newBoard) (toss newBoard))
                  ;(println "stack" (:stack elementBoard))
                  ;(println "so" (step (:pc elementBoard) (:dir elementBoard)))
             (assoc
              (setNewSoss elementBoard (vecConcat (soss elementBoard) (:storageOffset elementBoard)))
              :storageOffset (step (:pc elementBoard) (:dir elementBoard))))))
    \} (fn [nb]
         (let [{:keys [b item]} (removeFromStack nb)
               [y x] (peekMany (soss b) 2)
               newBoard (setNewSoss b (popMany (soss b) 2))
               vecConcat (comp vec concat)
               elementBoard
               (cond (< item 0)
                     (setNewSoss newBoard (vec (popMany (soss newBoard) (* -1 item))))
                     (= item 0)
                     newBoard
                     (> item 0)
                     (let [[t s] (transfer (toss newBoard) (soss newBoard) item false)]
                       (newTossAndSoss newBoard t s)))]
           (do
                  ;(println "} stack" (:stack nb))
                  ;(println "} stack" (:stack newBoard))
                  ;(println "} stack" (:stack elementBoard))
                  ;(println "so" x y (:storageOffset nb))
             (if (= (count (ross nb)) 0)
               (reflect nb)
               (assoc
                (assoc elementBoard :stack (ross elementBoard))
                :storageOffset [x y])))))
    \y (fn [nb]
         (let [cal #?(:clj (-> (java.util.Calendar/getInstance) .getTime bean) :cljs (js/Date.))
               {:keys [b item]} (removeFromStack nb)
               info
               (concat
                [0 ; no concurrency, no I/O, no execute
                 -1 ; lots!
                 (reduce #?(:clj #(+' (*' 256 %1) %2)
                            :cljs #(dc/+ (dc/mul 256 %1) (dc/decimal %2))) (map int "Clostridium")) ; handprint
                 100 ; version number (1.00)
                 0 ; operating paradigm unavailable
                 (int (. java.io.File pathSeparatorChar))
                 2 ; befunge
                 0 ; IP identifier
                 0 ; IP team number
]
                (reverse (:pc b))
                (reverse (:dir b))
                (reverse (:storageOffset b))
                (leastPoint b)
                (greatestPoint b)
                [(+ (* 256 256 (:year cal)) (* 256 (inc (:month cal))) (:date cal))
                 (+ (* 256 256 (:hours cal)) (* 256 (:minutes cal)) (:seconds cal))
                 (count (:stack b))]
                (for [x (:stack b)] (count x))
                (repeat 5 0))
               newBoard (setNewToss nb (pushMany (toss b) (reverse info)))]
           (if (> item 0)
             (let [keptItem (peek (popMany (toss newBoard) (- item 1)))]
               (do
                      ;(println "kept" item keptItem (:dir nb) (:storageOffset nb) (:pc nb))
                 (addToStack b keptItem)))
             newBoard)))
    \( (fn [nb]
         (let [{:keys [b fingerprint]} (makeFingerprint nb)]
           (do
                 ;(println "Begin Fingerprint" fingerprint)
             (reflect b)))) ; FIXME: unimplemented
    \) (fn [nb]
         (let [{:keys [b fingerprint]} (makeFingerprint nb)]
           (do
                 ;(println "End fingerprint" fingerprint)
             (reflect b)))) ; FIXME: unimplemented
}))

(defn buildGridfromString [data]
  (let [fixedData (apply str (remove #(= % \formfeed) data))
        lines (split fixedData #"(?:(?:\r\n)|\n|\r)")]
    (zipmap (range (count lines)) (map #(zipmap (range (count %1)) (vec %1)) lines))))

(defn makeInitial [data]
  {:grid (buildGridfromString data)
   :inst initialInstructions
   :pc [0,0]
   :dir [1,0]
   :stack [[]]
   :running true
   :stringMode false
   :storageOffset [0,0]})

(defn doInst [b]
  (let [inst (char (current b))]
    (updatePC (runInst b inst))))

(defn doAndPrint [b]
  (let [ret (doInst b)]
    (do
      ;(prn (:pc ret) (:dir ret) (current ret) (:stack ret))
      ret)))

(defn runBefunge [data]
  (loop [b (makeInitial data)]
    (if (:running b)
      (recur (doAndPrint b)))))

#?(:clj
   (defn -main
     [fname]
     (runBefunge (slurp fname))))
