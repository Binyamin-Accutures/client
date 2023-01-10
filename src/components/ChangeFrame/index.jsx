import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import RangeSlider from '../RangeSlider';
import styles from "./style.module.css"

// creator: elisha izak & dudu ben hamo
// Instructions: The files should arrive in context
//               And the minimum and maximum should also come in the context or props  


export default function ChangeFrame({ className }) {
    const [chooseMinRange, setChooseMinRange] = useState(1)
    const [chooseMaxRange, setChooseMaxRange] = useState(1)
    const files = new Array(35)





    return (<>
        <div className={`${styles.allFrame} ${className}`}>
            <span ><RangeSlider className={styles.frame} min={1} max={files.length} func={(target) => setChooseMinRange(target.value)} text='Start Frame' /></span>
            <span ><RangeSlider className={styles.frame} min={chooseMinRange} max={files.length} func={(target) => setChooseMaxRange(target.value)} text='End Frame' /></span>
        </div>
    </>
    );
}

