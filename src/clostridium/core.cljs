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

(defn on-window-resize [evt]
  (let [maxwidth (- (-> "content" js/document.getElementById js/window.getComputedStyle .-width js/parseInt) 20)
        maxcolumns (js/Math.floor (/ maxwidth 39))
        firstcolumn (:firstcolumn @app-state)
        lastcolumn (+ firstcolumn maxcolumns -1)]
    (swap! app-state assoc :max-columns maxcolumns)))

(defn grid []
  (let [b (-> @app-state :b)
        data (:grid b)
        pc (:pc b)
        maxcolumns (:max-columns @app-state)
        firstcolumn (:firstcolumn @app-state)
        lastcolumn (+ firstcolumn maxcolumns -1)
        validcolumn (fn [column] (and (>= column firstcolumn) (< column lastcolumn)))]
    [:div
     (concat
      [^{:key "gap"} [:div {:class "square"} (gstring/unescapeEntities "&nbsp;")]]
      (doall (for [column (-> (sort-by #(count (keys %)) (vals data)) reverse first keys sort)
                   :when (validcolumn column)]
               ^{:key (gstring/format "col-%d" column)} [:div {:class "square column"} column]))
      (doall (for [row (-> data keys sort)]
               (concat [^{:key (gstring/format "split-%d" row)}
                        [:br {:style {:clear "both"}}]
                        ^{:key (gstring/format "row-%d" row)}
                        [:div {:class "square row"} row]]
                       (doall (for [column (sort (keys (get data row)))
                                    value (get (get data row) column)
                                    :let [id (str row "-" column "-")]
                                    :when (validcolumn column)]
                                ^{:key (str id "sq")}
                                [:div {:class (str (if (= pc [column row]) "active " "") "square")}
                                 (if (= value " ")
                                   (gstring/unescapeEntities "&nbsp;")
                                   value)]))))))]))

(defn run-step []
  (swap! app-state assoc :b (befunge/doInst (:b @app-state)))
  (let [boundary 5
        column (-> @app-state :b :pc first)
        maxcolumns (:max-columns @app-state)
        firstcolumn (:firstcolumn @app-state)
        lastcolumn (+ maxcolumns firstcolumn)]
    (if (> (+ column boundary) lastcolumn)
      (swap! app-state assoc :firstcolumn (- (+ column boundary) maxcolumns)))
    (if (< (- column boundary) firstcolumn)
      (swap! app-state assoc :firstcolumn (max 0 (- column boundary))))))

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
     [:h3 "Direction"]
     [:table
      [:tbody
       [:tr [:td "Column"] [:td (first dir)]]
       [:tr [:td "Row"] [:td (second dir)]]]]
     [:h3 "String Mode"]
     [:p (str (:stringMode b))]
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
                  [:li (inc j) " - " (str x)])])])])]))

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
            (.getElementById js/document "app"))
  (.addEventListener js/window "resize" on-window-resize)
  (on-window-resize nil))

(defn ^:export main []
  (dev-setup)
  (swap! app-state assoc :b (befunge/makeInitial "64+\"!dlroW ,olleH\">:#,_@" print-js))
  (reload))