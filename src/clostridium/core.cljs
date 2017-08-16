(ns clostridium.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [clostridium.befunge :as befunge]
            [goog.string :as gstring]
            [goog.string.format]
            [clojure.contrib.humanize :as human]
            [cljs.core.async :refer [<! timeout]]
            [clostridium.common :refer [app-state print-js]]
            [clostridium.upload :refer [upload-btn]]))

(defn grid []
  (let [b (-> @app-state :b)
        data (:grid b)
        pc (:pc b)]
    [:div
     (concat
      [^{:key "gap"} [:div {:class "square"} (gstring/unescapeEntities "&nbsp;")]]
      (doall (for [column (keys (get data 0))]
               ^{:key (gstring/format "col-%d" column)} [:div {:class "square column"} column]))
      (doall (for [row (keys data)]
               (concat [^{:key (gstring/format "split-%d" row)}
                        [:br {:style {:clear "both"}}]
                        ^{:key (gstring/format "row-%d" row)}
                        [:div {:class "square row"} row]]
                       (doall (for [column (keys (get data row))
                                    value (get (get data row) column)
                                    :let [id (str row "-" column "-")]]
                                ^{:key (str id "sq")}
                                [:div {:class (str (if (= pc [column row]) "active " "") "square")}
                                 (if (= value " ")
                                   (gstring/unescapeEntities "&nbsp;")
                                   value)]))))))]))

(defn run-step []
  (swap! app-state assoc :b (befunge/doInst (:b @app-state))))

(defn info []
  (let [b (:b @app-state)
        pc (:pc b)
        dir (:dir b)
        stacks (:stack b)]
    [:div
     (if (:running b)
       [:div
        (if (:auto-run @app-state)
          [:button {:style {:width "60px" :height "30px"}
                    :on-click #(swap! app-state assoc :auto-run false)}
           "Stop"]
          [:button {:style {:width "60px" :height "30px"}
                    :on-click #(swap! app-state assoc :auto-run true)}
           "Run"])
        [:button {:style {:width "60px" :height "30px"}
                  :on-click run-step}
         "Step"]]
       [:h3 "State: Finished"])
     [:h3 "Program"]
     [upload-btn (:file-name @app-state)]
     [:h3 "Program Counter"]
     [:table
      [:tbody
       [:tr [:td "Column"] [:td (first pc)]]
       [:tr [:td "Row"] [:td (second pc)]]]]
     [:h3 "Stack"]
     (if (and (= (count stacks) 1) (empty? (first stacks)))
       " (empty)"
       [:ul
        (for [[i stack] (map-indexed vector stacks)]
          ^{:key (gstring/format "stack-%d" i)}
          [:li (human/ordinal (inc i))
           (if (empty? stack) " (empty)"
               [:ul
                (for [[j x] (map-indexed vector stack)]
                  ^{:key (gstring/format "stack-%d-%d" i j)}
                  [:li (inc j) " - " (str x)])])])])
     [:h3 "Direction"]
     [:table
      [:tbody
       [:tr [:td "Column"] [:td (first dir)]]
       [:tr [:td "Row"] [:td (second dir)]]]]
     [:h3 "String Mode"]
     [:p (str (:stringMode b))]]))

(defn console []
  [:div
   [:h3 "Console"]
   [:p (str (:console @app-state))]])

(defn display []
  (if (and (-> @app-state :b :running) (:auto-run @app-state))
    (go
      (<! (timeout 300))
      (run-step)))
  [:div
   [:div {:id "header"} [:h1 [:a {:href "https://github.com/palfrey/clostridium"} "Clostridium"]]]
   [:div {:id "navigation"} [info]]
   [:div {:id "content"} [grid]]
   [:div {:id "console"} [console]]])

(defn dev-setup []
  (when ^boolean js/goog.DEBUG
    (enable-console-print!)))

(defn reload []
  (r/render [display]
            (.getElementById js/document "app")))

(defn ^:export main []
  (dev-setup)
  (swap! app-state assoc :b (befunge/makeInitial "64+\"!dlroW ,olleH\">:#,_@" print-js))
  (reload))