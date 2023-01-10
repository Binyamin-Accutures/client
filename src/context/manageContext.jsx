import { useState } from "react"
import ImageContext from "./ImageContext";
import UserContext from "./UserContext";

const afterISPTemp = {
    imagePath : '',
    displaySet :{
        s0 :{
            grayLevel : 127,
            linearStreching : 0,
            minS0Value : 0,
            maxS0Value : 0
        },
        DoLP :{
            DoLPMin : 0,
            DoLPMax : 0
        },
        AoLPOvealay : {
            HSFactor : 0,
            minS0Value : 0,
            maxS0Value : 0
        },
        AoLPDoLP : {
            HSFactor : 0,
            DoLPSatut : 0,
            AoLPBright : 0,
        },
        RGB : {
            AoLPCenter :  0,
            AoLPPov : 0,
            minDoLPVal : 0,
            maxDoLPVal : 0,
            minS0Value : 0,
            maxS0Value : 0
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
            enable : true,
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


    return (
        <UserContext.Provider value= {{user, setUser, isLogged, setIsLogged}}>
            <ImageContext.Provider value={{afterISP, setAfterISP,beforeISP, setBeforeISP}}>
                {children}
            </ImageContext.Provider>
        </UserContext.Provider>
    )
    
}

