import  ImageConversion  from "./ImageConversion";
const saveResults = (obj) => {
    console.log(obj);
    let data = ImageConversion(obj.imagePath, obj);

     apiCalls("post", "http://localhost:6700/api/createZIP").then((response) => {
        // create file link in browser's memory
        const href = URL.createObjectURL(new Blob ([response.data.data]));
    
        // create "a" HTML element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', response.data.downloadName); //or any other extension
        document.body.appendChild(link);
        link.click();
    
        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    });

}
export default saveResults;
