(ns clostridium.all_tests
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [clostridium.befunge_test]))

(doo-tests 'clostridium.befunge_test)