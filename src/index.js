import "./scss/index.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom";

import App from "./js/containers/App";
import Title from "./js/components/Title";

ReactDOM.render(<App />, document.getElementById("react-app"));
ReactDOM.render(<Title />, document.getElementById("footer"));
