(ns clostridium.core_test
  (:require
   [clojure.test :refer [deftest is]]
   [clostridium.core :refer [runBefunge]]
   [clojure.pprint :refer [pprint]]))

(defmacro runPyfungeTests []
  (cons 'do
        (doall
         (let [folder (java.io.File. "test/pyfunge/befunge98")]
           (for [testFile (filter #(.endsWith (.getName %) ".b98") (.listFiles folder))
                 :let [testPath (.getAbsolutePath testFile)
                       shortname (str (.getName folder) "-" (.replace (.getName testFile) ".b98" ""))]]
             `(deftest ~(symbol shortname)
                (let [expected# (slurp ~(.replace testPath ".b98" ".expected"))
                      trimExpected# (subs expected# 0 (- (count expected#) 1))
                      result# (with-out-str (runBefunge ~testPath))]
                  (is (= trimExpected# result#)))))))))

(runPyfungeTests)