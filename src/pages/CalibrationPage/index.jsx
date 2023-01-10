import styles from "./style.module.css"
import React, { useState } from 'react'
import Header from "../../components/Header"
import MainBar from "../../components/MainBar"
import SideBar from "../../components/SideBar"
import DisplaySettings from "../../components/DisplaySettings"
export default function CalibrationPage() {
  const [isAfterISP, setIsAfterISP] = useState(false)
  return (
        <div className={styles.main}>
            <div className={styles.leftBar}>
              <SideBar/>
            </div>
            <div className={styles.mainBar}>
              <MainBar/>
            </div>
            <div className={styles.rightBar}><DisplaySettings/></div>

        </div>
  )
}

