import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./main.scss";
import App from "./App.jsx";
import { Provider } from "react-redux";

ReactDOM.render(
  <App />,
  document.querySelector(".root")
);
