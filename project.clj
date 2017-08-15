(defproject clostridium "0.1"
  :description "Befunge interpreter in Clojure"
  :url "https://github.com/palfrey/Clostridium"
  :license {:name "GNU Affero General Public License v3"
            :url "http://www.gnu.org/licenses/agpl-3.0.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.854"]
                 [reagent "0.7.0"]
                 [funcool/decimal "1.0.1"]
                 [clojure-humanize "0.2.2"]]
  :main clostridium.core
  :aliases {"fmt-all" ["do" ["cljfmt" "fix"] ["cljfmt" "fix" "project.clj"]]
            "fmt-and-test" ["do" "fmt-all" "test"]
            "check-fmt" ["do" ["cljfmt" "check"] ["cljfmt" "check" "project.clj"]]
            "cljs-test" ["doo" "node" "test" "once"]
            "fmt-and-test-cljs" ["do" "fmt-all" "cljs-test"]}
  :cljfmt {:file-pattern #"\.clj[sxc]?$"}
  :figwheel {:css-dirs ["resources/public/css"]}
  :test-paths ["test/clj"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/"]
                        :figwheel {:on-jsload "clostridium.core/reload"}
                        :compiler {:main "clostridium.core"
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/clostridium.js"
                                   :output-dir "resources/public/js/out"}}
                       {:id "test"
                        :source-paths ["src" "test/clj" "test/cljs"]
                        :compiler {:output-to "resources/public/js/testable.js"
                                   :output-dir "resources/public/js/test"
                                   :main clostridium.all_tests
                                   :optimizations :none
                                   :target :nodejs}}]}
  :plugins [[lein-auto "0.1.3"]
            [lein-cljfmt "0.5.7"]
            [lein-figwheel "0.5.12"]
            [lein-cljsbuild "1.1.4"]
            [lein-doo "0.1.7"]])
