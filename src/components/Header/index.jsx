import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import styles from './style.module.css'
import { BiUser } from 'react-icons/bi'
import Logout from '../Logout';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'




// creator:moran and adel
// data : header after login


import { useLocation } from "react-router-dom";


function Header() {


    const navigate = useNavigate()
    const [isNext, setIsNext] = useState(true)
    const [isBack, setIsBack] = useState(false)


    const [isShow, setIsShow] = useState(false)
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const next = () => {
        navigate('/calibration')
        setIsNext(false)
        setIsBack(true)
    }

    const back = () => {
        navigate('/loadimage')
        setIsNext(true)
        setIsBack(false)
    }

    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.logo}><img src={logo} alt='logo' />  Accutures </div>
                <div className={styles.navContainer}>
                    <NavLink className={splitLocation[1] === "loadimage" ? styles.active : styles.navitem} onClick={() => { setIsBack(false); setIsNext(true) }} to='/loadimage'>
                        Load Image
                    </NavLink>
                    <NavLink className={splitLocation[1] === "calibration" ? styles.active : styles.navitem} onClick={() => { setIsBack(true); setIsNext(false) }} to='/calibration'>
                        Calibration
                    </NavLink>
                    <NavLink className={splitLocation[1] === "history" ? styles.active : styles.navitem} to='/history' >History</NavLink>
                </div>
                <div className={styles.space} />
                {splitLocation[1] !== "history" && <div className={styles.backNext}>
                    <div className={isBack ? styles.backNextOn : styles.backNextOff} onClick={back}>  <IoIosArrowBack className={isBack ? styles.backNextOn : styles.backNextOff} />   Back</div>
                    <div className={isNext ? styles.backNextOn : styles.backNextOff} onClick={next}>Next    <IoIosArrowForward className={isNext ? styles.backNextOn : styles.backNextOff} /></div>
                </div>}
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
