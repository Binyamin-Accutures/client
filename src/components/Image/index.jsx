import React from "react";
import styles from "./style.module.css";

// creator: "Noam"

function Image({ value, index, ...props }) {
  let url = value.beforeISP.images[index]?.url || "";
  let name = value.beforeISP.images[index]?.name || "<empty>";
  console.log(url);
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
        <div className={styles.label}>Uploaded Image: {name}</div>
      </div>
    </>
  );
}

export default Image;
