import styles from "./style.module.css";
import { FiChevronDown, FiChevronUp, IconName } from "react-icons/fi";
import { useState } from "react";
// creator: roye peleg


const CollepseTopDown = (props) => {
  
 const [openCollepseTopDown,setOpenCollepseTopDown] = useState(null)

 let openClasses = `${styles.oneOptions}`;

 if(openCollepseTopDown) {

 }

 {openCollepseTopDown ? openClasses = `${styles.oneOptions} ${props.className}` 
 : openClasses = `${styles.oneOptions}`}

 const onClickLine = (titel)=>{
  alert(titel);
   if(openCollepseTopDown===titel){
       setOpenCollepseTopDown(null)
       openClasses = `${styles.oneOptions}`
   }
   else{
    setOpenCollepseTopDown(titel)
    openClasses = `${styles.oneOptions} ${props.className}`
  }
 }


   return (
    <div className={styles.CollepseTopDown}>
      {props.menuList.map((v, inx) => {
        return (
         <>
         <div className={openClasses} id={inx} onClick={()=>onClickLine(v.titel)}>
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
