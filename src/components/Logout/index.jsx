import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./style.module.css";
import { BiLogOutCircle } from 'react-icons/bi'

// creator:moran and adel
// data : logout button, apeare when the user icon is pressed
function logOut({ setIsShow }) {
    return (
        <>
            <div className={styles.logoutComp} >
                <BiLogOutCircle className={styles.logoutIcon} /><br />

                <button className={styles.logoutBtn}>logOut</button>
            </div>
            <div className={styles.closeBtn} onClick={() => setIsShow(false)}></div>
        </>

    )
}

export default logOut