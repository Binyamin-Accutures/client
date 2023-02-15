import React from 'react'

function Nadav() {
//Test-Example Arrrrrrrrrrrrrrrrrrrrrrrrrrrrrr 
var canvasArr = [];
for (var i = 0; i < 13; i++) {
    var canvas = document.createElement("canvas");
    canvas.width = 10*i;
    canvas.height = 150+i;
    canvasArr.push(canvas);
}

function convertCanvasToFormData(canvasArr) {
    let counter = 1;
    const formData = new FormData();
    for(canvas of canvasArr){
        let index = counter < 10 ? "_0" + counter : "_" + counter;
        counter++;
        var dataURL = canvas.toDataURL();
        var blob = dataURItoBlob(dataURL);
        formData.append("image" + index, blob, "image" + index + ".png");
    }
    return formData;
}

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

//check
const fd = convertCanvasToFormData(canvasArr);

for (let file of fd.entries())
    {
    }

  return (
    <div>Nadav</div>
  )
}

export default Nadav