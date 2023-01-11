import styles from "./style.module.css";
import React, { useRef, useContext, useEffect } from "react";
import Button from "../Button";
import ImageContext from "../../context/ImageContext";

// creator: "Noam"
// Use the component by implementing the *children*, *width* and *props* keys

function InputLoadImage({ width, props , setLoad}) {
  const value = useContext(ImageContext);
  const inputElement = useRef();
  const onclick = () => {
    inputElement.current.click();
  };

  function getDir(e) {
    for (let file of e.target.files) {
      let fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = () => {
        file["url"] = fr.result;
        value.setBeforeISP((prev) => ({
          ...prev,
          images: [...prev.images, file],
        }));
      };
    }
  setLoad(true);
   
  }

  return (
    <>
      <Button
        width={width}
        {...props}
        type="file"
        func={onclick}
      >
        Load Image
      </Button>
      <input
        ref={inputElement}
        onChange={getDir}
        hidden
        type="file"
        directory=""
        webkitdirectory=""
        multiple
      />
    </>
  );
}

export default InputLoadImage;
