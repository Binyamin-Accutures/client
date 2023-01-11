import styles from "./style.module.css";
import React, { useRef, useContext, useEffect } from "react";
import Button from "../Button";
import ImageContext from "../../context/ImageContext";

// creator: "Noam"

function InputLoadImage({ width, props , setLoad}) {
  const value = useContext(ImageContext);
  const inputElement = useRef();
  const onclick = () => {
    inputElement.current.click();
  };

  function getDir(e) {
      value.setBeforeISP((prev) => ({
        ...prev,
        images: e.target.files,
      }));
      console.log(value.beforeISP);
  }

  return (
    <>
      <Button width={width} {...props} type="file" func={onclick}>
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
