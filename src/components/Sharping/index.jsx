import { useState} from 'react';
import { useContext } from 'react';
import InputSelect from '../InputSelect';
import RangeSlider from "../RangeSlider"
import ImageContext from '../../context/ImageContext';

function Sharping(props) {
    const radiusData = props.data.sharpening.radius;
    const espData = props.data.sharpening.ESP;
    const treholdData = props.data.sharpening.trehold;
    const methodData = props.data.sharpening.method;
    // // ! gets the values of demosaic method inside of beforeISP
    // const methodOption = value.beforeISP.sharpening.method;
    // // ! gets the values of demosaic method inside of beforeISP
    // const radiusOption = value.beforeISP.sharpening.radius;
    // // ! gets the values of demosaic method inside of beforeISP
    // const espOption = value.beforeISP.sharpening.ESP;    

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
        <RangeSlider func={handle} text='Radius' name='radius' min={radiusData} max={100} textPosLeft={false} numInput={false} contextValue={value.beforeISP.sharpening.radius}/>
        <RangeSlider  func={handle} text='EPS' name='ESP' min={espData} max={1} step={0.001} textPosLeft={false} numInput={false} contextValue={value.beforeISP.sharpening.ESP}/>
        <RangeSlider func={handle} text='Trehold' name='trehold' min={treholdData} max={10} step={0.1} textPosLeft={false} numInput={false} contextValue={value.beforeISP.sharpening.trehold}/>
        <div>
          <br /><br /><br />
          {`${value.beforeISP.sharpening.radius}`}
          <br />
          {`${value.beforeISP.sharpening.ESP}`}
          <br />
          {`${value.beforeISP.sharpening.trehold}`}
          <br />
<input type="range" onChange={(e)=>console.log(e.target.value)} />

        </div>
    </div>
  )
}

export default Sharping