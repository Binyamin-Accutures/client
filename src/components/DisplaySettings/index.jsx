import { useState, useContext } from "react";
import Button from "../Button";
import CollepseTopDown from '../CollepseTopDown'
import RangeSlider from "../RangeSlider";
import ImageContext from "../../context/ImageContext";
import style from './style.module.css';

function DisplaySetting( {buttonFunc, text}){
    const { afterISP, setAfterISP } = useContext(ImageContext)

    const { s0, DoLP, AoLPOvealay, AoLPDoLP, RGB } = afterISP.displaySet


    const [s0Val, setS0Val] = useState(s0);
    const [dolpVal, setDolpVal] = useState(DoLP);
    const [aolpOvealay ,setAolpOvealay ] = useState(AoLPOvealay)
    const [aolpDolpVal, setAolpDolpVal] = useState(AoLPDoLP);
    const [rgbVal, setRgbVal] = useState(RGB);
    
    const handleS0 = (target) => {
        setS0Val((prev) => ({...prev, [target.name]: target.value}))
        if(target.name == 'min0SValue' && s0.min0SValue > s0.maxS0Value) {
            setS0Val(prev => ({...prev, maxS0Value: prev.min0SValue + 1 }))
        }
        if(target.name ==  'max0SValue' && s0.maxS0Value < s0.min0SValue) {
            setS0Val(prev => ({...prev, minS0Value: prev.max0SValue - 1 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, s0: s0Val})}))
    }

    const handleDoLP = (target) => {
        setDolpVal((prev) => ({...prev, [target.name]: target.value}))
        if(target.name == 'DoLPMin' && dolpVal.DoLPMin > dolpVal.DoLPMax) {
            setDolpVal(prev => ({...prev, DoLPMax: prev.DoLPMin + 1 }))
        }
        if(target.name ==  'DoLPMax' && dolpVal.DoLPMax < dolpVal.DoLPMin) {
            setDolpVal(prev => ({...prev, DoLPMin: prev.DoLPMax - 1 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, DoLP: dolpVal})}))
    }

    const handleAoLPOvealay = (target) => {
        setAolpOvealay((prev) => ({...prev, [target.name]: target.value}))
        if(target.name == 'min0SValue' && aolpOvealay.min0SValue > aolpOvealay.maxS0Value) {
            setAolpOvealay(prev => ({...prev, maxS0Value: prev.min0SValue + 1 }))
        }
        if(target.name ==  'max0SValue' && aolpOvealay.maxS0Value < aolpOvealay.min0SValue) {
            setAolpOvealay(prev => ({...prev, minS0Value: prev.max0SValue - 1 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, AolpOvealay:aolpOvealay})}))
    }
    
    const handleAoLPDoLP = (target) => {
        setAolpDolpVal((prev) => ({...prev, [target.name]: target.value}))
       
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, AoLPDoLP:aolpDolpVal })}))
    }

    const handleRGB = (target) => {
        setRgbVal((prev) => ({...prev, [target.name]: target.value}))
        if(target.name == 'minDoLPVal' && RGB.minDoLPValue > RGB.maxDoLPValue) {
            setRgbVal(prev => ({...prev, maxS0Value: prev.min0SValue + 1 }))
        }
        if(target.name ==  'maxDoLPValue' && RGB.maxDoLPValue < RGB.minDoLPValue) {
            setS0Val(prev => ({...prev, minDoLPValue: prev.maxDoLPValue - 1 }))
        }

        if(target.name == 'min0SValue' && RGB.min0SValue > RGB.max0SValue) {
            setRgbVal(prev => ({...prev, maxS0Value: prev.min0SValue + 1 }))
        }
        if(target.name ==  'max0SValue' && RGB.max0SValue < RGB.min0SValue) {
            setS0Val(prev => ({...prev, min0SValue: prev.maxS0Value - 1 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, RGB: rgbVal})}))
    }

    const handleClick = () => {
        buttonFunc(afterISP.displaySet)
    }


    const menuList = [
        {titel:"S0", component:<div>
        <RangeSlider textPosLeft={false} className={style.Hug} func={handleS0} text={'Gray Level'} name="grayLevel" contextValue={s0.grayLevel}/>
        <RangeSlider textPosLeft={false} className={style.Hug} func={handleS0} text={'linear Streaching'} name="linearStreaching" contextValue={s0.linearStreaching}/>    
        <RangeSlider textPosLeft={false} className={style.Hug} func={handleS0} text={'Minimun S0 value'} name="minS0Value" contextValue={s0.minS0Value}/> 
        <RangeSlider textPosLeft={false} className="Hug"  func={handleS0} text={'Maximum S0 value'} min={0}  max={100} name="maxS0Value" contextValue={s0.maxS0Value} />

        </div> },

        {titel:'Dolp', component:<div>
        <RangeSlider textPosLeft={false} className="Hug" func={handleDoLP} text={`DoLP minimun`} name="DoLPMin" contextValue={DoLP.DoLPMin} /> 
        <RangeSlider textPosLeft={false} className="Hug" func={handleDoLP} text={`DoLP maximum`} name="DoLPMax" contextValue={DoLP.DoLPMax} />
        </div>},

        {titel:'AoLP Overlayed', component:<div>
         <RangeSlider textPosLeft={false} className="Hug"  func={handleAoLPOvealay} text={`Hue Scale Factor`} name="HSFactor" contextValue={AoLPOvealay.HSFactor}/>
         <RangeSlider textPosLeft={false} className="Hug"  func={handleAoLPOvealay} text={`Minimum S0 value`} name="minS0Value" contextValue={AoLPOvealay.minS0Value}/>
         <RangeSlider textPosLeft={false} className="Hug"  func={handleAoLPOvealay} text={`Maximum S0 value`} name="maxS0Value" contextValue={AoLPOvealay.maxS0Value} /> 
        </div>},

        {titel:'AoLP+DoLP',component:<div>
          <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP}  text={`Hue Scale Factor`} name="HSFactor" contextValue={AoLPDoLP.HSFactor}/>
         <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP} text={`DoLP Satutation`} name="DoLPSatut" contextValue={AoLPDoLP.DoLPSatut}/>
         <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP} text={`AoLP brighntess control`} name="AoLPBright" contextValue={AoLPDoLP.AoLPBright}/> 
         </div> },

        {titel:'RGB',component:<div> 
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`AoLP Center`} name="AoLPCenter" contextValue={ RGB.AoLPBright}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`AoLP FOV `} name="AoLPPOV" contextValue={RGB.AoLPPOV}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Minimum DoLP value`} name="MinDoLPVal" contextValue={RGB.MinDoLPVal}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Maximum DoLP value`} name="MaxDoLPval" contextValue={RGB.MaxDoLPval}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Minimum S0 value`} name="MinS0Val" contextValue={RGB.MinS0Val}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Maximum S0 value `} name="MaxS0Val" contextValue={RGB.MaxS0Val}/>
        </div>},
    ]

    return(
        <div className="Display_settings">
        <h1>
            Display settings
        </h1>
        <div>
        <CollepseTopDown menuList={menuList} />
        </div>
       <Button func={handleClick} width={"315px"}>Save Results</Button>
      </div>
    );
  }
  
export default DisplaySetting




