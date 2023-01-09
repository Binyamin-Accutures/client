import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import InputSelect from '../InputSelect';
import styles from "./style.module.css";
import onChangeSideBar from '../../functions/onChangeSideBar'
import ImageContext from '../../context/ImageContext';

function Demosaic(props) {
    const value = useContext(ImageContext)
    const methodData = props.data.demosaic.method;
    const pixelOrderData = props.data.demosaic.pixelOrder;
   
    const showData = (e) => {
        console.log(selectPixelOrder);
        console.log(selectMethod);
        console.log(isEnabled);
    }

    const handle = (e)=>{
let name = e.name
let valueToChange = e.value
value.setBeforeISP(preve=>{
const newobj =  {...preve}
   newobj.demosaic[name]=valueToChange
   return newobj
})

    }

    const changeCheckbox  = (e) => {
        setIsEnabled(!isEnabled)
    }

      const [selectMethod, setSelectMethod] = useState('');
      const [selectPixelOrder, setSelectPixelOrder] = useState('');
      const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div>
        <div>
            {/* <input type="checkbox" id="enabled" name="enabled" value="1" onChange={(e) => hendel(e)}/>
            <label for="enabled">enabled</label> */}
        </div>
        <InputSelect label="method" options={methodData} width="265" setSelectInput={setSelectMethod} handle={ handle}/>
        <InputSelect label="pixelOrder" options={pixelOrderData} width="265" setSelectInput={setSelectPixelOrder} handle={ handle}/>
   
        <div>{value.beforeISP.demosaic.method}</div>
        <div>{value.beforeISP.demosaic.pixelOrder}</div>
    </div>
  )
}

export default Demosaic