import React from 'react'
import InputSelect from '../InputSelect';
import styles from "./style.module.css";

function Demosaic(props) {
    const data = props.data.demosaic;
    const options = ["1", "2", "3"];

    const showData = (e) => {
        console.log(data);
      }

  return (
    <div>
        <button onClick={(e) => showData(e)}>Click for Data</button>
        <h1>{data.enable}</h1>
        <h1>{data.method}</h1>
        <h1>{data.pixelOrder}</h1>
        <InputSelect label="Method" options={options} width="265" setSelectInput />
        <InputSelect label="Pixel Order" options={options} width="265" setSelectInput />
        {/* {data.map(d => { 
            return <h1>{d}</h1>
        })} */}
        {/* {data.map((d) => {
            return <h1>{d}</h1>
        })} */}
        {/* <InputSelect /> */}
        {/* <div>
            <input type="checkbox" id="checkbox" name={Object.keys(data)}/>
            <label for="checkbox">Enabled</label>
        </div> */}
    </div>
  )
}

export default Demosaic