import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import styles from './style.module.css'
import { BiUser } from 'react-icons/bi'
import Logout from '../Logout'

// creator:moran and adel
// data : header after login



function Header() {
    const [isShow, setIsShow] = useState(false)


    return (
        <>



            <header className={styles.headerContainer}>
                <div className={styles.logo}><img src={logo} alt='logo' />  Accutures </div>
                <div className={styles.navContainer}>
                    <NavLink className={styles.navitem} to='/loadimage'>
                        Load Image
                    </NavLink>
                    <NavLink className={styles.navitem} to='/calibration'>
                        Calibration
                    </NavLink>
                    <NavLink className={styles.navitem} to='/history'>History</NavLink>
                </div>
                <div className={styles.userBar}>
                    <div className={styles.userName}>
                        <BiUser className={styles.userIcon} onClick={() => setIsShow(!isShow)} >
                        </BiUser></div>UserName@mail.co.il
                    {isShow && < Logout setIsShow={setIsShow} />}
                </div>




            </header>
        </>
    )
}
export default Header
