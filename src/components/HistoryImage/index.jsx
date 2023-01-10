import React from 'react'
import styles from './style.module.css'

import { FaTrashAlt } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa'
import { CiClock2 } from 'react-icons/ci'
import { VscFilePdf } from 'react-icons/vsc'
import { AiOutlineCalendar } from 'react-icons/ai'
import { TbFileDownload } from 'react-icons/tb'




function HistoryImage({ src, time, date, imgName }) {
    return (
        <div>HistoryImage
            <div className={styles.img_container}>
                <div className={styles.downloadAndDelete}>
                    <div className={styles.downloadIcon}>
                        <span><VscFilePdf className={styles.icon} /></span>
                        <span>view PDF</span>
                    </div>

                    <div className={styles.downloadIcon}>
                        <span><TbFileDownload className={styles.icon} /></span>
                        <span>download</span>
                    </div>

                    <div className={styles.downloadIcon}>
                        <span><FaTrashAlt className={styles.icon} /></span>
                        <span>delete</span>
                    </div>
                </div>
                <img className={styles.img} src={src} alt="" />
                <span className={styles.imgName}>{imgName}</span>
                <div className={styles.bottom}>Creation
                    <span><CiClock2 className={styles.icon} /> {time}</span>
                    <span><AiOutlineCalendar className={styles.icon} />{date}</span>
                </div>
            </div>
        </div>
    )
}

export default HistoryImage