import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import language from "../../functions/language"

// creator: "Noam"

function Image({ value, index, ...props }) {
  const [url, setUrl] = useState("");
  const file = value.beforeISP.images[index];
  const name = value.beforeISP.images[index]?.name || "<empty>";

  useEffect(() => {
    if (!file) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setUrl(fileReader.result);
    };
  }, [name]);


  return (
    <>
      <div className={styles.imgContainer}>
        <img
          {...props}
          key={name}
          className={styles.img}
          src={url}
          alt="Uploded Image"
        />
        <div className={styles.label}>{language.UPLOADED_IMAGE}{name}</div>
      </div>
    </>
  );
}

export default Image;
