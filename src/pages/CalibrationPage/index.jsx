import styles from "./style.module.css"
import React, { useState } from 'react'
import Header from "../../components/Header"
import ImageMainScreen from "../../components/ImageMainScreen"
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
              <ImageMainScreen/>
            </div>
            <div className={styles.rightBar}><DisplaySettings/></div>

        </div>
  )
}

