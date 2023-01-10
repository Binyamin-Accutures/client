import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import InputSelect from '../InputSelect';
import styles from "./style.module.css";
import onChangeSideBar from '../../functions/onChangeSideBar'
import RangeSlider from "../RangeSlider"
import Input from "../Input"
import ImageContext from "../../context/ImageContext"


function Sharping(props) {
    const radiusData = props.data.sharpening.radius;
    const espData = props.data.sharpening.ESP;
    const treholdData = props.data.sharpening.trehold;
    const methodData = props.data.sharpening.method;

    const [selectMethod, setSelectMethod] = useState('');
    const [selectPixelOrder, setSelectPixelOrder] = useState('');
    const [isEnabled, setIsEnabled] = useState(true);

    const value = useContext(ImageContext)


    function stam (){
        console.log('hello');
    }


    const handle = (e)=>{
      let name = e.name
      let valueToChange = e.value
      value.setBeforeISP(preve=>{
      const newobj =  {...preve}
         newobj.sharpening[name]=valueToChange
         return newobj
      })
      
          }

  return (
    <div>
        <InputSelect label="Method" options={methodData} width="265" setSelectInput={setSelectMethod}/>
        <RangeSlider func={handle} text='Radius' name='radius' min={radiusData} max={100} textPosLeft={false} numInput={false} />
        <RangeSlider  func={stam} text='EPS' min={espData} max={1} step={0.001} textPosLeft={false} numInput={false}/>
        <RangeSlider func={stam} text='Trehold' min={treholdData} max={10} step={0.1} textPosLeft={false} numInput={false}/>
        <div>
          <br /><br /><br />
          {`${value.beforeISP.sharpening.radius}`}
<input type="range" onChange={(e)=>console.log(e.target.value)} />
        </div>
    </div>
  )
}

export default Sharping