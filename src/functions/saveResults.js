import saveImageResult from "./saveImageResult";
import apiCalls from "./apiRequest";
import axios from "axios";



const saveResults = async (afterISPTemp,rootServer) => {
console.log(afterISPTemp);
  const formData  = await saveImageResult(afterISPTemp.images,afterISPTemp.displaySet,rootServer);

  axios.post('http://localhost:5000/api/barkuni/save', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Content-Disposition': 'attachment; filename=example.png'
    },
    responseType: 'stream'
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(err=>console.log(err))
  console.dir(formData);

}
export default saveResults;
