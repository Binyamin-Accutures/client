import React from 'react'
import styles from "./style.module.css"
import { GoAlert } from "react-icons/go";

function ModalPopUp({setShow,show, fonc, delname}) {

  return (<>
    
    {show ? 

  
  <div className={styles.modalcontent}>
    
    <p><b>Are you sure you want to delete?</b></p> <GoAlert color="red"/>

    <p>This operation <b>cannot</b> be undone!</p>


    <span className={styles.btns}>
        <button className={styles.btnDelete} onClick={() => fonc(delname)}>Yes, delete this image</button>
        <button className={styles.btnCancel} onClick={() => setShow(false)}>Cancel , keep this image</button>
    </span>
  </div>

:null}
</>
  )
}

export default ModalPopUp