import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import styles from './style.module.css'
import { BiUser } from 'react-icons/bi'
import language from '../../functions/language';
// creator:moran and adel
// data : header before login


function HeaderFirst() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.logo}> <img src={logo} alt='logo' /><div> {language.ACCUTURES}</div></div>
      </header>
    </>
  )
}

export default HeaderFirst
