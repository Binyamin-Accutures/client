import { useState } from "react"
import ImageContext from "./ImageContext";
import UserContext from "./UserContext";

const afterISPTemp = {
    images : [],
    imagePath : '',
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

const beforeISPTemp ={
    images : [],
    NUC : {
        enable : false,
        method : {
            pt1 : true,
            pt2 : false, 
            nuc_file : null
        }
    },
    DRS : { 
        enable : true,
        method : {
            method : "dynamic_range_stretch",
            cutoffs: {
                method: "percent",
                bitdepth: 16,
                low: 0,
                high: 100,
                high_value: 100
              }
        }
    },
    demosaic : {
        method : 'newton',
        pixelOrder : 'hrfv'
    },
    denoise : {
        method : 'bm3d',
        radius : 0,
        ESP : 0.005
    },
    sharpening : {
        enable : true,
        method : 'usm',
        radius : 1.5,
        ESP : 0.8,
        trehold : 0
    }
}
export const ContextProvider = ({ user,setUser, children }) => {
   
    const [isLogged, setIsLogged] = useState(false);

    
    const [afterISP, setAfterISP] = useState(afterISPTemp);
    const [beforeISP, setBeforeISP] = useState(beforeISPTemp);
    const [currentImages , setCurrentImages]= useState()

    return (
        <UserContext.Provider value= {{user, setUser, isLogged, setIsLogged}}>
            <ImageContext.Provider value={{afterISP, setAfterISP,beforeISP, setBeforeISP,currentImages , setCurrentImages}}>
                {children}
            </ImageContext.Provider>
        </UserContext.Provider>
    )
    
}

