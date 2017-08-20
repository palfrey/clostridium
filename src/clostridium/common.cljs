(ns clostridium.common
  (:require
   [reagent.core :as r]
   [clojure.string :as string]))

(defonce app-state
  (r/atom {:console ""
           :auto-run false
           :firstcolumn 0
           :example "Hello World!"
           :ms-per-step 300}))

(defn count-return [string]
  (loop [characters string
         ret-count 0]
    (cond (empty? characters) ret-count
          (= (first characters) "\n") (recur (subs characters 1) (inc ret-count))
          :else (recur (subs characters 1) ret-count))))

(defn print-js [msg]
  (swap! app-state update
         :console
         #(let [new-console (str % msg)
                returns (count-return new-console)]
            (if (> returns 1)
              (subs new-console (inc (string/index-of new-console "\n")))
              new-console))))