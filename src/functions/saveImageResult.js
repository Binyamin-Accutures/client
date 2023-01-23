import {
  convertAoLPDoLP,
  convertAoLPOvealayed,
  convertDoLP,
  convertRGB,
  convertS0,
} from "./imageProcessing";

export default async function saveImageResult(ImagesUrl, parameters, root) {
  const AllImages = {};
  const ImageAoLPOvealayed = [];
  const ImageAoLPDoLP = [];
  const ImageDoLP = [];
  const ImageRGB = [];
  const ImageS0 = [];
  // console.dir("parameters", parameters)
  // console.log("ImajeesUrl: " + ImagesUrl)
  // console.log("parameters: " + parameters)

  for (const key in ImagesUrl) {
    const imgUrl = ImagesUrl[key];

    if (parameters?.displaySet?.AoLPDoLP?.enable) console.log("-----here-----");
    ImageAoLPDoLP.push(convertAoLPDoLP(imgUrl, parameters.displaySet.AoLPDoLP));
    if (parameters?.displaySet?.AoLPOvealayed?.enable)
      ImageAoLPOvealayed.push(
        convertAoLPOvealayed(imgUrl, parameters.displaySet.AoLPOvealayed)
      );
    if (parameters?.displaySet?.DoLP?.enable)
      ImageDoLP.push(convertDoLP(imgUrl, parameters.displaySet.DoLP));
    if (parameters.displaySet.RGB.enable)
      ImageRGB.push(convertRGB(imgUrl, parameters.displaySet.RGB));
    if (parameters?.displaySet?.s0?.enable)
      ImageS0.push(convertS0(imgUrl, parameters.displaySet.s0));
  }

  if (ImageRGB !== []) AllImages.RGB = ImageRGB;
  if (ImageS0 !== []) AllImages.S0 = ImageS0;
  if (ImageAoLPOvealayed !== []) AllImages.AoLPOvealayed = ImageAoLPOvealayed;
  if (ImageAoLPDoLP !== []) AllImages.AoLPDoLP = ImageAoLPDoLP;
  if (ImageDoLP !== []) AllImages.DoLP = ImageDoLP;

  const formData = convertImagesToFormData(AllImages);
  formData.append("path", root);

  console.log("AllImages = " + AllImages);
  console.log("AllImagesFormData = " + formData);

  return formData;
}

function convertImagesToFormData(images) {
  const formData = new FormData();

  for (let foder in images) {
    for (let i in images[foder]) {
      const base64 = images[foder][i];
      const contentType = base64.split(";")[0].split(":")[1];
      const data = base64.split(",")[1];
      const blob = new Blob([data], { type: contentType });

      console.log("i", images[foder][i]);
      formData.append(foder, blob, foder + i + ".png");
    }
  }

  return formData;
}
