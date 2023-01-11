import React, { useContext, useEffect,  useState } from 'react';
import style from './style.module.css'
import ImageContext from '../../context/ImageContext';

function RangeSlider({func, name='', className='', text, min, max, step=1 , textPosLeft=true, numInput=true, contextValue , ...props}) {
    const [value, setValue] = useState(isNaN(contextValue) ? min : contextValue)
    const { afterISP, setAfterISP } = useContext(ImageContext)

    useEffect(() => {
        if(!isNaN(contextValue) && contextValue != value) {
            setValue(() => contextValue)
        }
    },[])

    useEffect(() => {
        if(!isNaN(contextValue) && contextValue != value) {
            setValue(() => contextValue)
        }
    },[value])


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
                <input type="range" className={style.slider}  min={min} max={max} step={step} value={value} onInput={handleChange} name={name} />
                {numInput ? 
                    <input className={style.numberInput} type="number" value={value < min ? min : value} onInput={handleChange} name={name} /> :
                    <span className={style.numberInput}>{value}</span>
                }
            </div>
        </div>
    );
}


export default RangeSlider;
