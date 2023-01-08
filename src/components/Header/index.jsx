import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import styles from './style.module.css'
import {BiUser} from 'react-icons/bi'



function Header() {
  return (
    <>
    <header className={styles.headerContainer}>
        <div className={styles.logo}><img src={logo} alt='logo'/>  Accutures </div>
        <div className={styles.navContainer}>
            <NavLink  className={styles.navitem} to='/loadimage'>
                    Load Image
            </NavLink>
            <NavLink  className={styles.navitem} to='/calibration'>
                    Calibration
            </NavLink>
            <NavLink  className={styles.navitem} to='/history'>History</NavLink>
        </div>
        <div className={styles.userBar}>
        <NavLink  to='/login' className={styles.userName}>
        <BiUser className={styles.userIcon}/>UserName@mail.co.il</NavLink>
        </div>
    </header>
    </>
  )
}

export default Header
