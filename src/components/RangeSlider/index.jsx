import React, { useEffect, useState } from 'react';
import style from './style.module.css'

function RangeSlider({func, text, min, max, step=1 , textPosLeft=true, ...props}) {
    const [value, setValue] = useState()




    useEffect(() => {
        func(value)
    },[value])

    const handleChange = ({ target }) => {
        if(target.value > max || target.value < min) return
        setValue(Number(target.value))
 
    }

    return (
        <div className={textPosLeft ? style.container : style.containerSmall}>
            <span className={style.descrption}>{text}</span>
            <input type="range" className={style.slider}  min={min} max={max} step={step} value={value} onInput={handleChange}/>
            <input className={style.numberInput} type="number" value={value<min? min: value} onInput={handleChange}/>
        </div> 
    );
}

export default RangeSlider;
