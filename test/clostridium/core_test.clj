(ns clostridium.core_test
    (:require
        [clojure.test :refer [testing deftest is run-tests]]
        [clostridium.core :refer [runBefunge]]
        [clojure.pprint :refer [pprint]]
        )
    )

(defmacro runPyfungeTests []
  (cons 'do (doall (for [
        folder (.listFiles (java.io.File. "test/pyfunge"))
        testFile (filter #(.endsWith (.getName %) ".b98") (.listFiles folder))
        :let [
            testPath (.getAbsolutePath testFile)
            shortname (str (.getName folder) "-" (.replace (.getName testFile) ".b98" ""))
            ]
      ]
      `(deftest ~(symbol shortname)
      (let [
            expected# (slurp ~(.replace testPath ".b98" ".expected"))
            trimExpected# (subs expected# 0 (- (count expected#) 1))
            result# (with-out-str (runBefunge ~testPath))
           ]
            (is (= trimExpected# result#))
      )
    )
  )))
)

(runPyfungeTests)