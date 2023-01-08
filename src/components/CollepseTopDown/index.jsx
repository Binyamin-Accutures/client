import styles from "./style.module.css";
import { FiChevronDown, FiChevronUp, IconName } from "react-icons/fi";
import { useState } from "react";
// creator: roye peleg


const CollepseTopDown = (props) => {
 const [openCollepseTopDown,setOpenCollepseTopDown] = useState(null)

 const onClickLine = (titel)=>{
   if(openCollepseTopDown===titel){
       setOpenCollepseTopDown(null)
   }
   else{setOpenCollepseTopDown(titel)}
 }


   return (
    <div className={styles.CollepseTopDown}>
      {props.menuList.map((v, inx) => {
        return (
         <>
         <div className={styles.oneOptions} id={inx} onClick={()=>onClickLine(v.titel)}>
            <p>{v.titel}</p>
            {openCollepseTopDown===v.titel ?<FiChevronUp/>:<FiChevronDown />}
          </div>
           {openCollepseTopDown===v.titel && <div className={styles.openPropertis}>{v.component}</div>} 
       
           </>
        )
      })}
      
    </div>
  );
};

export default CollepseTopDown;
