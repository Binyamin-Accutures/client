import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import styles from './style.module.css'
import { BiUser } from 'react-icons/bi'
import Logout from '../Logout';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'



// creator:moran and adel
// data : header after login


import { useLocation } from "react-router-dom";


function Header() {
    const [isShow, setIsShow] = useState(false)
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.logo}><img src={logo} alt='logo' />  Accutures </div>
                <div className={styles.navContainer}>

                    <NavLink className={splitLocation[1] === "loadimage" ? styles.active : styles.navitem} to='/loadimage'>
                        Load Image
                    </NavLink>
                    <NavLink className={splitLocation[1] === "calibration" ? styles.active : styles.navitem} to='/calibration'>
                        Calibration
                    </NavLink>
                    <NavLink className={splitLocation[1] === "history" ? styles.active : styles.navitem} to='/history'>History</NavLink>
                </div>
                <div className={styles.space} />
                <div className={styles.backNext}>
                    <div className={styles.backNextOff}>  <IoIosArrowBack className={styles.backNextOff} />   Back</div>
                    <div className={styles.backNextOff}>Next    <IoIosArrowForward className={styles.backNextOff} /></div>
                </div>
                <div className={styles.userBar}>

                    <BiUser className={styles.userIcon} onClick={() => setIsShow(!isShow)} >
                    </BiUser>

                    {isShow && < Logout setIsShow={setIsShow} />}
                </div>






            </header>
        </>
    )
}
export default Header
