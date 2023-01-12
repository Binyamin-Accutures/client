
const img = new Image();

const clip = (currentValue, startRange, endRange) => {
  const newValue = endRange * currentValue;

  if (newValue > endRange) return endRange;
  if (newValue < startRange) return startRange;
  return newValue;
}

const HSVchange = (src, minHue, maxHue, minSaturation, maxSaturation, minValue, maxValue) => {
  const canvas = document.createElement('canvas');

  img.src = src;
  window.Caman(canvas, img, function () {

    this.process("posterize", function (rgba) {

      const HSV = window.Caman.Convert.rgbToHSV(rgba.r, rgba.g, rgba.b);
      const H = clip((HSV.h - minHue) / (maxHue - minHue), 0, 1);
      const S = clip((HSV.s - minSaturation) / (maxSaturation - minSaturation), 0, 1);
      const V = clip((HSV.v - minValue) / (maxValue - minValue), 0, 1);

      const { r, g, b } = window.Caman.Convert.hsvToRGB(H, S, V)
      rgba.r = r;
      rgba.g = g;
      rgba.b = b;

      return rgba;
    }).render();
  })
}


async function convertRGB(src, processParamters) {
  const { minDoLPVal, maxDoLPVal, RGB_minS0Value, RGB_maxS0Value, AoLPCenter, AoLPPov } = processParamters
  const canvas = document.createElement('canvas');
  const context = canvas.getContext("2d", { willReadFrequently: true });
  img.src = "http://localhost:3000/images/dog1.png";
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    canvas.removeAttribute("data-caman-id");
  }
  const camanjsPromise = new Promise((resolve, reject) => {
    await window.Caman(canvas, img, function () {
      this.process("posterize", function (rgba) {
        rgba.r = Math.floor(clip((rgba.r - (AoLPCenter - AoLPPov / 2)) / (AoLPPov), 0, 255))
        rgba.g = Math.floor(clip((rgba.g - minDoLPVal) / (maxDoLPVal - minDoLPVal), 0, 255))
        rgba.b = Math.floor(clip((rgba.b - RGB_minS0Value) / (RGB_maxS0Value - RGB_minS0Value), 0, 255))
        return rgba;
      }).render(() => {
        resolve();
      });
    });
    await camanjsPromise;
    return canvas;
  }
  
  function convertS0(src, processParamters) {
      const { minS0Value, maxS0Value } = processParamters
      const canvas = document.createElement('canvas');
      img.src = src;
      window.Caman(canvas, img, function () {
        this.process("posterize", function (rgba) {
          HSVchange(0, 1, 0, 1, minS0Value, maxS0Value);
          return rgba;
        }).render();
      });

      return canvas;
    }
  
  
  function convertDoLP(src, processParamters) {
      const { DoLPMin, DoLPMax } = processParamters
      const canvas = document.createElement('canvas');
      img.src = src;
      window.Caman(canvas, img, function () {
        this.process("posterize", function (rgba) {
          HSVchange(0, 1, DoLPMin, DoLPMax, 0, 1);
          return rgba;
        }).render();
      });

      return canvas;
    }
  
  
  function convertAoLPOvealayed(src, processParamters) {
      const { AoLPOvealay_HSFactor, AoLPOvealay_minS0Value, AoLPOvealay_maxS0Value } = processParamters
      const canvas = document.createElement('canvas');
      img.src = src;
      window.Caman(canvas, img, function () {
        this.process("posterize", function (rgba) {
          HSVchange(0, AoLPOvealay_HSFactor, 0, 1, AoLPOvealay_minS0Value, AoLPOvealay_maxS0Value);
          return rgba;
        }).render();
      });

      return canvas;
    }
  
  
  function convertAoLPDoLP(src, processParamters) {
      const { HSFactor, DoLPSatur, AoLPBright } = processParamters
      const canvas = document.createElement('canvas');
      img.src = src;
      window.Caman(canvas, img, function () {
        this.process("posterize", function (rgba) {
          HSVchange(0, HSFactor, 0, DoLPSatur, 0, 1);
          window.Caman(canvas, img, function () {
            this.brightness(AoLPBright);
          })
          return rgba;
        }).render();
      });

      return canvas;
    }

 export { convertAoLPDoLP, convertAoLPOvealayed, convertDoLP, convertRGB, convertS0 }

