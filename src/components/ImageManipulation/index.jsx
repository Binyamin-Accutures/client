import React, { useContext, useEffect, useRef } from 'react'
import ImageContext from "../context/ImageContext";


function ImageManipulation({ imgUrl }) {

    const {
        afterISP: {
            imagePath,
            displaySet: {
                s0 :{
                minS0Value,
                maxS0Value
                },
                DoLP :{
                DoLPMin,
                DoLPMax
                },
                AoLPOvealayed : {
                HSFactor: AoLPOvealay_HSFactor,
                minS0Value: AoLPOvealay_minS0Value,
                maxS0Value: AoLPOvealay_maxS0Value
                },
                AoLPDoLP : {
                HSFactor,
                DoLPSatur,
                AoLPBright,
                },
                RGB : {
                AoLPCenter,
                AoLPPov,
                minDoLPVal,
                maxDoLPVal,
                minS0Value: RGB_minS0Value,
                maxS0Value: RGB_maxS0Value
                }
            }
        }
    } = useContext(ImageContext);

    const img = new Image();
    const canvasRef = useRef();

    const clip = (currentValue, startRange, endRange) => {
        const newValue = endRange * currentValue;

        if (newValue > endRange) return endRange;
        if (newValue < startRange) return startRange;
        return newValue;
    }

    const HSVchange = (minHue, maxHue, minSaturation, maxSaturation, minValue, maxValue) => {
        const canvas = canvasRef.current;
        window.Caman(canvas, img, function () {
            
        this.process("posterize", function (rgba) {
            
            const HSV = window.Caman.Convert.rgbToHSV(rgba.r, rgba.g, rgba.b);
            const H = clip((HSV.h - minHue) / (maxHue - minHue), 0, 1);
            const S = clip((HSV.s - minSaturation) / (maxSaturation - minSaturation), 0, 1);
            const V = clip((HSV.v - minValue) / (maxValue - minValue), 0, 1);

            const { r , g , b } = window.Caman.Convert.hsvToRGB(H, S, V)
            rgba.r = r;
            rgba.g = g;
            rgba.b = b;

            return rgba;
        }).render();
        this.reset();
        })
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        
        img.src = imgUrl;
        img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
        canvas.removeAttribute("data-caman-id");
        }

    }, [])


    useEffect(() => {

        const canvas = canvasRef.current;
        window.Caman(canvas, img, function () {

        this.process("posterize", function (rgba) {
                
            rgba.r = Math.floor(clip((rgba.r - (AoLPCenter - AoLPPov / 2)) / (AoLPPov), 0, 255))
            rgba.g = Math.floor(clip((rgba.g - minDoLPVal) / (maxDoLPVal - minDoLPVal), 0, 255))
            rgba.b = Math.floor(clip((rgba.b - RGB_minS0Value) / (RGB_maxS0Value - RGB_minS0Value), 0, 255))

            return rgba;
        }).render();
        this.reset();
        })

    }, [minDoLPVal, maxDoLPVal, RGB_minS0Value, RGB_maxS0Value, AoLPCenter, AoLPPov]); 

    useEffect(() => {

        HSVchange(0, 1, 0, 1, minS0Value, maxS0Value);

    }, [minS0Value, maxS0Value]); 

    useEffect(() => {

        HSVchange(0, 1, DoLPMin, DoLPMax, 0, 1);

    }, [DoLPMin, DoLPMax]); 

    useEffect(() => {

        HSVchange(0, AoLPOvealay_HSFactor, 0, 1, AoLPOvealay_minS0Value, AoLPOvealay_maxS0Value);

    }, [AoLPOvealay_HSFactor, AoLPOvealay_minS0Value, AoLPOvealay_maxS0Value]); 

    useEffect(() => {
    
        const canvas = canvasRef.current;

        HSVchange(0, HSFactor, 0, DoLPSatur, 0, 1);
            window.Caman(canvas, img, function () {
            this.brightness(AoLPBright);
        })

    }, [HSFactor, DoLPSatur, AoLPBright]); 



  return (
    <canvas ref={canvasRef} />
  );


};

export default ImageManipulation