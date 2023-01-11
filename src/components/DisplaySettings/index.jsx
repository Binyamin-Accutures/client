import { useState, useContext } from "react";
import Button from "../Button";
import CollepseTopDown from '../CollepseTopDown'
import RangeSlider from "../RangeSlider";
import ImageContext from "../../context/ImageContext";
import style from './style.module.css';
import CheckBox from '../Checkbox'

function DisplaySetting() {
    const { afterISP, setAfterISP } = useContext(ImageContext)

    const { s0, DoLP, AoLPOvealayed, AoLPDoLP, RGB } = afterISP.displaySet


    const [s0Val, setS0Val] = useState(s0);
    const [dolpVal, setDolpVal] = useState(DoLP);
    const [aolpOverlayVal ,setAolpOverlayVal ] = useState(AoLPOvealayed)
    const [aolpDolpVal, setAolpDolpVal] = useState(AoLPDoLP);
    const [rgbVal, setRgbVal] = useState(RGB);
    const [checkAllVal, setCheckAllVal] = useState(true)
    
    const handleS0 = (target) => {
        setS0Val((prev) => ({...prev, [target.name]: target.value}))
        console.log(Number(s0Val.minS0Value))
        console.log(Number(s0Val.maxS0Value));

        if(target.name == 'minS0Value' && Number(s0Val.minS0Value) > Number(s0Val.maxS0Value)) {
            setS0Val(prev => ({...prev, maxS0Value: Number(prev.minS0Value) + 0.01 }))
        }
        if(target.name ==  'maxS0Value' && Number(s0Val.maxS0Value) < Number(s0Val.minS0Value)) {
            setS0Val(prev => ({...prev, minS0Value: Number(prev.maxS0Value ) - 0.01 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, s0: s0Val})}))
    }

    const handleDoLP = (target) => {
        setDolpVal((prev) => ({...prev, [target.name]: target.value}))
        if(target.name == 'DoLPMin' && Number(dolpVal.DoLPMin) > Number(dolpVal.DoLPMax)) {
            setDolpVal(prev => ({...prev, DoLPMax: Number(prev.DoLPMin) + 0.01 }))
        }
        if(target.name ==  'DoLPMax' && Number(dolpVal.DoLPMax) < Number(dolpVal.DoLPMin)) {
            setDolpVal(prev => ({...prev, DoLPMin: Number(prev.DoLPMax) - 0.01 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, DoLP: dolpVal})}))
        console.log(afterISP.displaySet);
    }

    const handleAoLPOvealay = (target) => {
        setAolpOverlayVal((prev) => ({...prev, [target.name]: target.value}))
        if(target.name == 'minS0Value' && aolpOverlayVal.minS0Value > aolpOverlayVal.maxS0Value) {
            setAolpOverlayVal(prev => ({...prev, maxS0Value: Number(prev.minS0Value) + 0.01 }))
        }
        if(target.name ==  'maxS0Value' && aolpOverlayVal.maxS0Value < aolpOverlayVal.minS0Value) {
            setAolpOverlayVal(prev => ({...prev, minS0Value: Number(prev.maxS0Value ) - 0.01 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, AoLPOvealayed: aolpOverlayVal})}))
        console.log(afterISP.displaySet);
    }
    
    const handleAoLPDoLP = (target) => {
        setAolpDolpVal((prev) => ({...prev, [target.name]: target.value}))
       
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, AoLPDoLP: aolpDolpVal })}))
        console.log(afterISP.displaySet);
    }

    const handleRGB = (target) => {
        setRgbVal((prev) => ({...prev, [target.name]: target.value}))
        if(target.name == 'minDoLPVal' && rgbVal.minDoLPVal > rgbVal.maxDoLPVal) {
            setRgbVal(prev => ({...prev, maxDoLPVal: Number(prev.minDoLPVal) + 1 }))
        }
        if(target.name ==  'maxDoLPVal' && rgbVal.maxDoLPVal < rgbVal.minDoLPVal) {
            setRgbVal(prev => ({...prev, minDoLPVal: Number(prev.maxDoLPVal) - 1 }))
        }

        if(target.name == 'minS0Value' && rgbVal.minS0Value > rgbVal.maxS0Value) {
            setRgbVal(prev => ({...prev, maxS0Value: Number(prev.minS0Value) + 1 }))
        }
        if(target.name ==  'maxS0Value' && rgbVal.maxS0Value < rgbVal.minS0Value) {
            setRgbVal(prev => ({...prev, minS0Value: Number(prev.maxS0Value) - 1 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, RGB: rgbVal})}))
        console.log(afterISP.displaySet.RGB.maxDoLPVal);
    }

    const handleCheckAll = (e) => {
        e.preventDefault()
        if(!checkAllVal) setCheckAllVal(true)
    }

    const handleCheck = () => {

    }

    const handleClick = () => {
        
    }


    const menuList = [
        {titel:"S0", component:<div>
        <CheckBox label={'Enable'} onChange={handleCheckAll}/>    
        <RangeSlider textPosLeft={false} className={style.Hug} func={handleS0} text={'Minimun S0 value'} name="minS0Value" contextValue={s0.minS0Value} min={0} max={1} step={0.01}/> 
        <RangeSlider textPosLeft={false} className="Hug"  func={handleS0} text={'Maximum S0 value'}  name="maxS0Value" contextValue={s0.maxS0Value} min={0} max={1} step={0.01}/>

        </div> },

        {titel:'Dolp', component:<div>
        <RangeSlider textPosLeft={false} className="Hug" func={handleDoLP} text={`DoLP Minimum `} name="DoLPMin" contextValue={DoLP.DoLPMin} min={0} max={1} step={0.01}/> 
        <RangeSlider textPosLeft={false} className="Hug" func={handleDoLP} text={`DoLP Maximum `} name="DoLPMax" contextValue={DoLP.DoLPMax} min={0} max={1} step={0.01}/> 
        </div>},

        {titel:'AoLP Overlayed', component:<div>
         <RangeSlider textPosLeft={false} className="Hug"  func={handleAoLPOvealay} text={`Hue Scale Factor`} name="HSFactor" contextValue={AoLPOvealayed.HSFactor}  min={0} max={1} step={0.01}/>
         <RangeSlider textPosLeft={false} className="Hug"  func={handleAoLPOvealay} text={`Minimum S0 value`} name="minS0Value" contextValue={AoLPOvealayed.minS0Value} min={0} max={1} step={0.01}/>
         <RangeSlider textPosLeft={false} className="Hug"  func={handleAoLPOvealay} text={`Maximum S0 value`} name="maxS0Value" contextValue={AoLPOvealayed.maxS0Value} min={0} max={1} step={0.01}/> 
        </div>},

        {titel:'AoLP+DoLP',component:<div>
          <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP}  text={`Hue Scale Factor`} name="HSFactor" contextValue={AoLPDoLP.HSFactor} min={0} max={1} step={0.01}/>
         <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP} text={`DoLP Satutation`} name="DoLPSatur" contextValue={AoLPDoLP.DoLPSatur} min={0} max={1} step={0.01}/>
         <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP} text={`AoLP brighntess control`} name="AoLPBright" contextValue={AoLPDoLP.AoLPBright} min={-1} max={1} step={0.01}/> 
         </div> },

        {titel:'RGB',component:<div> 
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`AoLP Center`} name="AoLPCenter" contextValue={ RGB.AoLPCenter} min={0} max={255} />
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`AoLP FOV `} name="AoLPPov" contextValue={RGB.AoLPPov} min={0} max={255} />
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Minimum DoLP value`} name="minDoLPVal" contextValue={RGB.minDoLPVal} min={0} max={255}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Maximum DoLP value`} name="maxDoLPVal" contextValue={RGB.maxDoLPVal} min={0} max={255}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Minimum S0 value`} name="minS0Value" contextValue={RGB.minS0Value} min={0} max={255}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Maximum S0 value `} name="maxS0Value" contextValue={RGB.maxS0Value} min={0} max={255}/>
        </div>},
    ]

    return(
        <div className="Display_settings">
        <h1>
            Display settings
        </h1>
        <CheckBox label={'Enable All'} />
        <div>
        <CollepseTopDown menuList={menuList} />
        </div>
       <Button func={handleClick} width={"315px"}>Save Results</Button>
      </div>
    );
  }
  
export default DisplaySetting




