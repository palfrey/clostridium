(ns clostridium.befunge_test
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [clostridium.befunge_test_core :refer-macros [runPyfungeTests]]))

(runPyfungeTests)