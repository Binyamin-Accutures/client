import styles from "./style.module.css"
import React, { useState } from 'react'
import Header from "../../components/Header"
import ImageMainScreen from "../../components/ImageMainScreen"
import SideBar from "../../components/SideBar"
export default function CalibrationPage() {
  const [isAfterISP, setIsAfterISP] = useState(false)
  return (
    <div className={styles.layout}>
        <header className={styles.header}>
            <Header/>
        </header>
        <div className={styles.main}>
            <div className={styles.leftBar}>
              <SideBar/>
            </div>
            <div className={styles.mainBar}>
              <ImageMainScreen/>
            </div>
            <div className={styles.rightBar}>rightBar</div>

        </div>
    </div>
  )
}

