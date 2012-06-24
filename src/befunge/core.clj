(ns befunge.core
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
     \_ (fn [b]
          (let [{:keys [b item]} (removeFromStack b)]
            (assoc b :dir
              (if (= item 0)
                [1 0]
                [-1 0]
              )
            )
          )
        )
     \+ (fn [b]
          (let [one (removeFromStack b)
                two (removeFromStack (:b one))]
            (addToStack (:b two) (+ (:item one) (:item two)))
          )
        )
     \: (fn [b] (addToStack b (peek (:stack b))))
     }
  )
)

(defn buildGrid [fname]
  (let [data (slurp fname)
        lines (split-lines data)]
    (map vec lines)))

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

(defn current
  ([b] (current (:grid b) (reverse (:pc b))))
  ([grid pc]
   (if
     (empty? pc)
      grid
      (current (nth grid (first pc)) (rest pc))
   )
  )
)

(defn updatePC [b]
  (assoc b :pc (map + (:pc b) (:dir b)))
)

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
      ;(prn ret)
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
