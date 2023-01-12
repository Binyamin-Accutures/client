import React from 'react'
import styles from "./style.module.css"

// creator: Hadar Naiman
// color: _______________
// icon: ________________

export default function InputSelect({ label, options, width, setSelectInput,handle,dataDefault }) {
    return (<div >

        <label className={`styles.${label}`} forhtml="select">{label}</label><br />
        <select id={styles.select} defaultValue={dataDefault} name={label} style={{ width: `100%` }} onChange={(e) => handle(e.target)}>

            {options.map((v, i, arr) => <option key={i} className={styles.option} >{v}</option>)}
        </select> 
    </div >
    );
}