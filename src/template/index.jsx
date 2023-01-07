import React from 'react'
import styles from "./style.module.css"

const Name = ({ style = {},className="", ...props }) => {

   return (
      <div className={`${styles.Name} ${className}`} style={style} {...props} >

      </div>
   )
}

export default Name