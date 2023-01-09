import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ForgotPassPage from "../pages/ForgotPassPage";
import RenewPassPage from "../pages/RenewPassPage";

export default function LayoutLogin({setUser}) {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot" element={<ForgotPassPage />} />
      <Route path="/renew" element={<RenewPassPage />} />
      <Route path="/renew/:token" element={<RenewPassPage />} />
    </Routes>
  );
}
