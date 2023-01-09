import { useState } from "react"
import ImageContext from "./ImageContext";
import UserContext from "./UserContext";

const afterISPTemp = {
    imagePath : '',
    displaySet :{
        s0 :{
            minS0Value : 0,
            maxS0Value : 0
        },
        DoLP :{
            DoLPSatut : 0
        },
        AoLPDoLP : {
            HSFactor : 0,
            DoLPSatut : 0,
            AoLPBright : 0,
            minS0Value : 0,
            maxS0Value : 0
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
        enable : true,
        method : {
            pt1 : true,
            pt2 : true, 
            badPixelCorrect : true,
            sensor : ''
        }
    },
    DRS : { 
        enable : true,
        method : {
            histogram : '',
            BDP : 0,
            DDP : 0
        }
    },
    demosaic : {
        enable : true,
        method : '',
        pixelOrder : ''
    },
    denois : {
        method : '',
        radius : 0,
        ESP : 0
    },
    sharpening : {
        enable : true,
        method : '',
        radius : 0,
        ESP : 0,
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

