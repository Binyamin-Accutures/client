import React from 'react'
import { useState, useEffect } from 'react';
import InputSelect from '../InputSelect';
import styles from "./style.module.css";
import onChangeSideBar from '../../functions/onChangeSideBar'
import RangeSlider from "../RangeSlider"
import Input from "../Input"

function Sharping(props) {
    const radiusData = props.data.sharpening.radius;
    const espData = props.data.sharpening.ESP;
    const treholdData = props.data.sharpening.trehold;
    const methodData = props.data.sharpening.method;

    const [selectMethod, setSelectMethod] = useState('');
    const [selectPixelOrder, setSelectPixelOrder] = useState('');
    const [isEnabled, setIsEnabled] = useState(true);

    function stam (){
        console.log('hello');
    }

  return (
    <div>
        <InputSelect label="Method" options={methodData} width="265" setSelectInput={setSelectMethod}/>
        <RangeSlider func={stam} text='Radius' min={radiusData} max={100} textPosLeft={false} />
        <RangeSlider  func={stam} text='EPS' min={espData} max={1} step={0.001} textPosLeft={false} />
        <RangeSlider func={stam} text='Trehold' min={treholdData} max={10} step={0.1} textPosLeft={false}/>
    </div>
  )
}

export default Sharping