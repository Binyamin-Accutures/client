
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
            {/* <input type="checkbox" name="Enable" />
            <label for="Enable">Enable</label> */}
            <InputSelect label={"method"} name="method" options={["red", "yellow", "green", "blue"]} width={265} dataDefault={"green"} handle={handle} />
            <RangeSlider func={func} name="radius" text={"Radius"} min={0} max={5} textPosLeft={false} handle={handle} />
            <RangeSlider func={func} name="EPS" text={"EPS"} min={0} max={0.005} step={0.001} textPosLeft={false} handle={handle} />
            <div>{value.beforeISP.denoise.method}</div>
            <div>{value.beforeISP.denoise.radius}</div>
            <div>{value.beforeISP.denoise.ESP}</div>


        </div >)

}