import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./style.module.css"

// creator: israel israeli
// color: _______________
// icon: ________________

export default function ChangeFrame({ color, icon, func, ...props }) {

    const [chooseMinRange, setChooseMinRange] = useState(1)
    const [chooseMaxRange, setChooseMaxRange] = useState(1)
    const [files, setFiles] = useState(new Array(5))
    const [chooseFiles, setCooseFiles] = useState([])


    useEffect(()=>{
        setChooseMaxRange(chooseMinRange)
    },[chooseMinRange])

    console.log(chooseMinRange);
    console.log(chooseMaxRange);
    console.log(files);



    return (<>
        <div >
            <input type="range" min={1} max={files.length} onChange={(e)=> setChooseMinRange(e.target.value)}/><span>{chooseMinRange}</span>
            <input type="range" min={chooseMinRange} max={files.length} onChange={(e)=> setChooseMaxRange(e.target.value)}/><span>{chooseMaxRange}</span>
        </div>
    </>
    );
}