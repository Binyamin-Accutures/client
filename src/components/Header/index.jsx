import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import styles from './style.module.css'
import {BiUser} from 'react-icons/bi'
import InputSelect from '../InputSelect';



function Header() {
//     const loggedOut= (e)=>{
// <InputSelect   label={'hi'}  options={'log out'}  width={'150px'}  setSelectInput />
//     }
        const arr =["UserName@mail.co.il","logOut"]
    
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
            <BiUser className={styles.userIcon}/> <InputSelect className={styles.select}  options={arr}  width={'150'} />
        </div>
    </header>
    </>
  )
}

export default Header
