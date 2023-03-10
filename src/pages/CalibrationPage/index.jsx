import styles from "./style.module.css"
import React, { useState } from 'react'
import Header from "../../components/Header"
import MainBar from "../../components/MainBar"
import SideBar from "../../components/SideBar"
import DisplaySettings from "../../components/DisplaySettings"
import BackendStatus from "../../components/BackendStatus"
export default function CalibrationPage() {
  const [isAfterISP, setIsAfterISP] = useState(false)
  return (
        <div className={styles.main}>
            <div className={styles.leftBar}>
              <SideBar setIsAfterISP={setIsAfterISP}/>
            </div>
            <div className={styles.mainBar}>
              <MainBar/>
            </div>
            <div className={styles.rightBar}>
              <DisplaySettings/>
               {isAfterISP&&<BackendStatus/>}
            
            </div>

        </div>
  )
}

