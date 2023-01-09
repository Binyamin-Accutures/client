import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import RangeSlider from '../RangeSlider';
import styles from "./style.module.css"

// creator: elisha izak & dudu ben hamo
// Instructions: The files should arrive in context
//               And the minimum and maximum should also come in the context or props  


export default function ChangeFrame() {

    const [chooseMinRange, setChooseMinRange] = useState(1)
    const [chooseMaxRange, setChooseMaxRange] = useState(1)
    const files= new Array(35)


    useEffect(()=>{
        setChooseMaxRange(chooseMinRange)
    },[chooseMinRange])


    console.log(chooseMinRange)
    console.log(chooseMaxRange);
   



    return (<>
        <div className={styles.allFrame}>
            <span className={styles.frame}><RangeSlider min={1} max={files.length} func={setChooseMinRange} text='Start Frame'/></span>
           < span className={styles.frame}><RangeSlider min={chooseMinRange} max={files.length } func={setChooseMaxRange} text='End Frame'/></span>
        </div>
    </>
    );
}