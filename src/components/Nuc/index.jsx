// import styles from "./style.module.css"

import {  useRef } from "react"
import { HiOutlineDotsCircleHorizontal} from 'react-icons/hi'


// creator: anat
// color: _______________
// icon: ________________


export default function Nuc() {
   const inputRef = useRef()

   const inputFunction = () =>{
      inputRef.current.click()
      console.log(inputRef)
   }

   
   return (
      <div>
         <input type = "checkbox"/>
            <label for="enable">Enable</label><br/>

         <label>Method</label><br/>
         
         <input type = "checkbox" />
            <label for="1pt">1pt</label><br/>
         <input type = "checkbox" />
            <label for="2pt">2pt</label><br/>
         <input type = "checkbox" />
            <label for="badpixel">Bad Pixel Correction</label><br/>

         <label>Sensor Characteristics File</label>
         <br/>

         <div>
            <input type="file" ref ={inputRef} hidden></input>
         </div>
         <button onClick={inputFunction}><HiOutlineDotsCircleHorizontal/></button>
         
      </div>
   )
}







