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

  for (const key in ImagesUrl) {
    const imgUrl = ImagesUrl[key];

    if (parameters?.AoLPDoLP?.enable)
      ImageAoLPDoLP.push(await convertAoLPDoLP(imgUrl, parameters.AoLPDoLP));
    if (parameters?.AoLPOvealayed?.enable)
      ImageAoLPOvealayed.push(
        await convertAoLPOvealayed(imgUrl, parameters.AoLPOvealayed)
      );
    if (parameters?.DoLP?.enable)
      ImageDoLP.push(await convertDoLP(imgUrl, parameters.DoLP));
    if (parameters?.RGB?.enable)
      ImageRGB.push(await convertRGB(imgUrl, parameters.RGB));
    if (parameters?.s0?.enable)
      ImageS0.push(await convertS0(imgUrl, parameters.s0));
  }

  if (ImageRGB !== []) AllImages.RGB = ImageRGB;
  if (ImageS0 !== []) AllImages.S0 = ImageS0;
  if (ImageAoLPOvealayed !== []) AllImages.AoLPOvealayed = ImageAoLPOvealayed;
  if (ImageAoLPDoLP !== []) AllImages.AoLPDoLP = ImageAoLPDoLP;
  if (ImageDoLP !== []) AllImages.DoLP = ImageDoLP;
  const formData = convertImagesToFormData(AllImages);
  formData.append("path", root);

  return formData;
}

function convertImagesToFormData(images) {
  const formData = new FormData();

  for (let folder in images) {
    for (let i in images[folder]) {
      const dataURI = images[folder][i];
      const blob = dataURItoBlob(dataURI);
      formData.append(folder, blob, folder + i + ".png");
    }
  }

  return formData;
}

function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([ab], { type: mimeString });
  return blob;
}
