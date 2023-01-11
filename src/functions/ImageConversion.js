import { convertAoLPDoLP,convertAoLPOvealayed,convertDoLP,convertRGB,convertS0 } from "./imageProcessing";
import  convertCanvasToFormData  from "./convertCanvasToFormData";

const imagesAll = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtDqUFpzPyhFGFHMRBKKpVI6bUHF6PyZ-AQ&usqp=CAU",
    "https://fileinfo.com/img/ss/md/jpg_44.png"
]

export default async function ImageConversion(ImajesUrl=[imagesAll], parameters={} )  {
    ImajesUrl = imagesAll
    const AllImages = {}
    const ImageAoLPOvealayed = []
    const ImageAoLPDoLP = []
    const ImageDoLP = []
    const ImageRGB = []
    const ImageS0 = []
    console.log("test")
    console.dir(parameters)
    console.log("ImajeesUrl: " + ImajesUrl)
    console.log("parameters: " + parameters)

    for (const key in ImajesUrl) {
        const img = ImajesUrl[key];
        
        if (parameters?.displaySet?.AoLPDoLP?.enable) {
            
            ImageAoLPDoLP.push(convertAoLPDoLP(img, parameters.displaySet.AoLPDoLP))
        }
        if (parameters?.displaySet?.AoLPOvealayed?.enable) {

            ImageAoLPOvealayed.push(convertAoLPOvealayed(img, parameters.displaySet.AoLPOvealayed))
        }
        if (parameters?.displaySet?.DoLP?.enable) {
           
            ImageDoLP.push(convertDoLP(img, parameters.displaySet.DoLP))
        }
        if (parameters.displaySet.RGB.enable) {
          
            ImageRGB.push(await convertRGB(img, parameters.displaySet.RGB))
        }
        if (parameters?.displaySet?.s0?.enable) {
            
            ImageS0.push(convertS0(img, parameters.displaySet.s0))
        }
    }
    
    if (ImageRGB !== []){
        AllImages.RGB = ImageRGB
    }
    if (ImageS0 !== []){
        AllImages.S0 = ImageS0
    }
    if (ImageAoLPOvealayed !== []){
        AllImages.AoLPOvealayed = ImageAoLPOvealayed
    }
    if (ImageAoLPDoLP !== []){
        AllImages.AoLPDoLP = ImageAoLPDoLP
    }
    if (ImageDoLP !== []){
        AllImages.DoLP = ImageDoLP
    }
    const ReturnAllImages = convertCanvasToFormData(AllImages)
    console.log("AllImages = " + AllImages);
    console.log("ReturnAllImages = " + ReturnAllImages);
    return(ReturnAllImages)
}


