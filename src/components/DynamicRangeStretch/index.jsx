import InputSelect from "../InputSelect"
import styles from "./style.module.css"

// creator: israel israeli
// color: _______________
// icon: ________________

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
<div>
   bright Discards Percentile
   <br />
   <input type="range" onChange={()=>console.log("onChange-range")} />
   40%
</div>
{/*קומפננתה של טווח  */}
<div>Dark Discard Percentile
   <br />
   <input type="range" onChange={()=>console.log("onChange-range")} />
   40%
   </div>
{/*קומפננתה של טווח  */}
      </div>
   )
}

export default DynamicRangeStretch


// 