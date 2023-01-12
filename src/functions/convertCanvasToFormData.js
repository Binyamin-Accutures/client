//This module-function gets an object of arrays of canvases 
// and returns them all in FormData 


// export default function convertCanvasToFormDataAVIAD(canvasObj) {
//     let counter = 1;
//     const formData = new FormData();
//     Object.entries(canvasObj).forEach(([k,v]) => {

//         for(let canvas of field){
//             console.log("canvas: ", canvas);
//             let index = counter < 10 ? "_0" + counter : "_" + counter++;
//             console.log("counter: ", counter);
//             let dataURL = canvas.toDataURL();
//             formData.append(field + "", dataURL, field + index + ".png");
//     }
//     })
//     return formData;
// }
export default function convertCanvasToFormData(canvasObj) {
    let counter = 1;
    const formData = new FormData();
    //console.log(canvasObj);
    Object.entries(canvasObj).forEach(([key,canvasArr]) => {
        // console.log("key: ", canvasArr);
        // console.log("canvasArr: ", canvasArr);
        for(let canvas of canvasArr){
            // console.log("canvas: ", canvas);
            let index = counter < 10 ? "_0" + counter : "_" + counter++;
            // console.log("counter: ", counter);
            let dataURL = canvas.toDataURL();
            var blob = dataURItoBlob(dataURL);
            formData.append(key + "", blob, key + index + ".png");
    }
    })
    return formData;
}

// export function convertCanvasToFormData0(canvasArr = [],categoryName = "") {
//     let counter = 1;
//     const formData = new FormData();
//     for(canvas of canvasArr){
//         let index = counter < 10 ? "_0" + counter : "_" + counter;
//         counter++;
//         var dataURL = canvas.toDataURL();
//         var blob = dataURItoBlob(dataURL);
//         formData.append(categoryName + index, blob, categoryName + index + ".png");
//         console.log(formData.get(categoryName + index));
//     }
//     return formData;
// }

function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ab], { type: mimeString });
    return blob;
}

// //check
// const fd = convertCanvasToFormData(canvasArr);

// for (let file of fd.entries())
//     {
//      console.log(file[0]+ ', '+ file[1]);  
//     }
