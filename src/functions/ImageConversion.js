import React, { useEffect, useState } from "react";
import { convertAoLPDoLP,convertAoLPOvealayed,convertDoLP,convertRGB,convertS0 } from "./imageProcessing";


export default function ImageConversion(ImajesUrl, parameters)  {
    // const { AoLPDoLP } = parameters
    console.log("------------------");
    console.log(parameters.displaySet.DoLP);
    console.log(parameters.RGB);
    console.log(parameters);
    console.log("------------------");
    const ImageAoLPOvealayed = []
    const ImageAoLPDoLP = []
    const ImageDoLP = []
    const ImageRGB = []
    const ImageS0 = []

    for (const key in ImajesUrl) {
        const img = ImajesUrl[key];
        
        console.log(img);

        if (parameters.displaySet.AoLPDoLP.enable) {
            const {AoLPDoLP} = parameters
            ImageAoLPDoLP.push(convertAoLPDoLP(img, AoLPDoLP))
        }
        if (parameters.displaySet.AoLPOvealayed.enable) {
            const {AoLPOvealayed} = parameters
            ImageAoLPOvealayed.push(convertAoLPOvealayed(img, AoLPOvealayed))
        }
        if (parameters.displaySet.DoLP.enable) {
            const {DoLP} = parameters
            ImageDoLP.push(convertDoLP(img, DoLP))
        }
        if (parameters.displaySet.RGB.enable) {
            const {RGB} = parameters
            ImageRGB.push(convertRGB(img, RGB))
        }
        if (parameters.displaySet.s0.enable) {
            const {s0} = parameters
            ImageS0.push(convertS0(img, s0))
        }


    }
    console.log(ImageAoLPOvealayed);
}


