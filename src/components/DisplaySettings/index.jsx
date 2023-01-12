import { useState, useContext } from "react";
import Button from "../Button";
import CollepseTopDown from '../CollepseTopDown'
import RangeSlider from "../RangeSlider";
import ImageContext from "../../context/ImageContext";
import style from './style.module.css';
import saveResult from '../../functions/saveResults';
<<<<<<< HEAD
import language from "../../functions/language";


=======
import CheckList from "../CheckList";
>>>>>>> c13863bc874be67cacfaa247a0ea4c1276122fd8

function DisplaySetting(props) {
    const { afterISP, setAfterISP } = useContext(ImageContext)

    const { s0, DoLP, AoLPOvealayed, AoLPDoLP, RGB } = afterISP.displaySet;


    const [s0Val, setS0Val] = useState(s0);
    const [dolpVal, setDolpVal] = useState(DoLP);
    const [aolpOverlayVal, setAolpOverlayVal] = useState(AoLPOvealayed)
    const [aolpDolpVal, setAolpDolpVal] = useState(AoLPDoLP);
    const [rgbVal, setRgbVal] = useState(RGB);
    const [isCheckMenuOpen, setIsCheckMenuOpen] = useState(false)
    
    
    const handleS0 = (target) => {
        setS0Val((prev) => ({...prev, [target.name]: target.value}))
<<<<<<< HEAD
        if(target.name == 'min0SValue' && Number(s0Val.min0SValue) > Number(s0Val.maxS0Value)) {
            setS0Val(prev => ({...prev, maxS0Value: Number(prev.min0SValue) + 0.01 }))
        }
        if(target.name ==  'max0SValue' && Number(s0Val.maxS0Value) < Number(s0Val.min0SValue)) {
            setS0Val(prev => ({...prev, minS0Value: Number(prev.max0SValue ) - 0.01 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, s0: s0Val})}))
        console.log(afterISP.displaySet);
=======

        if (target.name == 'minS0Value' && Number(s0Val.minS0Value) > Number(s0Val.maxS0Value)) {
            setS0Val(prev => ({ ...prev, maxS0Value: Number(prev.minS0Value) + 0.01 }))
        }
        if (target.name == 'maxS0Value' && Number(s0Val.maxS0Value) < Number(s0Val.minS0Value)) {
            setS0Val(prev => ({ ...prev, minS0Value: Number(prev.maxS0Value) - 0.01 }))
        }
        setAfterISP(prev => ({ ...prev, displaySet: ({ ...prev.displaySet, s0: s0Val }) }))
>>>>>>> c13863bc874be67cacfaa247a0ea4c1276122fd8
    }

    const handleDoLP = (target) => {
        setDolpVal((prev) => ({ ...prev, [target.name]: target.value }))
        if (target.name == 'DoLPMin' && Number(dolpVal.DoLPMin) > Number(dolpVal.DoLPMax)) {
            setDolpVal(prev => ({ ...prev, DoLPMax: Number(prev.DoLPMin) + 0.01 }))
        }
        if (target.name == 'DoLPMax' && Number(dolpVal.DoLPMax) < Number(dolpVal.DoLPMin)) {
            setDolpVal(prev => ({ ...prev, DoLPMin: Number(prev.DoLPMax) - 0.01 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, DoLP: dolpVal})}))
    }

    const handleAoLPOvealay = (target) => {
<<<<<<< HEAD
        setAolpOverlayVal((prev) => ({...prev, [target.name]: target.value}))
        if(target.name == 'min0SValue' && aolpOverlayVal.min0SValue > aolpOverlayVal.maxS0Value) {
            setAolpOverlayVal(prev => ({...prev, maxS0Value: Number(prev.min0SValue) + 0.01 }))
        }
        if(target.name ==  'max0SValue' && aolpOverlayVal.maxS0Value < aolpOverlayVal.min0SValue) {
            setAolpOverlayVal(prev => ({...prev, minS0Value: Number(prev.max0SValue ) - 0.01 }))
=======
        setAolpOverlayVal((prev) => ({ ...prev, [target.name]: target.value }))
        if (target.name == 'minS0Value' && aolpOverlayVal.minS0Value > aolpOverlayVal.maxS0Value) {
            setAolpOverlayVal(prev => ({ ...prev, maxS0Value: Number(prev.minS0Value) + 0.01 }))
        }
        if (target.name == 'maxS0Value' && aolpOverlayVal.maxS0Value < aolpOverlayVal.minS0Value) {
            setAolpOverlayVal(prev => ({ ...prev, minS0Value: Number(prev.maxS0Value) - 0.01 }))
>>>>>>> c13863bc874be67cacfaa247a0ea4c1276122fd8
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, AoLPOvealayed: aolpOverlayVal})}))
    }

    const handleAoLPDoLP = (target) => {
        setAolpDolpVal((prev) => ({...prev, [target.name]: target.value}))
       
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, AoLPDoLP: aolpDolpVal })}))
    }

    const handleRGB = (target) => {
<<<<<<< HEAD
        setRgbVal((prev) => ({...prev, [target.name]: target.value}))
        if(target.name == 'minDoLPVal' && rgbVal.minDoLPValue > rgbVal.maxDoLPValue) {
            setRgbVal(prev => ({...prev, maxS0Value: prev.min0SValue + 1 }))
        }
        if(target.name ==  'maxDoLPValue' && rgbVal.maxDoLPValue < rgbVal.minDoLPValue) {
            setS0Val(prev => ({...prev, minDoLPValue: prev.maxDoLPValue - 1 }))
        }

        if(target.name == 'min0SValue' && rgbVal.min0SValue > rgbVal.max0SValue) {
            setRgbVal(prev => ({...prev, maxS0Value: prev.min0SValue + 1 }))
        }
        if(target.name ==  'max0SValue' && rgbVal.max0SValue < rgbVal.min0SValue) {
            setS0Val(prev => ({...prev, min0SValue: prev.maxS0Value - 1 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, RGB: rgbVal})}))
        console.log(afterISP.displaySet);
=======
        setRgbVal((prev) => ({ ...prev, [target.name]: target.value }))
        if (target.name == 'minDoLPVal' && rgbVal.minDoLPVal > rgbVal.maxDoLPVal) {
            setRgbVal(prev => ({ ...prev, maxDoLPVal: Number(prev.minDoLPVal) + 1 }))
        }
        if (target.name == 'maxDoLPVal' && rgbVal.maxDoLPVal < rgbVal.minDoLPVal) {
            setRgbVal(prev => ({ ...prev, minDoLPVal: Number(prev.maxDoLPVal) - 1 }))
        }

        if (target.name == 'minS0Value' && rgbVal.minS0Value > rgbVal.maxS0Value) {
            setRgbVal(prev => ({ ...prev, maxS0Value: Number(prev.minS0Value) + 1 }))
        }
        if (target.name == 'maxS0Value' && rgbVal.maxS0Value < rgbVal.minS0Value) {
            setRgbVal(prev => ({ ...prev, minS0Value: Number(prev.maxS0Value) - 1 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, RGB: rgbVal})}))
>>>>>>> c13863bc874be67cacfaa247a0ea4c1276122fd8
    }

    const handleSave = () => {
        if(isCheckMenuOpen){
            saveResult(afterISP)
        } else {
            setIsCheckMenuOpen(() => true)
        }
    }

    const menuList = [
<<<<<<< HEAD
        {titel:language.SO, component:<div>   
        <RangeSlider textPosLeft={false} className={style.Hug} func={handleS0} text={language.MINIMUM_SO_VALUE} name="minS0Value" contextValue={s0.minS0Value} min={0} max={1} step={0.01}/> 
        <RangeSlider textPosLeft={false} className="Hug"  func={handleS0} text={language.MAXIMUM_SO_VALUE}  name="maxS0Value" contextValue={s0.maxS0Value} min={0} max={1} step={0.01}/>
=======
        {
            titel: "S0", component: <div>
                <RangeSlider textPosLeft={false} className={style.Hug} func={handleS0} text={'Minimun S0 value'} name="minS0Value" contextValue={s0.minS0Value} min={0} max={1} step={0.01} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleS0} text={'Maximum S0 value'} name="maxS0Value" contextValue={s0.maxS0Value} min={0} max={1} step={0.01} />
>>>>>>> c13863bc874be67cacfaa247a0ea4c1276122fd8

            </div>
        },

<<<<<<< HEAD
        {titel:language.DOLP, component:<div>
        <RangeSlider textPosLeft={false} className="Hug" func={handleDoLP} text={language.DOLP_SSTUTATION} name="DoLPSatut" contextValue={DoLP.DoLPSatut} min={0} max={1} step={0.01}/> 
        </div>},

        {titel:language.ALOP_OVERLAYED, component:<div>
         <RangeSlider textPosLeft={false} className="Hug"  func={handleAoLPOvealay} text={language.HUE_SCALE_FACTOR} name="HSFactor" contextValue={AoLPOvealayed.HSFactor}  min={0} max={1} step={0.01}/>
         <RangeSlider textPosLeft={false} className="Hug"  func={handleAoLPOvealay} text={language.MINIMUM_SO_VALUE} name="minS0Value" contextValue={AoLPOvealayed.minS0Value} min={0} max={1} step={0.01}/>
         <RangeSlider textPosLeft={false} className="Hug"  func={handleAoLPOvealay} text={language.MAXIMUM_SO_VALUE} name="maxS0Value" contextValue={AoLPOvealayed.maxS0Value} min={0} max={1} step={0.01}/> 
        </div>},

        {titel:language.AOLPDOLP , component:<div>
          <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP}  text={language.HUE_SCALE_FACTOR} name="HSFactor" contextValue={AoLPDoLP.HSFactor} min={0} max={1} step={0.01}/>
         <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP} text={language.DOLP_SSTUTATION} name="DoLPSatut" contextValue={AoLPDoLP.DoLPSatut} min={0} max={1} step={0.01}/>
         <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP} text={language.ALOPֹ_BRIGHNTESS_CONTROL} name="AoLPBright" contextValue={AoLPDoLP.AoLPBright} min={-1} max={1} step={0.01}/> 
         </div> },

        {titel:language.RGB,component:<div> 
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={language.ALOP_CENTER} name="AoLPCenter" contextValue={ RGB.AoLPCenter} min={0} max={255} />
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={language.AoLPPOV} name="AoLPPOV" contextValue={RGB.AoLPPOV} min={0} max={255} />
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={language.MINIMUM_DOLP_VALUE} name="MinDoLPVal" contextValue={RGB.MinDoLPVal} min={0} max={255}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={language.MAXIMUM_DOLP_VALUE} name="MaxDoLPval" contextValue={RGB.MaxDoLPval} min={0} max={255}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={language.MINIMUM_SO_VALUE} name="MinS0Val" contextValue={RGB.MinS0Val} min={0} max={255}/>
        <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={language.MAXIMUM_SO_VALUE} name="MaxS0Val" contextValue={RGB.MaxS0Val} min={0} max={255}/>
        </div>},
=======
        {
            titel: 'Dolp', component: <div>
                <RangeSlider textPosLeft={false} className="Hug" func={handleDoLP} text={`DoLP Minimum `} name="DoLPMin" contextValue={DoLP.DoLPMin} min={0} max={1} step={0.01} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleDoLP} text={`DoLP Maximum `} name="DoLPMax" contextValue={DoLP.DoLPMax} min={0} max={1} step={0.01} />
            </div>
        },

        {
            titel: 'AoLP Overlayed', component: <div>
                <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPOvealay} text={`Hue Scale Factor`} name="HSFactor" contextValue={AoLPOvealayed.HSFactor} min={0} max={1} step={0.01} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPOvealay} text={`Minimum S0 value`} name="minS0Value" contextValue={AoLPOvealayed.minS0Value} min={0} max={1} step={0.01} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPOvealay} text={`Maximum S0 value`} name="maxS0Value" contextValue={AoLPOvealayed.maxS0Value} min={0} max={1} step={0.01} />
            </div>
        },

        {
            titel: 'AoLP+DoLP', component: <div>
                <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP} text={`Hue Scale Factor`} name="HSFactor" contextValue={AoLPDoLP.HSFactor} min={0} max={1} step={0.01} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP} text={`DoLP Satutation`} name="DoLPSatur" contextValue={AoLPDoLP.DoLPSatur} min={0} max={1} step={0.01} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP} text={`AoLP brighntess control`} name="AoLPBright" contextValue={AoLPDoLP.AoLPBright} min={-1} max={1} step={0.01} />
            </div>
        },

        {
            titel: 'RGB', component: <div>
                <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`AoLP Center`} name="AoLPCenter" contextValue={RGB.AoLPCenter} min={0} max={255} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`AoLP FOV `} name="AoLPPov" contextValue={RGB.AoLPPov} min={0} max={255} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Minimum DoLP value`} name="minDoLPVal" contextValue={RGB.minDoLPVal} min={0} max={255} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Maximum DoLP value`} name="maxDoLPVal" contextValue={RGB.maxDoLPVal} min={0} max={255} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Minimum S0 value`} name="minS0Value" contextValue={RGB.minS0Value} min={0} max={255} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleRGB} text={`Maximum S0 value `} name="maxS0Value" contextValue={RGB.maxS0Value} min={0} max={255} />
            </div>
        },
>>>>>>> c13863bc874be67cacfaa247a0ea4c1276122fd8
    ]

    return (
        <div className="Display_settings">
        <h1>
            Display settings
        </h1>
        <div className={style.dudu}>
        <div className={style.collapseBG}>
            <CollepseTopDown className={style.blackBG} menuList={menuList} isClose={isCheckMenuOpen} setIsClose={setIsCheckMenuOpen}/>
            </div>
            {isCheckMenuOpen && <CheckList />}
            <Button func={handleSave} width={"270px"} margin-top={"20px"}>Save Results</Button>  
        </div> 
        
      </div>
    );
}

export default DisplaySetting




