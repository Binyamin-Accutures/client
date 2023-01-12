import styles from "./style.module.css";
import React, { useRef, useContext, useEffect } from "react";
import Button from "../Button";
import ImageContext from "../../context/ImageContext";
import language from "../../functions/language";
// creator: "Noam"

function InputLoadImage({ width, props, setLoad, className }) {
  const value = useContext(ImageContext);
  const inputElement = useRef();
  const onclick = () => {
    inputElement.current.click();
    ;
  };

  function getDir(e) {
      value.setBeforeISP((prev) => ({
        ...prev,
        images: e.target.files,
      }));
      console.log(value.beforeISP.images);
  }

  return (
    <div className={className}>
      <Button width={width} {...props} type="file" func={onclick}>
        {language.lOAD_IMAGE}
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
    </div>
  );
}

export default InputLoadImage;
