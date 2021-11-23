(ns ridho.app
  (:require [rumext.alpha :as mf]))

(mf/defc Main
  []
  (let [state (mf/use-state 0)]
    [:div {}
     [:div "Hello, this is from rumext!"]
     [:button {:onClick (fn [] (swap! state inc))} (str "Click=" @state)]]
    ))
