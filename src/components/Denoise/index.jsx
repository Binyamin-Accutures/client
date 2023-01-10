
import styles from "./style.module.css"
import InputSelect from "../InputSelect"
import { useContext, useState } from "react"
import RangeSlider from "../RangeSlider"
import ImageContext from '../../context/ImageContext';


function func() {
    console.log(".")
}

export default function Denoise() {

    const value = useContext(ImageContext)


    const handle = (e) => {
        let name = e.name
        console.log(e.name)
        let valueToChange = e.value
        value.setBeforeISP(preve => {
            const newobj = { ...preve }
            newobj.denoise[name] = valueToChange
            return newobj
        })
    }


    return (
        <div className={styles.denoise}>

            {/* <div className={StyleSheet.enable}><Checkbox label={"enable"} className={""} name={"enable"} onChange={handle} checked={value.beforeISP.denoise.enable} /></div > */}


            <InputSelect label={"method"} name="method" options={[1, 2, "bm3d", 3]} width={265} dataDefault={value.beforeISP.denoise.method} handle={handle} />

            <RangeSlider func={handle} name="radius" text={"Radius"} min={0} max={5} step={1} textPosLeft={false} numInput={false} contextValue={value.beforeISP.denoise.radius} />

            <RangeSlider func={handle} name="ESP" text={"EPS"} min={0} max={0.005} step={0.001} textPosLeft={false} numInput={false} contextValue={value.beforeISP.denoise.ESP} />



            <div>{value.beforeISP.denoise.method}</div>
            <div>{value.beforeISP.denoise.radius}</div>
            <div>{value.beforeISP.denoise.ESP}</div>


        </div >)

}