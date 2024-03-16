import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feedback from "./pages/Feedback.jsx";
import FeedbackDetail from "./pages/Feedback/FeedbackDetail.jsx";
import { Package } from "./pages/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/detail" element={<FeedbackDetail />} />
          <Route path="/package-list" element={<Package />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
