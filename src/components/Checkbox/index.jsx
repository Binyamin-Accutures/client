import React from 'react'
import styles from "./style.module.css"
import { useState } from "react";


function Checkbox( { label , className = "" , name,  onChange , ...props } ) {


    // const [isChecked, setIsChecked] = useState (false);

  return (


    <div> 
        <label>
        <input type="checkbox" className={styles.checkbox} name={name} checked = {props.prev}  onChange={(e)=>onChange(e.target) }   {...props} />
        <span> {label} </span>
        {/* <p>{props.prev? "Selected" : "Unchecked"}</p> */}
        </label>
    </div>
  )
}


export default Checkbox;