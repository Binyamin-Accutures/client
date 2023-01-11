import React from 'react'
import styles from "./style.module.css"
import { GoAlert } from "react-icons/go";
import language from '../../functions/language';

function ModalPopUp({setShow,show, fonc, delname}) {

  return (<>
    
    {show ? 

  
  <div className={styles.modalcontent}>
    
    <p><b>{language.HISTORY_POPUP_H1}</b></p> <GoAlert color="red"/>

    <p>This operation <b>cannot</b> be undone!</p>


    <span className={styles.btns}>
        <button className={styles.btnDelete} onClick={() => fonc(delname)}>{language.HISTORY_POPUP_YES}</button>
        <button className={styles.btnCancel} onClick={() => setShow(false)}>{language.HISTORY_POPUP_NO}</button>
    </span>
  </div>

:null}
</>
  )
}

export default ModalPopUp