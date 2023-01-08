import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./style.module.css"
import {BiUser} from 'react-icons/bi'
// creator: israel israeli
// color: _______________
// icon: ________________

 function Header() {
    return (
        <div>
            <header className= {styles.headerContainer}>
               <div className= {styles.logo}><img src='/images/logo.svg' alt='logo'/>Accutures </div>
                <nav className={styles.navContainer}>
                <NavLink  className= {styles.navItem}to='/loadImage'>Load Image</NavLink>
                <NavLink className= {styles.navItem} to='/calibration'>Calibration</NavLink>
                <NavLink className= {styles.navItem} to='/history'>History</NavLink>
                </nav>
                <div className= {styles.userBar}>
                <NavLink to="/login" className={styles.userName}>
                    <BiUser className={styles.userIcon}/>username@gmail.com
                    </NavLink> 
                </div>
            </header>
        </div>
    )
 }

export default Header
