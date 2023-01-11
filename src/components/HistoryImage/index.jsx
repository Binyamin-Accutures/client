import React from 'react'
import styles from './style.module.css'

import { FaTrashAlt } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa'
import { CiClock2 } from 'react-icons/ci'
import { VscFilePdf } from 'react-icons/vsc'
import { AiOutlineCalendar } from 'react-icons/ai'
import { TbFileDownload } from 'react-icons/tb'
import { RiPencilFill } from 'react-icons/ri'




function HistoryImage({ src, time, date, imgName, funcDel, imgLink }) {
    return (
        <div>
            <div className={styles.img_container}>
                <div className={styles.downloadAndDelete}>
                <div className={styles.downloadIcon}>
                        <span className={styles.upperIcons}><RiPencilFill className={styles.icon}/></span>
                        <span className={styles.upperText}>edit</span>
                    </div>
                    <div className={styles.downloadIcon}>
                        <span className={styles.upperIcons}><VscFilePdf className={styles.icon} /></span>
                        <span className={styles.upperText}>view PDF</span>
                    </div>

                    <div className={styles.downloadIcon}>
                        <span className={styles.upperIcons}><a href="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip" download><TbFileDownload className={styles.icon} /></a></span>
                        <span className={styles.upperText}>download</span>
                    </div>

                    <div className={styles.downloadIcon}>
                        <span className={styles.upperIcons}><FaTrashAlt className={styles.icon} onClick={()=>funcDel(imgName)}/></span>
                        <span className={styles.upperText}>delete</span>
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