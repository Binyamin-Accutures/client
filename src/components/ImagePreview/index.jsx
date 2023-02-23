import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import InputLoadImage from "../InputLoadImage";
import ChangeFrame from "../ChangeFrame";
import RangeSlider from "../RangeSlider";
import RangeKobi from "../RangeKobi";
import Button from "../Button";
import ImageContext from "../../context/ImageContext";
import language from "../../functions/language";

// Creator: Yisrael Olonoff .
// updated on 12/1, 11:37 by Noam

function ImagePreview() {
  const value = useContext(ImageContext);
  const [load, setLoad] = useState(false); //[true, empty]
  const [selectedImage, setSelectedImage] = useState(0); // 1 is the default
  const [url, setUrl] = useState("");
  const file = value.beforeISP.images[selectedImage];
  const name = value.beforeISP.images[selectedImage]?.name || "<empty>";

  useEffect(() => {
    if (!file) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setUrl(fileReader.result);
    };
  }, [name]);

  const handleChange = (target) => {
    setSelectedImage(target.value);
  };

  const navigate = useNavigate();
  const navToCal = () => {
    value.setCurrentImages(...value.beforeISP.images);
    navigate("/calibration");
  };
  useEffect(() => {
    if (value.beforeISP.images[0]) {
      setLoad(true);
    }
  }, [value.beforeISP]);

  return (
    <>
      <div className={styles.imgprevContainner}>
        {!load && (
          <div className={styles.loadImagePage}>
            {" "}
            <InputLoadImage width={"133px"}></InputLoadImage>
            <p>{language.OR_DRAG_N_DROP}</p>
          </div>
        )}
        {load && (
          <div className={styles.ImagePreview}>
            <img className={styles.images} src={url} />
            <div className={styles.controls}>
              <RangeKobi
                className={styles.RangeSlider}
                func={handleChange}
                min={1}
                max={value.beforeISP.images.length - 1}
              />
              <ChangeFrame
                className={styles.ChangeFrame}
                images={value.beforeISP.images.length}
                func={handleChange}
                min={selectedImage.value}
                max={value}
              />
              <Button width={328} func={navToCal}>
                {language.NEXT}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ImagePreview;
