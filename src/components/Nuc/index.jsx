// import styles from "./style.module.css"

import { useContext, useRef, useState } from "react"
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import ImageContext from "../../context/ImageContext"
import Checkbox from "../Checkbox"


// creator: anat
// color: _______________
// icon: ________________



export default function Nuc() {
   
   
   const [inputFile, setInputFile] = useState()
   const inputRef = useRef()
   const value = useContext(ImageContext)
   const inputFunction = () => {
      inputRef.current.click()
   }


   const handle = (e) => {
      let name = e.name;
      let valueToChange;
      e.type == "checkbox" ? valueToChange = e.checked : valueToChange = e.value;
      value.setBeforeISP(preve => {
         const newobj = { ...preve }
         newobj.NUC[name] = valueToChange;
         return newobj
      })
   }
   const handlePt = (e) => {
      let valueToChange = e.checked;
      console.log(valueToChange)
      value.setBeforeISP(preve => {
         const newobj = { ...preve }
         e.name == "pt1" ? newobj.NUC.method.pt1 = valueToChange : newobj.NUC.method.pt2 = valueToChange
         return newobj
      })

   }

   return (
      <div>
         <div className={StyleSheet.enable}><Checkbox label={"enable"} className={""} name={"enable"} onChange={handle} checked={value.beforeISP.NUC.enable} /></div >

         <div className={StyleSheet.method}>
            <label className={StyleSheet.label}>Method</label><br />
            <Checkbox label={"1pt"} className={""} name="pt1" onChange={handlePt} checked={value.beforeISP.NUC.method.pt1} />
            <Checkbox label={"2pt"} className={""} name="pt2" onChange={handlePt} checked={value.beforeISP.NUC.method.pt2} />
         </div>
         {/* <input type="checkbox" />
         <label for="badpixel">Bad Pixel Correction</label><br /> */}

         <label>Sensor Characteristics File</label>
         <br />

         <div>
            <input type="file" ref={inputRef} hidden onChange={(e) => setInputFile(e.target.files[0].name)}></input>
         </div>
         <button onClick={inputFunction}><HiOutlineDotsCircleHorizontal /></button>
         {inputFile}

      </div >
   )
}
