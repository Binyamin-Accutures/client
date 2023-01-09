import { useState, useContext } from "react";
import Button from "../Button";
import CollepseTopDown from '../CollepseTopDown'
import RangeSlider from "../RangeSlider";
import ImageContext from "../../context/ImageContext";

function DisplaySetting( {buttonFunc, text}){

    const [minValue, setMinValue] = useState();
    const [maxValue, setMaxValue] = useState();
    const [newValue,setNewValue] = useState(100)

    const { afterISP, setAfterISP } = useContext(ImageContext)
    const { s0, DoLP, AoLPDoLP, RGB } = afterISP.displaySet

    const [s0Val, setS0Val] = useState(s0);
    const [dolpVal, setDolpVal] = useState(DoLP);
    const [aolpDolpVal, setAolpDolpVal] = useState(AoLPDoLP);
    const [rgbVal, setRgbVal] = useState(RGB);
    
    const handleS0 = (target) => {
        if(minValue < target){
            setMinValue(target)
        }
    }
    const handleDolp = () => {}
    const handleAolpDolp = () => {}
    const handleRgb = () => {}
    

    const menuList = [
        {titel:"S0", component:<div>
        <RangeSlider textPosLeft={false} className="Hug" func={setMinValue} text={'Minimun S0 value'}/> 
        <RangeSlider textPosLeft={false} className="Hug" value={minValue} func={handleS0} text={'Maximum S0 value'} min={0}  max={100}/>
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




