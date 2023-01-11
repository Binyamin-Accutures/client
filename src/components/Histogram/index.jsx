import React from 'react'
import InputCheckBox from '../InputCheckBox'
import SectionBorder from '../SectionBorder'
import Checkbox from '../Checkbox'
import styles from './style.module.css'
import language from '../../functions/language'

function Histogram() {
    return (
        
            <SectionBorder  height="224px" width="100%">
                <div className={styles.histogramAll}>
                <label className={styles.histogram}> {language.HISTOGRAM}</label>
                <label className={styles.show}>{language.SHOW}
                &nbsp;&nbsp;<Checkbox /> </label>
                 </div>
                
                 
            </SectionBorder>
        

    )
}

export default Histogram