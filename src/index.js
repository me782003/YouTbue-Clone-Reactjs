import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css"
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";


createRoot(document.getElementById("root")).render(
  //wrap all app wih provider
  <Provider store={store}>
      <App />
  </Provider>
);
