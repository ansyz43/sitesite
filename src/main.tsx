import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/fonts.css";
import "./styles/global-font.css";
import { BrowserRouter } from "react-router-dom";

import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

const basename = import.meta.env.BASE_URL;

// Add font loading detection
const root = document.getElementById("root")!;
root.classList.add("font-loading-hidden");

// Create a font observer
document.fonts.ready.then(() => {
  // Once fonts are loaded, show content
  root.classList.remove("font-loading-hidden");
  root.classList.add("fonts-loaded");
});

ReactDOM.createRoot(root).render(
  <React.StrictMode className="text-lg tracking-wide text-[#efefef] font-light">
    <BrowserRouter
      basename={basename}
      className="text-center tracking-wide leading-6 text-base font-medium"
    >
      <App />
    </BrowserRouter>
    <small className="text-sm font-medium leading-none">Small</small>
  </React.StrictMode>,
);
