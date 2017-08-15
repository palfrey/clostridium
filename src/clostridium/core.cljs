(ns clostridium.core
  (:require [reagent.core :as r]
            [clostridium.befunge :as befunge]
            [goog.string :as gstring]
            [goog.string.format]
            [clojure.contrib.humanize :as human]))

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
  (let [b (:b @app-state)
        pc (:pc b)
        dir (:dir b)]
    [:div
     [:button {:style {:width "60px" :height "30px"} :on-click #(swap! app-state assoc :b (befunge/doInst b))} "Step"]
     [:h3 "Program Counter"]
     [:table
      [:tr [:td "Column"] [:td (first pc)]]
      [:tr [:td "Row"] [:td (second pc)]]]
     [:h3 "Stack"]
     [:ul
      (for [[i stack] (map-indexed vector (:stack b))]
        ^{:key (gstring/format "stack-%d" i)}
        [:li (human/ordinal (inc i))
         (if (empty? stack) " (empty)"
             [:ul
              (for [[j x] (map-indexed vector stack)]
                ^{:key (gstring/format "stack-%d-%d" i j)}
                [:li (inc j) " - " (str x)])])])]
     [:h3 "Direction"]
     [:table
      [:tr [:td "Column"] [:td (first dir)]]
      [:tr [:td "Row"] [:td (second dir)]]]
     [:h3 "String Mode"]
     [:p (str (:stringMode b))]]))

(defn display []
  [:div
   [:div {:id "header"} [:h1 [:a {:href "https://github.com/palfrey/clostridium"} "Clostridium"]]]
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