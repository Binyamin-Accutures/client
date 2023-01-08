import { useState } from "react";
import { Route, Routes } from "react-router-dom";

export default function Tarshish() {

const beforeIsp ={
    ImagePath: "string",
    nuc: {
        enable: true,
        method: {
            pt1: true,
            pt2: true,
            badPixelCorrection: true,
            sensor: "string",
        }
    },
    DRS:{
        enable: true,
        method:{
            histogram: "string",
            BDP: "number",
            DDP: "number",
        }
    },
    demosaic:{
        enable: true,
        method: "string",
        pixelOrder: "string",
    },
denois:{
    method:"string",
    radius: "number",
    ESP: "number"
},
sharpening:{
    enable:true,
    method: "string",
    radius:0,
    ESP:0,
    trehold:0,

}
}
}
