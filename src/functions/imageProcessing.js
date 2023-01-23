const MIN_VALUE_HSV = 0;
const MAX_VALUE_HSV = 1;

async function convertRGB(imgUrl, {minDoLPVal, maxDoLPVal, minS0Value, maxS0Value, AoLPCenter, AoLPPov}) {

  const img = document.createElement('img');
  img.src = imgUrl;
  img.crossOrigin = "Anonymous";
  
  const canvas = document.createElement('canvas');
  const context = canvas.getContext("2d", { willReadFrequently: true });

  await imameProccess(img);
  
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);
  canvas.removeAttribute("data-caman-id");

  const camanjsPromise = new Promise((resolve, reject) => {
    window.Caman(canvas, img, function () {
      this.process("posterize", function (rgba) {
        rgba.r = Math.floor(clip((rgba.r - (AoLPCenter - AoLPPov / 2)) / (AoLPPov), 0, 255))
        rgba.g = Math.floor(clip((rgba.g - minDoLPVal) / (maxDoLPVal - minDoLPVal), 0, 255))
        rgba.b = Math.floor(clip((rgba.b - minS0Value) / (maxS0Value - minS0Value), 0, 255))
        return rgba;
      }).render(() => {
        resolve();
      });
    })
  });
    
  await camanjsPromise;
  return canvas.toDataURL("image/png");
}
    
async function convertS0(imgUrl, processParamters) {
  const {
    minS0Value,
    maxS0Value
  } = processParamters;

  return await HSVchange(imgUrl, {
    minHue: MIN_VALUE_HSV,
    maxHue: MAX_VALUE_HSV,
    minSaturation: MIN_VALUE_HSV,
    maxSaturation: MAX_VALUE_HSV,
    minValue: minS0Value,
    maxValue: maxS0Value
  });
}

async function convertDoLP(imgUrl, processParamters) {
  const {
    DoLPMin,
    DoLPMax
  } = processParamters;

  return await HSVchange(imgUrl, {
    minHue: MIN_VALUE_HSV,
    maxHue: MAX_VALUE_HSV,
    minSaturation: DoLPMin,
    maxSaturation: DoLPMax,
    minValue: MIN_VALUE_HSV,
    maxValue: MAX_VALUE_HSV
  });
}

async function convertAoLPOvealayed(imgUrl, processParamters) {
  const {
    HSFactor,
    minS0Value,
    maxS0Value
  } = processParamters;

  return await HSVchange(imgUrl, {
    minHue: MIN_VALUE_HSV,
    maxHue: HSFactor,
    minSaturation: MIN_VALUE_HSV,
    maxSaturation: MAX_VALUE_HSV,
    minValue: minS0Value,
    maxValue: maxS0Value
  });
}

async function convertAoLPDoLP(imgUrl, processParamters) {

  const {
    HSFactor,
    DoLPSatur,
    AoLPBright
  } = processParamters;

  const img = document.createElement('img');
  img.src = imgUrl;
  img.crossOrigin = "Anonymous";
  const canvas = document.createElement('canvas');
  const context = canvas.getContext("2d", { willReadFrequently: true });

  await imameProccess(img);
  
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);
  canvas.removeAttribute("data-caman-id");
  
  const camanjsPromise = new Promise((resolve, reject) => {
    window.Caman(canvas, img, function () {
      this.brightness(AoLPBright * 100);
      this.process("posterize", function (rgba) {
        const HSV = window.Caman.Convert.rgbToHSV(rgba.r, rgba.g, rgba.b);
        const H = clip((HSV.h - MIN_VALUE_HSV) / (HSFactor - MIN_VALUE_HSV), 0, 1);
        const S = clip((HSV.s - MIN_VALUE_HSV) / (DoLPSatur - MIN_VALUE_HSV), 0, 1);
        const V = clip((HSV.v - MIN_VALUE_HSV) / (MAX_VALUE_HSV - MIN_VALUE_HSV), 0, 1);

        const { r , g , b } = window.Caman.Convert.hsvToRGB(H, S, V)
        rgba.r = r;
        rgba.g = g;
        rgba.b = b;

        return rgba;
      }).render(() => {
        resolve();
      });
    })
  });
    
  await camanjsPromise;
  return canvas.toDataURL("image/png");
} // todo Duplicate code
  
async function HSVchange(imgUrl, {minHue, maxHue, minSaturation, maxSaturation, minValue, maxValue}) {

  const img = document.createElement('img');
  img.src = imgUrl;
  img.crossOrigin = "Anonymous";
  const canvas = document.createElement('canvas');
  const context = canvas.getContext("2d", { willReadFrequently: true });

  await imameProccess(img);
  
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);
  canvas.removeAttribute("data-caman-id");
  
  const camanjsPromise = new Promise((resolve, reject) => {
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
      }).render(() => {
        resolve();
      });
    })
  });
    
  await camanjsPromise;
  return canvas.toDataURL("image/png");
}

function clip(currentValue, startRange, endRange) {
  const newValue = endRange * currentValue;

  if (newValue > endRange) return endRange;
  if (newValue < startRange) return startRange;
  return newValue;
}

function imameProccess(img) {
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve();
    }
  })
}

export { convertAoLPDoLP, convertAoLPOvealayed, convertDoLP, convertRGB, convertS0 }

