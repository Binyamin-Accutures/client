import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ForgotPassPage from "../pages/ForgotPassPage";
import RenewPassPage from "../pages/RenewPassPage";

export default function LayoutLogin({ setUser }) {
  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser}/>} />
      <Route path="/login" element={<LoginPage  setUser={setUser}/>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot" element={<ForgotPassPage />} />
      <Route path="/renew" element={<RenewPassPage setUser={setUser}/>} />
      <Route path="/renew/:token" element={<RenewPassPage />} />
      <Route path="/*" element={<LoginPage setUser={setUser}/>} />
    </Routes>
  );
}
