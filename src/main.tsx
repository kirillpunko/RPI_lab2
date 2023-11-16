import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n.ts";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback={<div>loading....</div>}>
      <App />
    </Suspense>
  </BrowserRouter>,
);
