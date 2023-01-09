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
const DynamicRangeStretch = ({data ,style = {},className="", classNameTitle = "" ,classNameOption="", classNameDropTitle="" , ...props }) => {

   return (
      <div className={`styles.${classNameTitle} ${className}`} style={style} {...props} id={""} >
         <div className={`styles.${classNameOption}`}>
            <input type="checkbox" onChange={()=>console.log("onChange-checkbox")}/>
            Enable
         </div>
         <div className={`styles.${classNameDropTitle} ${classNameOption}`}  >
            method
            <InputSelect options={["Historgram"]} width="265" setSelectInput={()=>console.log("onChange-option")} />
            <RangeSlider func={()=>console.log("onChange-range")} text="Bright Discards Percentile" min={0} max={100} step={1} textPosLeft={false}/>
         </div>
         <div className={`styles.${classNameOption}`}>
            <RangeSlider func={()=>console.log("onChange-range")} text="Dark Discard Percentile" min={0} max={100} step={1} textPosLeft={false}/>
         </div>
      </div>
   )
}

export default DynamicRangeStretch


//className={`styles.${label}`} 