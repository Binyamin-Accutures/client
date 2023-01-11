import React from 'react'
import styles from "./style.module.css"
import { useState } from "react";


function Checkbox({ label, className = "", name, onChange, ...props }) {

  return (

    <div>
      <label>
        <input type="checkbox" className={styles.checkbox} name={name} checked={props.prev} onChange={(e) => onChange(e.target)}   {...props} />
        <span> {label} </span>
      </label>

      
    </div>
  )
}


export default Checkbox;