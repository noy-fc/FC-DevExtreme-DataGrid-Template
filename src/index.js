import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App";

function MainApp() {
  return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MainApp />, rootElement);
