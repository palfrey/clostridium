(ns clostridium.befunge_test
  (:require
   [clojure.test :refer [deftest is]]
   [clostridium.befunge :refer [runBefunge]]
   [clojure.pprint :refer [pprint]]
   [clojure.string :as str]))

(defn without-extension [path]
  (str/join "." (butlast (str/split path #"\."))))

(defn extension [path]
  (last (str/split path #"\.")))

(defn trim-one-newline [data]
  (let [to-remove
        (cond (str/ends-with? data "\r\n") 2
              (str/ends-with? data "\n") 1
              :else 0)]
    (subs data 0 (- (count data) to-remove))))

(defmacro runPyfungeTests []
  (cons 'do
        (doall
         (for [folder (filter #(.contains ["befunge98"] (.getName %)) (.listFiles (java.io.File. "test/pyfunge")))
               testFile (filter #(.contains ["b98" "bf" "t98" "u98"] (extension (.getName %))) (.listFiles folder))
               :let [testPath (.getAbsolutePath testFile)
                     shortname (str (.getName folder) "-" (without-extension (.getName testFile)))]]
           `(deftest ~(symbol shortname)
              (let [expected# (slurp ~(str (without-extension testPath) ".expected"))
                    trimExpected# (str/replace (trim-one-newline expected#) "\r\n" "\n")
                    result# (with-out-str (runBefunge (slurp ~testPath)))]
                (is (= trimExpected# result#))))))))

(runPyfungeTests)