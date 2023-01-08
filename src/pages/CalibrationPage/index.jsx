import styles from "./style.module.css"

import React from 'react'

export default function CalibrationPage() {
  return (
    <div className={styles.layout}>
        <header className={styles.header}>
            header
        </header>
        <div className={styles.main}>
            <div className={styles.leftBar}>leftBar</div>
            <div className={styles.mainBar}>
                mainBar
            </div>
            <div className={styles.rightBar}>rightBar</div>

        </div>
    </div>
  )
}

