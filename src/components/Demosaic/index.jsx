import { useContext } from 'react'
import InputSelect from '../InputSelect';
import ImageContext from '../../context/ImageContext';

function Demosaic() {
 
    const value = useContext(ImageContext)

    const handle = (e) => {
      let name = e.name;
      let valueToChange;
      e.type == "checkbox" ? valueToChange = e.checked : valueToChange = e.value;
      value.setBeforeISP(preve => {
         const newobj = { ...preve }
         newobj.demosaic[name] = valueToChange;
         return newobj
      })
   }   

  return (
    <div>
        <div>
            {/* <input type="checkbox" id="enabled" name="enabled" value="1" onChange={(e) => hendel(e)}/>
            <label for="enabled">enabled</label> */}
        </div>
        {/* <InputSelect label="method" options={methodData} width="265" setSelectInput={setSelectMethod} handle={ handle} />
        <InputSelect label="pixelOrder" options={pixelOrderData} width="265" setSelectInput={setSelectPixelOrder} handle={ handle}/>
    */}
        {/* <div>{value.beforeISP.demosaic.method}</div>
        <div>{value.beforeISP.demosaic.pixelOrder}</div> */}
    </div>
  )
}

export default Demosaic