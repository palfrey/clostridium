(ns clostridium.core
  (:require [reagent.core :as r]
            [clostridium.befunge :as befunge]
            [goog.string :as gstring]
            [goog.string.format]))

(defonce app-state (r/atom {}))

(defn grid []
  (let [b (-> @app-state :b)
        data (:grid b)
        pc (:pc b)]
    [:div
     (concat
      [^{:key "gap"} [:div {:class "square"} (gstring/unescapeEntities "&nbsp;")]]
      (doall (for [column (keys (get data 0))]
               ^{:key (gstring/format "col-%d" column)} [:div {:class "square column"} column]))
      [^{:key "split"} [:br {:style {:clear "both"}}]]
      (doall (for [row (keys data)]
               (cons ^{:key (gstring/format "row-%d" row)} [:div {:class "square row"} row]
                     (doall (for [column (keys (get data row))
                                  value (get (get data row) column)
                                  :let [id (str row "-" column "-")]]
                              ^{:key (str id "sq")}
                              [:div {:class (str (if (= pc [column row]) "active " "") "square")}
                               value]))))))]))

(defn info []
  (let [b (-> @app-state :b)]
    [:div
     [:h3 "PC"]
     [:p (str (:pc b))]
     [:h3 "Stack"]
     [:p (str (:stack b))]
     [:h3 "Direction"]
     [:p (str (:dir b))]
     [:h3 "String mode"]
     [:p (str (:stringMode b))]]))

(defn display []
  [:div
   [:div {:id "header"} [:h1 "Clostridium"]]
   [:div {:id "navigation"} [info]]
   [:div {:id "content"} [grid]]])

(defn dev-setup []
  (when ^boolean js/goog.DEBUG
    (enable-console-print!)))

(defn reload []
  (r/render [display]
            (.getElementById js/document "app")))

(defn ^:export main []
  (dev-setup)
  (swap! app-state assoc :b (befunge/makeInitial "64+\"!dlroW ,olleH\">:#,_@"))
  (reload))