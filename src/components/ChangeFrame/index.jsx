import React from 'react'
import { useState } from 'react';
import RangeSlider from '../RangeSlider';
import styles from "./style.module.css";


// creator: elisha izak & dudu ben hamo
// Instructions: The files should arrive in context
//               And the minimum and maximum should also come in the context or props  


export default function ChangeFrame({ className, images, setChooseMaxRange, setChooseMinRange, chooseMinRange}) {
 
    
    return (<>
        <div className={`${styles.allFrame} ${className}`}>
            <RangeSlider className={styles.frame} 
            min={1} max={images.length} 
            func={(target) => setChooseMinRange(target.value)} 
            text='Start Frame' />
            <RangeSlider className={styles.frame} 
            min={chooseMinRange} max={images.length} 
            func={(target) => setChooseMaxRange(target.value)} 
            text='End Frame' />
        </div>
    </>
    );
}

