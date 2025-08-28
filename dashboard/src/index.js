import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login_user";
import AuthProvider from "./components/Context";
import ProtectedRoute from "./components/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
       <Route path="/login" element={<Login/>} />
        <Route path="/*" element={
          <ProtectedRoute>
          <Home />
        </ProtectedRoute>
          } />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
