import React, { useContext } from 'react'
import styles from "./style.module.css"
import parentsStyles from "../SideBar/style.module.css"
import language from '../../functions/language';
import ImageContext from '../../context/ImageContext';
import apiCalls from '../../functions/apiRequest';

// creator: Hadar Naiman


export default function BtnRunISP({sendSettingsToServer},props) {

    const value = useContext(ImageContext)
    
    const prepareFilesToServer = (diff) => {
        let formData = new FormData();
        for (let i of diff) {
          formData.append("file", i);
        }
        return formData;
      };

    const uplaodImageToServer = async (files) => {
        console.log(files);
        const srcList = await apiCalls(
          "post",
          "http://localhost:5000/api/files",
          prepareFilesToServer(files)
        );
        console.log(srcList.data);
        return srcList
      };

const uplaodSettingToServer = async (setting)=>{

const afterimage = await apiCalls(
"put",
"http://localhost:5000/api/files/runisp",
setting
)
console.log(afterimage);



}





const runISP= async ()=>{

const images = value.beforeISP.images
console.log(images);
const setting = value.beforeISP
console.log(setting);
const reqFiles = await uplaodImageToServer(images)
reqFiles.data.src[1].root.isp=setting
console.log( "req files ",reqFiles.data);
value.setRootServer(reqFiles.data.src[1].root)  

const reqSetting = await uplaodSettingToServer(reqFiles.data.src[1].root)
console.log("req setting" ,reqSetting);

// value.setAfterISP(value.afterISP.images=reqSetting)


}
    
    const btnClasses = `${props.className} ${styles.run_isp}`;
    return (
        <button className={btnClasses} onClick={()=>runISP()} >{language.RUNISP}</button>


    );
}
