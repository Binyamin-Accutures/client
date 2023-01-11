import styles from "./style.module.css";
import { FiChevronDown, FiChevronUp, IconName } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRef } from 'react';

// creator: roye peleg


const CollepseTopDown = (props) => {
  
 const [openCollepseTopDown,setOpenCollepseTopDown] = useState(null)

 let openClasses = `${styles.oneOptions} ${props.className}` 


useEffect(()=>{
  if(props.isClose) {
    setOpenCollepseTopDown(() => null)
  }
},[props.isClose])

useEffect(()=> {
  if(openCollepseTopDown){
    props.setIsClose(() => false)
  }
},[openCollepseTopDown])
//  if(openCollepseTopDown) {

//  }

//  {openCollepseTopDown ? openClasses = `${styles.oneOptions} ${props.className}` 
//  : openClasses = `${styles.oneOptions}`}

 const onClickLine = (titel, ref)=>{
 
   if(openCollepseTopDown===titel){
       setOpenCollepseTopDown(null)

   }
   else{
    setOpenCollepseTopDown(titel)
  }
 }
   return (
    <div className={styles.CollepseTopDown}>
      {props.menuList.map((v, inx) => {
        return (
         <>
         <div className={v.titel == openCollepseTopDown ? openClasses : styles.oneOptions} id={inx} onClick={()=>onClickLine(v.titel)}>
            <p className={openCollepseTopDown===v.titel ? styles.bold : ""}>{v.titel}</p>
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
