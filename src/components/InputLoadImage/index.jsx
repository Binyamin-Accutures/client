import styles from "./style.module.css";
import React, { useEffect, useRef, useContext } from "react";
import Button from "../Button";
import ImageContext from "../../context/ImageContext";

// creator: "Noam"
// Use the component by implementing the *children*, *width* and *props* keys

function InputLoadImage({ children, width, props }) {
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
  }
  useEffect(() => {
    console.log(value);
  }, [value.setBeforeISP]);

  return (
    <>
      <Button
        className={styles.input}
        width={width}
        props={props}
        type="file"
        func={onclick}
      >
        Load Image
      </Button>
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
