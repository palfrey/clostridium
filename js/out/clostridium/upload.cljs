; Based off https://mrmcc3.github.io/post/csv-with-clojurescript/

(ns clostridium.upload
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [chan put!]]
            [clostridium.befunge :as befunge]
            [clostridium.common :refer [app-state print-js]]))

(def first-file
  (map (fn [e]
         (let [target (.-currentTarget e)
               file (-> target .-files (aget 0))]
           (set! (.-value target) "")
           file))))

(def extract-result
  (map #(-> % .-target .-result)))

(def upload-reqs (chan 1 first-file))
(def file-reads (chan 1 extract-result))

(defn put-upload [e]
  (put! upload-reqs e))

(defn upload-btn [file-name]
  [:p "Load file"
   [:label
    [:input.hidden-xs-up
     {:type "file" :on-change put-upload}]
    [:i.fa.fa-upload.fa-lg]
    (or file-name "")]
   (when file-name
     [:i.fa.fa-times {:on-click #(swap! app-state dissoc :data)}])])

(go-loop []
  (let [reader (js/FileReader.)
        file (<! upload-reqs)]
    (swap! app-state assoc :file-name (.-name file))
    (set! (.-onload reader) #(put! file-reads %))
    (.readAsText reader file)
    (recur)))

(defn load-program [data]
  (swap! app-state assoc
         :b (befunge/makeInitial data print-js)
         :console ""
         :auto-run false
         :firstcolumn 0))

(go-loop []
  (swap! app-state assoc :data (<! file-reads))
  (load-program (:data @app-state))
  (recur))