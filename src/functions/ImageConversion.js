import { convertAoLPDoLP,convertAoLPOvealayed,convertDoLP,convertRGB,convertS0 } from "./imageProcessing";
import  {convertCanvasToFormData}  from "./convertCanvasToFormData";

export default function ImageConversion(ImajesUrl=[], parameters={} )  {
    const AllImages = {}
    const ImageAoLPOvealayed = []
    const ImageAoLPDoLP = []
    const ImageDoLP = []
    const ImageRGB = []
    const ImageS0 = []
    console.log("AAAAAAAAAAAAAAAAAAAAAAA")
    console.dir(ImajesUrl)
    console.log("ImajeesUrl: " + ImajesUrl)
    console.log("parameters: " + parameters)

    for (const key in ImajesUrl) {
        const img = ImajesUrl[key];
        
        if (parameters?.displaySet?.AoLPDoLP?.isActive) {
            
            ImageAoLPDoLP.push(convertAoLPDoLP(img, parameters.displaySet.AoLPDoLP))
        }
        if (parameters?.displaySet?.AoLPOvealayed?.isActive) {

            ImageAoLPOvealayed.push(convertAoLPOvealayed(img, parameters.displaySet.AoLPOvealayed))
        }
        if (parameters?.displaySet?.DoLP?.isActive) {
           
            ImageDoLP.push(convertDoLP(img, parameters.displaySet.DoLP))
        }
        if (parameters.displaySet.RGB.isActive) {
          
            ImageRGB.push(convertRGB(img, parameters.displaySet.RGB))
        }
        if (parameters?.displaySet?.s0?.isActive) {
            
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


