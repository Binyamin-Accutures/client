import { useState } from "react";
import styles from "./style.module.css"

// creator: israel israeli
// color: _______________
// icon: ________________

const  SideBar = () => {
const [beforeISPTemp,setBeforeISPTemp]=useState({});
   return (
      <form className={styles.form}>
      <div className={styles.SideBar} >
      <div className={styles.div}>
     
      </div>
      </div>
      <input type="submit"></input>
      </form>

   )
}
export default SideBar;
