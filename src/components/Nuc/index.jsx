// import styles from "./style.module.css"

import { useContext, useRef, useState } from "react"
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import ImageContext from "../../context/ImageContext"


// creator: anat
// color: _______________
// icon: ________________



export default function Nuc() {
   
   
   const [inputFile, setInputFile] = useState()
   const inputRef = useRef()
   const value = useContext(ImageContext)
   // const [NUC,setNUC]=useState(value.beforeISP.NUC)
   const inputFunction = () => {
      inputRef.current.click()
      // console.log(inputRef.current.files[0].name
   }

   const changeCheckBox =(e) =>{
      // setNUC(!NUC)
   }


//    const handleUpdate=()=>{

// NUC.enable=!NUC.enable
//       setNUC(...NUC)
//    }
   // console.log(NUC)

   return (
      <div>
         <input type="checkbox"  onChange={(e)=>changeCheckBox(e)} />
         <label htmlFor="enable">Enable</label><br />

         <label>Method</label><br />

         <input type="checkbox" />
         <label htmlFor="1pt">1pt</label><br />
         <input type="checkbox" />
         <label htmlFor="2pt">2pt</label><br />
         <input type="checkbox" />
         <label htmlFor="badpixel">Bad Pixel Correction</label><br />

         <label>Sensor Characteristics File</label>
         <br />
         <div>
            <input type="file" ref={inputRef} hidden onChange={(e) => setInputFile(e.target.files[0].name)}></input>
         </div>
         <button onClick={inputFunction}><HiOutlineDotsCircleHorizontal /></button>
         {inputFile}
      </div>
   )
}
