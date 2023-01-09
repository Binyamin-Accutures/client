import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./style.module.css";


function logOut({setIsShow} ){
    return (
        <>
 <button className={styles.logoutComp} >
    logOut
 </button>
 <div className={styles.closeBtn} onClick={()=>setIsShow(false)}></div>
        </>
    )
}

export default logOut