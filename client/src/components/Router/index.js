import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Success from "../../pages/Success";
import AdminLandingPage from "../../pages/AdminLandingPage";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/success" element={<Success />} />
      <Route path="/admin" element={<AdminLandingPage />} />
    </Routes>
  );
}

export default Router;
