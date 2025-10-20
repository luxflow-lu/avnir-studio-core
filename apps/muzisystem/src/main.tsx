import React from "react";
import ReactDOM from "react-dom/client";
import "@avnir/tokens/themes.css";
import "@avnir/ui/styles.css";
import "./app.css";
import { Provider } from "./Provider";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
