import React from 'react'
import styles from './style.module.css'
import pdf from './pdf.svg'
import pdf2 from './pdf2.svg'
import uploadTimeIcon from './uploadTimeIcon.svg'
import dateIcon from './dateIcon.svg'
import deleteIcon from './deleteIcon.svg'

import {FaTrashAlt} from 'react-icons/fa'
import {FaDownload} from 'react-icons/fa'

function HistoryImage({ src, time, date,imgName }) {
    return (
        <div>HistoryImage
            <div className={styles.img_container}>
                <div className={styles.downloadAndDelete}>
                    <div className={styles.downloadIcon}>
                        <span className={styles.icon}><FaDownload/></span>
                        <p>download</p>
                    </div>
                    <div className={styles.deleteIcon}>
                        <span className={styles.icon}><FaTrashAlt/></span>
                        {/* <img className={styles.icon} src={deleteIcon} alt="" /> */}
                        <p>delete</p>

                    </div>
                </div>
                <img className={styles.img} src={src} alt="" />
                <span className={styles.imgName}>{imgName}</span>
                <div className={styles.bottom}>Creation
                    <img className={styles.icon} src={uploadTimeIcon} alt="" />{time}
                    <img className={styles.icon} src={dateIcon} alt="" />{date}
                </div>
            </div>
        </div>
    )
}

export default HistoryImage