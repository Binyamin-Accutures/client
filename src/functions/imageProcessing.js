  
  const img = new Image();

  const clip = (currentValue, startRange, endRange) => {
    const newValue = endRange * currentValue;

    if (newValue > endRange) return endRange;
    if (newValue < startRange) return startRange;
    return newValue;
  }

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
        rgba.b = Math.floor(clip((rgba.b - RGB_minS0Value) / (RGB_maxS0Value - RGB_minS0Value), 0, 255))
        return rgba;
      }).render();
    });

    return canvas;
  }
  
  function convertS0(src,processParamters) {
      const {minS0Value, maxS0Value}=processParamters
      const canvas = document.createElement('canvas');
    img.src = src;
    window.Caman(canvas, img, function () {
      this.process("posterize", function (rgba) {
        HSVchange(0, 1, 0, 1, minS0Value, maxS0Value);
        return rgba;
      }).render();
    });

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
  
  
  function convertDoLP(src,processParamters ) {
   const {DoLPMin, DoLPMax}=processParamters
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
  
async function HSVchange(imgUrl, {minHue, maxHue, minSaturation, maxSaturation, minValue, maxValue}) {

  const img = document.createElement('img');
  img.src = imgUrl;
  img.crossOrigin = "Anonymous";
  const canvas = document.createElement('canvas');
  const context = canvas.getContext("2d", { willReadFrequently: true });

  await imameProccess(img);
  
  function convertAoLPOvealayed(src,processParamters) {
    const { AoLPOvealay_HSFactor, AoLPOvealay_minS0Value, AoLPOvealay_maxS0Value} = processParamters
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
  
  
  function convertAoLPDoLP(src,processParamters ) {
    const { HSFactor, DoLPSatur, AoLPBright} = processParamters
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

 export{convertAoLPDoLP,convertAoLPOvealayed,convertDoLP,convertRGB,convertS0}

