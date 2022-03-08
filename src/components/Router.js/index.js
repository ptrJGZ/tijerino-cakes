import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Navbar from "../Navbar";

function Router() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Router;
