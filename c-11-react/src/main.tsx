// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FakeStoreApiParentComponent } from "./App";
createRoot(document.getElementById("root")!).render(
  <FakeStoreApiParentComponent />,
  // <StrictMode>
  //   {/* <Assessment />, */}
  //   {/* <FakeStoreApiParentComponent />
  //   <GreetingsApp /> */}
  // </StrictMode>,
);
