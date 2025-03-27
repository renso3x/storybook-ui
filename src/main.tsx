import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeWrapper } from "./themes/theme-wrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </StrictMode>
);
