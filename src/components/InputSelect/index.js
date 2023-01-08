import React from 'react'
import styles from "./style.module.css"

// creator: Hadar Naiman
// color: _______________
// icon: ________________

export default function InputSelect({ label, options, width }) {
    return (<div >
        <label className={`styles.${label}`} forhtml="select">{label}</label><br />
        <select id={styles.select} style={{ width: `${width}px` }} onChange={(e) => console.log(e.target.value)}>
            {options.map((v, i, arr) => <option key={i} >{v}</option>)}
        </select>
    </div >
    );
}