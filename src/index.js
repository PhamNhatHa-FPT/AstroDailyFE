import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// redux
import store from "./store";
import { Provider } from "react-redux";
// css
import "./assets/css/css.css";
import "./assets/css/et-core-unified-deferred-242798.min.css";
import "./assets/css/style-static.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
