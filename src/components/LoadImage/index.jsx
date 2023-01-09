import styles from "./style.module.css";
import React, { useRef, useContext } from "react";
import Button from "../Button";
import ImageContext from "../../context/ImageContext";

// creator: "Noam"

function InputLoadImage() {
  const value = useContext(ImageContext);
  const inputElement = useRef();
  const focusInput = () => {
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
  }
  return (
    <>
      <Button
        type="file"
        children={"Load Image"}
        width="328px"
        func={focusInput}
      ></Button>
      <input
        ref={inputElement}
        onChange={getDir}
        className={styles.pseudoInput}
        type="file"
        directory=""
        webkitdirectory=""
        multiple
      />
    </>
  );
}

export default InputLoadImage;
