import React, { useEffect, useRef, useState } from 'react';
import style from './style.module.css'

function RangeSlider({func,name='', className='', text, min, max, step=1 , textPosLeft=true, ...props}) {
    const [value, setValue] = useState(min)








    const handleChange = ({ target }) => {

        if(target.value > max ) setValue(() => max)
        else if(target.value < min ) setValue(() => min)
        else setValue(() => Number(target.value))
        if(func) func(target)

    }

  
    

       
    

    return (
        <div className={className? className : 'container'}>
            <div className={textPosLeft ? style.container : style.containerSmall}>
                <span className={style.descrption}>{text}</span>
                <input type="range" className={style.slider}  min={min} max={max} step={step} value={value} onInput={handleChange} name={name}/>
                <input className={style.numberInput} type="number" value={value < min ? min : value} onInput={handleChange} name={name} />
            </div>
        </div>
    );
}


export default RangeSlider;
