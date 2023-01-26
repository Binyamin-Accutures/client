import saveImageResult from "./saveImageResult";
import apiCalls from "./apiRequest";
import axios from "axios";

const saveResults = (obj) => {
  console.log(obj);
  let data = saveImageResult(obj.imagePath, obj);
  console.log("shira:", data);
  let path = "./upload";


const saveResults = async (afterISPTemp, rootServer) => {
  console.log(afterISPTemp);
  const formData = await saveImageResult(afterISPTemp.images, afterISPTemp.displaySet, rootServer);

  axios.post('http://localhost:5000/api/barkuni/save', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Content-Disposition': 'attachment; filename=example.png'
    },
    responseType: 'stream'
  })
    .then((response) => {
      // "http://localhost:5000/"+
      const href = URL.createObjectURL(new Blob([response.data]));

      // create "a" HTML element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', response.data.downloadName); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    })
    .catch(err => console.log(err))
  console.dir(formData);

}
export default saveResults;
