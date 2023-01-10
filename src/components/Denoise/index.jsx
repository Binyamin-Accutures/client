
import styles from "./style.module.css"
import InputSelect from "../InputSelect"
import { useState } from "react"
import RangeSlider from "../RangeSlider"


function func() {
    console.log(".")
}

export default function Denoise() {

    const [selectInput, setSelectInput] = useState()

    return (
        <div className={styles.denoise}>
            <input type="checkbox" name="Enable" />
            <label for="Enable">Enable</label>
            <InputSelect label={"Method"} options={[]} width={265} setSelectInput={setSelectInput} />
            <RangeSlider func={func} text={"Radius"} min={0} max={5} textPosLeft={false} />
            <RangeSlider func={func} text={"EPS"} min={0} max={0.005} step={0.001} textPosLeft={false} />



        </div >)

}