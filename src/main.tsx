import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import PublishFormPage from "./pages/PublishFormPage.tsx";
import CreateFormPage from "./pages/CreateFormPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublishFormPage />} />
        <Route path="/create-form" element={<CreateFormPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
