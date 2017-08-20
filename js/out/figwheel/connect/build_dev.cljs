(ns figwheel.connect.build-dev (:require [clostridium.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/clostridium.core.reload (apply js/clostridium.core.reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'clostridium.core/reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

