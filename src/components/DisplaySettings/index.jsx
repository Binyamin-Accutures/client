import { useState, useContext } from "react";
import Button from "../Button";
import CollepseTopDown from '../CollepseTopDown'
import RangeSlider from "../RangeSlider";
import ImageContext from "../../context/ImageContext";
import style from './style.module.css';
import saveResult from '../../functions/saveResults';
import CheckList from "../CheckList";
import language from "../../functions/language";

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

        if (target.name == 'minS0Value' && Number(s0Val.minS0Value) > Number(s0Val.maxS0Value)) {
            setS0Val(prev => ({ ...prev, maxS0Value: Number(prev.minS0Value) + 0.01 }))
        }
        if (target.name == 'maxS0Value' && Number(s0Val.maxS0Value) < Number(s0Val.minS0Value)) {
            setS0Val(prev => ({ ...prev, minS0Value: Number(prev.maxS0Value) - 0.01 }))
        }
        setAfterISP(prev => ({ ...prev, displaySet: ({ ...prev.displaySet, s0: s0Val }) }))
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
        setAolpOverlayVal((prev) => ({ ...prev, [target.name]: target.value }))
        if (target.name == 'minS0Value' && aolpOverlayVal.minS0Value > aolpOverlayVal.maxS0Value) {
            setAolpOverlayVal(prev => ({ ...prev, maxS0Value: Number(prev.minS0Value) + 0.01 }))
        }
        if (target.name == 'maxS0Value' && aolpOverlayVal.maxS0Value < aolpOverlayVal.minS0Value) {
            setAolpOverlayVal(prev => ({ ...prev, minS0Value: Number(prev.maxS0Value) - 0.01 }))
        }
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, AoLPOvealayed: aolpOverlayVal})}))
    }

    const handleAoLPDoLP = (target) => {
        setAolpDolpVal((prev) => ({...prev, [target.name]: target.value}))
       
        setAfterISP(prev => ({...prev, displaySet: ({...prev.displaySet, AoLPDoLP: aolpDolpVal })}))
    }

    const handleRGB = (target) => {
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
    }

    const handleSave = () => {
        if(isCheckMenuOpen){
            saveResult(afterISP)
        } else {
            setIsCheckMenuOpen(() => true)
        }
    }

    const menuList = [
        {
            titel: "S0", component: <div>
                <RangeSlider textPosLeft={false} className={style.Hug} func={handleS0} text={'Minimun S0 value'} name="minS0Value" contextValue={s0.minS0Value} min={0} max={1} step={0.01} />
                <RangeSlider textPosLeft={false} className="Hug" func={handleS0} text={'Maximum S0 value'} name="maxS0Value" contextValue={s0.maxS0Value} min={0} max={1} step={0.01} />

            </div>
        },

        {titel:language.DOLP, component:<div>
        <RangeSlider textPosLeft={false} className="Hug" func={handleDoLP} text={language.DOLP_SSTUTATION} name="DoLPSatut" contextValue={DoLP.DoLPSatut} min={0} max={1} step={0.01}/> 
        </div>},

        {titel:language.ALOP_OVERLAYED, component:<div>
         <RangeSlider textPosLeft={false} className="Hug"  func={handleAoLPOvealay} text={language.HUE_SCALE_FACTOR} name="HSFactor" contextValue={AoLPOvealayed.HSFactor}  min={0} max={1} step={0.01}/>
         <RangeSlider textPosLeft={false} className="Hug" func={handleAoLPDoLP} text={language.DOLP_SSTUTATION} name="DoLPSatut" contextValue={AoLPDoLP.DoLPSatut} min={0} max={1} step={0.01}/>
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




