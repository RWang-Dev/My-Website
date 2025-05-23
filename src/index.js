import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./AppContext";

// This is the root of the project!
// The file that actually creates the website itself. Note the syntax of this below
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);
