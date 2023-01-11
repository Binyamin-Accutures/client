import React, { useEffect, useState } from "react";

const imagesAll = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtDqUFpzPyhFGFHMRBKKpVI6bUHF6PyZ-AQ&usqp=CAU",
    "https://fileinfo.com/img/ss/md/jpg_44.png"
]
export default function ImageConversion(ImajesUrl, parameters)  {
    const ImageAoLPOvealayed = []
    const ImageAoLPDoLP = []
    const ImageDoLP = []
    const ImageRGB = []
    const ImageS0 = []

    for (const key in imagesAll) {
        const img = imagesAll[key];
        
        console.log(img);

        if (parameters.AoLPDoLP.enable) {
            const {AoLPBright} = parameters
            ImageAoLPDoLP.push(ConvertAoLPDoLP(img, AoLPDoLP))
        }
        if (parameters.AoLPOvealayed.enable) {
            const {AoLPOvealayed} = parameters
            ImageAoLPOvealayed.push(ConvertAoLPOvealayed(img, AoLPOvealayed))
        }
        if (parameters.DoLP.enable) {
            const {DoLP} = parameters
            ImageDoLP.push(ConvertDoLP(img, DoLP))
        }
        if (parameters.RGB.enable) {
            const {RGB} = parameters
            ImageRGB.push(ConvertRGB(img, RGB))
        }
        if (parameters.s0.enable) {
            const {s0} = parameters
            ImageS0.push(ConvertS0(img, s0))
        }


    }
}


