import { useState, useContext } from "react";
import Button from "../Button";
import CollepseTopDown from '../CollepseTopDown'
import RangeSlider from "../RangeSlider";
import ImageContext from "../../context/ImageContext";

function DisplaySetting( {buttonFunc, text}){
    const { afterISP, setAfterISP } = useContext(ImageContext)
    const { s0, DoLP, AoLPDoLP, RGB } = afterISP.displaySet

    const [s0Val, setS0Val] = useState(s0);
    const [dolpVal, setDolpVal] = useState(DoLP);
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
    const handleDolp = () => {}
    const handleAolpDolp = () => {}
    const handleRgb = () => {}
    

    const menuList = [
        {titel:"S0", component:<div>
        <RangeSlider textPosLeft={false} className="Hug"  text={'Minimun S0 value'}/> 
        <RangeSlider textPosLeft={false} className="Hug"  func={handleS0} text={'Maximum S0 value'} min={0}  max={100}/>
        </div> },

        {titel:'Dolp', component:<div>
        <RangeSlider textPosLeft={false} className="Hug" text={`DoLP Satutation`}/> 
        </div>},

        {titel:'AoLP Overlayed', component:<div>
         <RangeSlider textPosLeft={false} className="Hug" text={`Hue Scale Factor`}/>
         <RangeSlider textPosLeft={false} className="Hug" text={`DoLP Satutation`}/>
         <RangeSlider textPosLeft={false} className="Hug" text={`Minimum S0 value`}/>
         <RangeSlider textPosLeft={false} className="Hug" text={`Maximum S0 value`}/> 
        </div>},

        {titel:'AoLP+DoLP',component:<div>
          <RangeSlider textPosLeft={false} className="Hug" text={`Hue Scale Factor`}/>
         <RangeSlider textPosLeft={false} className="Hug" text={`DoLP Satutation`}/>
         <RangeSlider textPosLeft={false} className="Hug" text={`AoLP brighntess control`}/> 
         </div> },

        {titel:'RGB',component:<div> 
        <RangeSlider textPosLeft={false} className="Hug" text={`AoLP Center`}/>
        <RangeSlider textPosLeft={false} className="Hug" text={`AoLP FOV `}/>
        <RangeSlider textPosLeft={false} className="Hug" text={`Minimum DoLP value`}/>
        <RangeSlider textPosLeft={false} className="Hug" text={`Maximum DoLP value`}/>
        <RangeSlider textPosLeft={false} className="Hug" text={`Minimum S0 value`}/>
        <RangeSlider textPosLeft={false} className="Hug" text={`Maximum S0 value `}/>
        </div>},
    ]

    return(
        <div className=" Display_settings">
        <h1>
            Display settings
        </h1>
        <div>
        <CollepseTopDown menuList={menuList} />
        </div>
       <Button func={buttonFunc} width={"315px"}>Save Results</Button>
      </div>
    );
  }
  
export default DisplaySetting




