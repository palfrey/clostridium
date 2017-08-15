(ns clostridium.common
  (:require [reagent.core :as r]))

(defonce app-state (r/atom {:console ""
                            :auto-run false}))