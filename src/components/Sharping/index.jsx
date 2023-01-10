import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import InputSelect from '../InputSelect';
import styles from "./style.module.css";
import onChangeSideBar from '../../functions/onChangeSideBar'
import RangeSlider from "../RangeSlider"
import Input from "../Input"
import ImageContext from '../../context/ImageContext';

function Sharping(props) {
    const value = useContext(ImageContext);
    const radiusData = props.data.sharpening.radius;
    const espData = props.data.sharpening.ESP;
    const treholdData = props.data.sharpening.trehold;
    const methodData = props.data.sharpening.method;
    // ! gets the values of demosaic method inside of beforeISP
    const methodOption = value.beforeISP.sharpening.method;
    // ! gets the values of demosaic method inside of beforeISP
    const radiusOption = value.beforeISP.sharpening.radius;
    // ! gets the values of demosaic method inside of beforeISP
    const espOption = value.beforeISP.sharpening.ESP;    

    const [selectMethod, setSelectMethod] = useState('');
    const [selectPixelOrder, setSelectPixelOrder] = useState('');
    const [isEnabled, setIsEnabled] = useState(true);

    function stam (){
        console.log('hello');
    }

    const showData = (e) => {
      console.log(methodOption);
      console.log(radiusOption);
      console.log(espOption);
      // console.log(selectMethod);
      // console.log(isEnabled);
  }

    const handle = (e)=>{
      let name = e;
      console.log(e);
      let valueToChange = e;
      console.log(valueToChange);

      value.setBeforeISP(preve=>{
          const newobj =  {...preve}
          newobj.sharpening[name]=valueToChange
          return newobj
      })

  }

  return (
    <div>
        <button onClick={(e) => showData(e)}>Click Me!</button>
        <InputSelect label="method" options={methodData} width="265" setSelectInput={setSelectMethod} handle={handle}/>
        <RangeSlider func={stam} text='Radius' name="radius" min={radiusData} max={100} textPosLeft={false} onInput={handle} handleChange={handle}/>
        <RangeSlider  func={stam} text='EPS' name="EPS" min={espData} max={1} step={0.001} textPosLeft={false} />
        <RangeSlider func={stam} text='Trehold' name="Trehold" min={treholdData} max={10} step={0.1} textPosLeft={false}/>
    </div>
  )
}

export default Sharping