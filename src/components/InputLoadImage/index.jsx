import styles from "./style.module.css";
import React, { useRef, useContext, useEffect } from "react";
import Button from "../Button";
import ImageContext from "../../context/ImageContext";
import language from "../../functions/language";
// creator: "Noam"
// Use the component by implementing the *children*, *width* and *props* keys

function InputLoadImage({ width, props, setLoad, className }) {
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
