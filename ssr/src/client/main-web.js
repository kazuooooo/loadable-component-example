import "core-js";
import React from "react";
import { hydrate } from "react-dom";
import { loadableReady } from "@loadable/component";
import App from "./App";

// 非同期にコンポーネントを読み込み
loadableReady(() => {
  const root = document.getElementById("main");
  hydrate(<App />, root);
});
