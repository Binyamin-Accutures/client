import saveImageResult from "./saveImageResult";

const saveResults = (obj) => {
    useEffect(() => {
        (async () => {
          const { formData, src } = await saveImageResult(imagesAll, afterISPTemp);
          setSrc(src);
    
          axios.post('http://localhost:5000/upload', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
                  'Content-Disposition': 'attachment; filename=example.png'
              },
              responseType: 'stream'
          })
          .then(response => {
            console.log(response.data);
          });
          console.dir(formData);
        })()
      }, []) // todo clean code
    

}
export default saveResults;
