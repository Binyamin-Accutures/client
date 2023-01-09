import React from "react";
import styles from "./style.module.css";

// creator: "Noam"

function Image({ images, ...props }) {
  console.log(images);
  return (
    <>
      <div className="imgContainer">
        <img
          {...props}
          key={images?.name || "no-img"}
          className={styles.img}
          src={images?.url || "no-src"}
          title="Uploded Image"
        />
        <div className={styles.label}>
          Uploaded Image: {images?.name || "none"}
        </div>
      </div>
    </>
  );
}

export default Image;
