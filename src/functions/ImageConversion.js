import React, { useEffect, useState } from "react";
import { convertAoLPDoLP,convertAoLPOvealayed,convertDoLP,convertRGB,convertS0 } from "./imageProcessing";


export default function ImageConversion(ImajesUrl=[], parameters={} )  {
    // const { AoLPDoLP } = parameters
    console.log("------------------");
    console.log(parameters.displaySet.AoLPDoLP);
    console.log(parameters.displaySet.AoLPOvealayed.isActive);
    console.log(parameters);
    console.log("------------------");
    

    
    const AllImages = {}
    const ImageAoLPOvealayed = []
    const ImageAoLPDoLP = []
    const ImageDoLP = []
    const ImageRGB = []
    const ImageS0 = []


    for (const key in ImajesUrl) {
        const img = ImajesUrl[key];
        
        console.log(img);

        // if (parameters?.displaySet?.AoLPDoLP?.isActive) {
            
        //     ImageAoLPDoLP.push(convertAoLPDoLP(img, parameters.displaySet.AoLPDoLP))
        // }
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
        // AllImages.push({"RGB" : ImageRGB})
    }
    console.log("=======7777777777777======");
    console.log(ImageRGB);
    console.log(AllImages);
    console.log("=======7777777777777======");
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


    console.log("=============");
    console.log(ImageRGB);
    console.log("=============");
    console.log(AllImages);
    console.log("=============");
}


