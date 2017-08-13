(ns clostridium.core
  (:require [reagent.core :as r]
            [clostridium.befunge :as befunge]))

(defonce app-state (r/atom {}))

(defn grid []
  (let [b (-> @app-state :b)
        data (:grid b)
        pc (:pc b)]
    [:div
     (doall (for [row (keys data)
                  column (keys (get data row))
                  value (get (get data row) column)
                  :let [id (str row "-" column "-")]]
              ^{:key (str id "sq")}
              [:div {:class (str (if (= pc [column row]) "active " "") "square")}
               value]))]))

(defn dev-setup []
  (when ^boolean js/goog.DEBUG
    (enable-console-print!)))

(defn reload []
  (r/render [grid]
            (.getElementById js/document "app")))

(defn ^:export main []
  (dev-setup)
  (swap! app-state assoc :b (befunge/makeInitial "64+\"!dlroW ,olleH\">:#,_@"))
  (reload))