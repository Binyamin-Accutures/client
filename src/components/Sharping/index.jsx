import { useContext } from 'react';
import InputSelect from '../InputSelect';
import RangeSlider from "../RangeSlider"
import ImageContext from '../../context/ImageContext';
import Checkbox from '../Checkbox';

function Sharping() {

    const value = useContext(ImageContext)

    const handle = (e) => {
      let name = e.name;
      let valueToChange;
      e.type == "checkbox" ? valueToChange = e.checked : valueToChange = e.value;
      value.setBeforeISP(preve => {
         const newobj = { ...preve }
         newobj.sharpening[name] = valueToChange;
         return newobj
      })
   }    

  return (
    <div>
        <Checkbox label="enable" name="enable" onChange={handle} checked={value.beforeISP.sharpening.enable}/>
        <InputSelect label="method" options={["usm"]} width="265" handle={handle} dataDefault={value.beforeISP.sharpening.method}/>
        <RangeSlider func={handle} text='Radius' name='radius' min={0} max={100} step={0.1} textPosLeft={false} numInput={false} contextValue={value.beforeISP.sharpening.radius}/>
        <RangeSlider  func={handle} text='EPS' name='ESP' min={0} max={1} step={0.001} textPosLeft={false} numInput={false} contextValue={value.beforeISP.sharpening.ESP}/>
        <RangeSlider func={handle} text='Trehold' name='trehold' min={0} max={10} step={0.1} textPosLeft={false} numInput={false} contextValue={value.beforeISP.sharpening.trehold}/>
    </div>
  )
}

export default Sharping