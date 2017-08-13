(ns clostridium.core_test
  (:require
   [clojure.test :refer [deftest is]]
   [clostridium.core :refer [runBefunge]]
   [clojure.pprint :refer [pprint]]))

(defn without-extension [path]
  (clojure.string/join "." (butlast (clojure.string/split path #"\."))))

(defn extension [path]
  (last (clojure.string/split path #"\.")))

(defmacro runPyfungeTests []
  (cons 'do
        (doall
         (for [folder (filter #(.contains ["befunge98"] (.getName %)) (.listFiles (java.io.File. "test/pyfunge")))
               testFile (filter #(.contains ["b98" "bf" "t98" "u98"] (extension (.getName %))) (.listFiles folder))
               :let [testPath (.getAbsolutePath testFile)
                     shortname (str (.getName folder) "-" (without-extension (.getName testFile)))]]
           `(deftest ~(symbol shortname)
              (let [expected# (slurp ~(str (without-extension testPath) ".expected"))
                    trimExpected# (subs expected# 0 (- (count expected#) 1))
                    result# (with-out-str (runBefunge ~testPath))]
                (is (= trimExpected# result#))))))))

(runPyfungeTests)