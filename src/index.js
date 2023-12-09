import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css"
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
  //wrap all app wih provider
      <App />
);
