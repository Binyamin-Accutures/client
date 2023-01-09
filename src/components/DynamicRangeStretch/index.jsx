import InputSelect from "../InputSelect"
import RangeSlider from "../RangeSlider"
import styles from "./style.module.css"

// creator: israel israeli
// color: _______________
// icon: ________________

const data = { 
   enable : true,
   method : {
       histogram : '',
       BDP : 0,
       DDP : 0
   }
}
const DynamicRangeStretch = ({style = {}, className = "", ...props }) => {

   return (
      <div className={`${styles.tempWidth} ${styles.father} ${className}`} style={style} {...props} >
{/* <label name="name"> <b>{name}</b></label> */}
{/* קומפוננטה של תפרית נפתח- רועי */}
<div>
   <input type="checkbox" onChange={()=>console.log("onChange-checkbox")}/>
   Enable
{/* קומפננטה של צ'ק בוקס- חננאל */} 
</div> 
<InputSelect label="method" options={["Historgram","Historgram"]} width="265" setSelectInput={()=>console.log("onChange-option")} />
{/*  קומפוננטה של תפריט נפתח- ליאת- כותרת מקבלת- מטוד בפנים מקבלת אופציות */}

{/*קומפננתה של טווח  */}
<div>
   
   </div>
   <RangeSlider func={()=>console.log("onChange-range")} text="Bright Discards Percentile" min={0} max={100} step={1} textPosLeft={false}/>
   <RangeSlider func={()=>console.log("onChange-range")} text="Dark Discard Percentile" min={0} max={100} step={1} textPosLeft={false}/>
{/*קומפננתה של טווח  */}
      </div>
   )
}

export default DynamicRangeStretch


// 