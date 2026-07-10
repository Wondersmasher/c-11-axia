import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GreetingsApp, Assessment } from "./App";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Assessment />,
  </StrictMode>,
);
