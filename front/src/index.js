import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/app.css";
// import "antd/dist/antd.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
