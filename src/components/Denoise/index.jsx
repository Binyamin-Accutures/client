
import styles from "./style.module.css"
import InputSelect from "../InputSelect"
import { useContext} from "react"
import RangeSlider from "../RangeSlider"
import ImageContext from '../../context/ImageContext';

export default function Denoise() {

    const value = useContext(ImageContext)

    const handle = (e) => {
        let name = e.name
        let valueToChange = e.value
        value.setBeforeISP(preve => {
            const newobj = { ...preve }
            newobj.denoise[name] = valueToChange
            return newobj
        })
    }

    return (
        <div className={styles.denoise}>
            <InputSelect label={"method"} name="method" options={["bm3d"]} width={265} dataDefault={value.beforeISP.denoise.method} handle={handle} />
            <RangeSlider func={handle} name="radius" text={"Radius"} min={0} max={5} step={1} textPosLeft={false} numInput={false} contextValue={value.beforeISP.denoise.radius} />
            <RangeSlider func={handle} name="ESP" text={"EPS"} min={0} max={0.005} step={0.001} textPosLeft={false} numInput={false} contextValue={value.beforeISP.denoise.ESP} />
        </div >)

}