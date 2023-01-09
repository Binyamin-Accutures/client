import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import styles from './style.module.css'
import {BiUser} from 'react-icons/bi'



function HeaderFirst() {
  return (
    <>
    <header className={styles.headerContainer}>
        <div className={styles.logo}><img src={logo} alt='logo'/>  Accutures </div>
    </header>
    </>
  )
}

export default HeaderFirst
