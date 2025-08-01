import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./stylesheets/index.scss";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
