import styles from "./style.module.css"

// creator: israel israeli
// color: _______________
// icon: ________________

const DynamicRangeStretch = ({ style = {}, className = "", ...props }) => {

   return (
      <div className={`${styles.tempWidth} ${styles.father} ${className}`} style={style} {...props} >
Dynamic Range Stretch
{/* קומפוננטה של תפרית נפתח- רועי */}
<div>
   <input type="checkbox" onChange={()=>console.log("onChange-checkbox")}/>
   Enable
{/* קומפננטה של צ'ק בוקס- חננאל */} 
</div> 
<div>method
   <br />
<select name="method" onChange={()=>console.log("onChange-option")}>
            <option value="historgram">historgram</option>
            <option value="historgram">historgram</option>
        </select>
</div>
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