import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./style.module.css";
import { BiLogOutCircle } from 'react-icons/bi'
import UserContext from '../../context/UserContext';

// creator:moran and adel
// data : logout button, apeare when the user icon is pressed

function LogOut({ setIsShow }) {
    const {setIsLogged, setUser } = useContext(UserContext)

    const logOutClicked = () => {
        localStorage.clear();
        setUser();
        setIsLogged(false);
    }
    return (
        <>
            <div className={styles.logoutComp} >
                <BiLogOutCircle className={styles.logoutIcon} /><br />

                <button onClick={logOutClicked} className={styles.logoutBtn}>logOut</button>
                
            </div>
            <div className={styles.closeBtn} onClick={() => setIsShow(false)}></div>
        </>

    )
}

export default LogOut
