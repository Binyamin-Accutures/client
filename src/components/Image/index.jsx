import React from "react";
import styles from "./style.module.css";

// creator: "Noam"

function Image({...props}) {
  return (
    <>
      <div className="imgContainer">
        <img
          key={"img"}
          className={styles.img}
          src={props.url}
          title="Uploded Image"
        />
        <div className={styles.label}>Uploaded Image: {props.name}</div>
      </div>
    </>
  );
}

export default Image;
