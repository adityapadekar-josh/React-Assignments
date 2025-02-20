import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "src/index.css";
// import App from "src/assignment-1/App";
import App from "src/assignment-2/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
