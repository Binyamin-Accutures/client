import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./style.module.css";


function logOut() {
    return (
        <>
 <button className={styles.logoutComp} >
    logOut
 </button>
        </>
    )
}

export default logOut