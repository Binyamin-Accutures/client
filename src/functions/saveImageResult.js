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
  console.dir("parameters", parameters);
  console.log("ImajeesUrl: " + ImagesUrl);
  console.log("parameters: " + parameters);

  for (const key in ImagesUrl) {
    const imgUrl = ImagesUrl[key];

    if (parameters?.displaySet?.AoLPDoLP?.enable)
      ImageAoLPDoLP.push(
        await convertAoLPDoLP(imgUrl, parameters.displaySet.AoLPDoLP)
      );
    if (parameters?.displaySet?.AoLPOvealayed?.enable)
      ImageAoLPOvealayed.push(
        await convertAoLPOvealayed(imgUrl, parameters.displaySet.AoLPOvealayed)
      );
    if (parameters?.displaySet?.DoLP?.enable)
      ImageDoLP.push(await convertDoLP(imgUrl, parameters.displaySet.DoLP));
    if (parameters.displaySet.RGB.enable)
      ImageRGB.push(await convertRGB(imgUrl, parameters.displaySet.RGB));
    if (parameters?.displaySet?.s0?.enable)
      ImageS0.push(await convertS0(imgUrl, parameters.displaySet.s0));
  }

  if (ImageRGB !== []) AllImages.RGB = ImageRGB;
  if (ImageS0 !== []) AllImages.S0 = ImageS0;
  if (ImageAoLPOvealayed !== []) AllImages.AoLPOvealayed = ImageAoLPOvealayed;
  if (ImageAoLPDoLP !== []) AllImages.AoLPDoLP = ImageAoLPDoLP;
  if (ImageDoLP !== []) AllImages.DoLP = ImageDoLP;
  console.log("AllImages:", AllImages);
  const formData = convertImagesToFormData(AllImages);
  formData.append("path", root);

  // console.log("AllImages = " + AllImages);
  console.log("AllImagesFormData = " + formData);

  return formData;
}

// function convertImagesToFormData(images) {
//
//     const formData = new FormData();
//
//     for (let folder in images) {
//
//         for (let i in images[folder]) {
//
//             const base64 = images[folder][i];
//             const contentType = base64.split(";")[0].split(":")[1];
//             const data = base64.split(",")[1];
//             const blob = new Blob([data], { type: contentType });
//
//             console.log("i", images[folder][i]);
//             formData.append(folder, blob, folder + i + ".png");
//         }
//
//     }
//
//     return formData;
//
// }
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
