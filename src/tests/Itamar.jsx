import SideBar from "../components/SideBar";
import React from "react";
import  ImageConversion  from "../functions/ImageConversion";

const afterISPTemp = {
    displaySet :{
        s0 :{
            enable : true,
            minS0Value : 0,
            maxS0Value : 1
        },
        DoLP :{
            enable : true,
            DoLPMin : 0,
            DoLPMax : 1
        },
        AoLPOvealayed : {
            enable : true,
            HSFactor : 1,
            minS0Value : 0,
            maxS0Value : 1
        },
        AoLPDoLP : {
            enable : true,
            HSFactor : 1,
            DoLPSatur : 1,
            AoLPBright : 0,
        },
        RGB : {
            enable : true, 
            AoLPCenter :  127,
            AoLPPov : 255,
            minDoLPVal : 0,
            maxDoLPVal : 255,
            minS0Value : 0,
            maxS0Value : 255
        }
    }
  }
  
  const imagesAll = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtDqUFpzPyhFGFHMRBKKpVI6bUHF6PyZ-AQ&usqp=CAU",
      "https://fileinfo.com/img/ss/md/jpg_44.png"
  ]

export default function Itamar() {
    ImageConversion(imagesAll, afterISPTemp)
  return (
    <div>
      <a>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a>
    </div>
  );
}