import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CalibrationPage from '../pages/CalibrationPage'
import HistoryPage from '../pages/HistoryPage'
import LoadImagePage from '../pages/LoadImagePage'

export default function Matanel() {
  return (
    <Routes >
        <Route path="/"/>
        <Route path="/loadimage" element={<LoadImagePage/>}/>
        <Route path="/calibration" element={<CalibrationPage/>}/>
        <Route path="/history" element={<HistoryPage/>}/>
    </Routes>
  )
}
