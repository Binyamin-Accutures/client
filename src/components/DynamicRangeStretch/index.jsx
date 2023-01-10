import { useContext } from "react"
import ImageContext from "../../context/ImageContext"
import Checkbox from "../Checkbox"
import InputSelect from "../InputSelect"
import RangeSlider from "../RangeSlider"
import styles from "./style.module.css"

// creator: yair ken
// data : יש בו את כל המידע ועידכון המידע
// classNameTitle="titl" וכו'
// 

const data1 = { 
   enable : true ,
   method : {
       histogram : '',
       BDP : 0,
       DDP : 0
   }
}

const data2 = { 
   enable : true,
   method : {
       enable : true,
       method : "dynamic_range_stretch",
       cutoffs: {
           method: "percent",
           bitdepth: 16,
           low: 0,
           high: 100,
           high_value: 100
         }
   }
}

const DynamicRangeStretch = ({data ,style = {},className="", classNameTitle = "" ,classNameOption="", classNameDropTitle="" , ...props }) => {
   
   const value = useContext(ImageContext)

   const handle = (e)=>{
      let name = e.name
      let valueToChange = e.checked
      value.setBeforeISP(preve=>{
      const newobj =  {...preve}
         newobj.DRS[name]=valueToChange
         return newobj
      })
      
          }

   return (
      <div className={`styles.${classNameTitle} ${className}`} style={style} {...props} id={""} >
         <div className={`styles.${classNameOption}`}>
            <Checkbox label="enable" name="enable" onChange={handle} checked={value.beforeISP.DRS.enable}/>
         </div>
         <div className={`styles.${classNameDropTitle} ${classNameOption}`}  >
            <InputSelect label="method" options={["Historgram"]} width="265" setSelectInput={()=>console.log("onChange-option")} handle={handle}/>
            <RangeSlider func={handle} text="Bright Discards Percentile" min={0} max={100} step={1} textPosLeft={false} numInput={false}/>
         </div>
         <div className={`styles.${classNameOption}`}>
            <RangeSlider func={()=>console.log("onChange-range")} text="Dark Discard Percentile" min={0} max={100} step={1} textPosLeft={false} numInput={false}/>
         </div>
      
         <div>{`${value.beforeISP.DRS.enable}`}</div>
         {/* <div>{`${value.beforeISP.DRS.enable.method.cutoffs.bitdepth}`}</div> */}

      </div>
      
   )
}

export default DynamicRangeStretch


//className={`styles.${label}`} 