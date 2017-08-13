(defproject clostridium "0.1"
  :description "Befunge interpreter in Clojure"
  :url "https://github.com/palfrey/Clostridium"
  :license {:name "GNU Affero General Public License v3"
            :url "http://www.gnu.org/licenses/agpl-3.0.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]]
  :main clostridium.core
  :aliases {"fmt-and-test" ["do" ["cljfmt" "fix"] ["cljfmt" "fix" "project.clj"] "test"]}
  :plugins [[lein-auto "0.1.3"]
            [lein-cljfmt "0.5.7"]])
