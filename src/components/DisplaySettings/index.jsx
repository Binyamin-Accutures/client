import { useState } from "react";
import Button from "../Button";
import CollepseTopDown from '../CollepseTopDown'
import RangeSlider from "../RangeSlider";

function DisplaySetting( {buttonFunc, text}){

    const [minValue, setMinValue] = useState("");

    function setValue(value){
       setMinValue(() => value)
       console.log(minValue);
    }

    const menuList = [
        {titel:"S0", component:<div>
        <RangeSlider textPosLeft={false} className="Hug" func={setValue} text={'Minimun S0 value'}/> 
        <RangeSlider textPosLeft={false} className="Hug" text={'Maximum S0 value'} min={minValue}/>
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




