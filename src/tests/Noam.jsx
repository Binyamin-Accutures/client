import axios from "axios";
import React, { useEffect, useContext } from "react";
import Button from "../components/Button";
import Image from "../components/Image";
import InputLoadImage from "../components/InputLoadImage";
import ImageContext from "../context/ImageContext";
import apiCalls from "../functions/apiRequest";

function Noam() {
  const value = useContext(ImageContext);
  let index;

  useEffect(() => {
    value.setCurrentImages(value.beforeISP.images);
  }, [value.beforeISP]);
  console.log(value.currentImages);

  const prepareFilesToServer = (diff) => {
    let formData = new FormData();
    for (let i of diff) {
      formData.append("file", i);
    }
    return formData;
  };

  const uplaodToServer = async () => {
    console.log(value.currentImages);
    const srcList = await apiCalls(
      "post",
      "https://accutures-server.onrender.com/api/files",
      prepareFilesToServer(value.currentImages)
    );
    console.log(srcList.data);

    let fr = new FileReader();
    fr.readAsDataURL(
      `https://accutures-server.onrender.com/upload/jdoe2sddh@5gddmad434dddil.com/1673459626098/original/0.png`
    );
    let result = fr.result;
    console.log(result)
  };

  return (
    <>


      <div>
        <InputLoadImage width={"328px"} />
        <Image value={value} index={index || 0} />
        <Button func={uplaodToServer}>Next</Button>
      </div>
    </>
  );
}
export default Noam;
