import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./css/style.css";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}