import React from 'react'
import styles from "./style.module.css"
import { useState } from "react";


function Checkbox( { label , className = "" , onChange , ...props } ) {


    // const [isChecked, setIsChecked] = useState (false);

  return (


    <div> 
        <label>
        <input type="checkbox" className={styles.checkbox} checked = {props.prev}  onChange={() => props.set( !props.prev)}   {...props} />
        <span> {label} </span>
        {/* <p>{props.prev? "Selected" : "Unchecked"}</p> */}
        </label>
    </div>
  )
}


export default Checkbox;