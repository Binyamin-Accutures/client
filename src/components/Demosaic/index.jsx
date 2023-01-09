import React from 'react'
import { useState, useEffect } from 'react';
import InputSelect from '../InputSelect';
import styles from "./style.module.css";
import onChangeSideBar from '../../functions/onChangeSideBar'

function Demosaic(props) {
    const methodData = props.data.demosaic.method;
    const pixelOrderData = props.data.demosaic.pixelOrder;
    const showData = (e) => {
        console.log(selectPixelOrder);
        console.log(selectMethod);
        console.log(isEnabled);
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
            <input type="checkbox" id="enabled" name="enabled" value="1" onChange={(e) => changeCheckbox(e)}/>
            <label for="enabled">enabled</label>
        </div>
        <InputSelect label="Method" options={methodData} width="265" setSelectInput={setSelectMethod}/>
        <InputSelect label="Pixel Order" options={pixelOrderData} width="265" setSelectInput={setSelectPixelOrder}/>
    </div>
  )
}

export default Demosaic