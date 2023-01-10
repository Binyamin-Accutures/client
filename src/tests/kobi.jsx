import React, { useEffect, useRef, useState } from 'react'
const imgUrl = "data:image/jpeg;base64,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"


function Dael() {

    const img = new Image();
    const canvasRef = useRef();
    
    
    const [brightness, setBrightness] = useState(0);
    // const [adjustRed, setAdjustRed] = useState(0);
    const [saturation, setSaturation] = useState(0);
    const [hue, setHue] = useState(0);
    const [R, setR] = useState(0);
    const [G, setG] = useState(0);
    const [B, setB] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        
        img.src = imgUrl;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const imageData = context.getImageData(0, 0, img.width, img.height, { willReadFrequently: true });
            context.putImageData(imageData, 0, 0);
            context.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute("data-caman-id");
        }

    }, [])
    
    useEffect(() => {
        const canvas = canvasRef.current;
        window.Caman(canvas, img, function () {
            this.reset();
            this.brightness(brightness);
            this.hue(hue);
            this.channels({
                  red: R,
                  green: G,
                  blue: B
                });
            this.saturation(saturation);
            this.exposure(70);
            // this.adjust("red", 10);
            // this.adjust("red", {highlights: 50});
            this.render();
        })
   
    }, [brightness, saturation, R, G, B, hue]); 


    return (
      <div>
        <canvas ref={canvasRef} />;
        {/* <label>
        adjustRed:
          <input
            type="range"
            min="-500"
            max="500"
            value={adjustRed}
            onChange={e => setAdjustRed(e.target.value)}
          />
        </label> */}
        <br />
        <label>
          Brightness / value:
          <input
            type="range"
            min="-100"
            max="100"
            value={brightness}
            onChange={e => setBrightness(e.target.value)}
          />
        </label>
        <br />
        <label>
          R:
          <input
            type="range"
            min="-255"
            max="255"
            value={R}
            onChange={e => setR(e.target.value)}
          />
        </label>
        <br />
        <label>
          G:
          <input
            type="range"
            min="-255"
            max="255"
            value={G}
            onChange={e => setG(e.target.value)}
          />
        </label>
        <br />
        <label>
          B:
          <input
            type="range"
            min="-255"
            max="255"
            value={B}
            onChange={e => setB(e.target.value)}
          />
        </label>
        <br />
        <label>
        hue:
          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={e => setHue(e.target.value)}
          />
        </label>
        <br />
        
        <label>
          Saturation:
          <input
            type="range"
            min="0"
            max="1000"
            value={saturation}
            onChange={e => setSaturation(e.target.value)}
          />
        </label>
      </div>
    );
};

export default Dael
