import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import RangeSlider from '../RangeSlider';
import styles from "./style.module.css"

// creator: israel israeli


export default function ChangeFrame() {

    const [chooseMinRange, setChooseMinRange] = useState(1)
    const [chooseMaxRange, setChooseMaxRange] = useState(1)
    const [files, setFiles] = useState(new Array(5))
    // const [chooseFiles, setCooseFiles] = useState([])


    useEffect(()=>{
        setChooseMaxRange(chooseMinRange)
    },[chooseMinRange])

    console.log(chooseMinRange);
    console.log(chooseMaxRange);
    console.log(files);



    return (<>
        <div className={styles.allFrame}>
            <p className={styles.frame}><RangeSlider min={1} max={files.length} fun={(e)=> setChooseMinRange(e.target.value)} text='Start Frame'/></p>
            <p className={styles.frame}><RangeSlider min={chooseMinRange} max={files.length} fun={(e)=> setChooseMaxRange(e.target.value)} text='End Frame'/></p>
        </div>
    </>
    );
}