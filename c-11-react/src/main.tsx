import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FakeStoreApiParentComponent, GreetingsApp } from "./App";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Assessment />, */}
    <FakeStoreApiParentComponent />
    <GreetingsApp />
  </StrictMode>,
);
