import React from 'react'
import InputCheckBox from '../InputCheckBox'
import SectionBorder from '../SectionBorder'
import styles from './style.module.css'

function Histogram() {
    return (
        <div>
            <SectionBorder  height="224px">
                <label className={styles.histogram}> language.HISTOGRAM</label>
                {/* <div> <InputCheckBox /> </div> */}
            </SectionBorder>
        </div>

    )
}

export default Histogram