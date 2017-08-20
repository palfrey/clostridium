(ns clostridium.common
  (:require [reagent.core :as r]))

(defonce app-state
  (r/atom {:console ""
           :auto-run false
           :firstcolumn 0
           :example "Hello World!"
           :ms-per-step 300}))

(defn print-js [msg]
  (swap! app-state update :console #(str % msg)))