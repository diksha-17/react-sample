import React from "react"
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Nilesh from "./nilesh.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// ReactDOM.createRoot(entryPoint).render(<Nilesh />);
// ReactDOM.createRoot(entryPoint).render(React.createElement(App))
