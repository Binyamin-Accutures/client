import React from 'react'
import InputSelect from '../InputSelect';
import styles from "./style.module.css";

function Demosaic({data}) {
    
  return (
    <div>
        <div>
            <input type="checkbox" id="checkbox" name={Object.keys(data)}/>
            <label for="checkbox">Enabled</label>
        </div>
        {/* <InputSelect />
        <InputSelect /> */}
    </div>
  )
}

export default Demosaic