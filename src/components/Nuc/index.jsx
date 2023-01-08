// import styles from "./style.module.css"

// creator: anat
// color: _______________
// icon: ________________


export default function Nuc() {
   return (
      <div>
         <input type = "checkbox"/>
            <label for="enable">Enable</label><br/>
         <title>Method</title><br/>
         <input type = "checkbox" />
            <label for="1pt">1pt</label><br/>
         <input type = "checkbox" />
            <label for="2pt">2pt</label><br/>
         <input type = "bad pixel" />
            <label for="bad pixel">Bad Pixel Correction</label><br/>

         <title>Sensor Characteristics File</title>

         <input type="file"></input>



      </div>
   )
}







