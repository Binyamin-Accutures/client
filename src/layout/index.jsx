import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import CalibrationPage from "../pages/CalibrationPage";
import HistoryPage from "../pages/HistoryPage";
import LoadImagePage from "../pages/LoadImagePage";
import styles from "./style.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header />
      </header>
      <div>
        <Routes>
          <Route path="/*" element={<LoadImagePage />} />
          <Route path="/calibration" element={<CalibrationPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </div>
  );
}
