import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <section className="flex w-full h-screen">

      <App />
    </section>
  </StrictMode>
);
