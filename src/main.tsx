import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";
import App from "@components/App";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/5s-processes/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
