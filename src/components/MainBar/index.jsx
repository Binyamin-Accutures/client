import styles from "./style.module.css";
import React, { useState, useContext, useEffect } from "react";
import Carousel from "../Carousel";
import RangeSlider from "../RangeSlider";
import ChangeFrame from "../ChangeFrame";
import Histogram from "../Histogram";
import Button from "../Button";
import ImageContext from "../../context/ImageContext";
import ImageManipulation from "../ImageManipulation";

const threeClasses = `${styles.CarouselSlider} ${styles.editRange} ${styles.rangeRover}`;

// creator: moran hagbi & adel vaknin
// Instructions:

export default function MainBar({ imgArray }) {
  const value = useContext(ImageContext);
  const [images, setImages] = useState([]);
  const [displayArr, setDispalyArr] = useState([]);
  const [selectedImage, setSelectedImage] = useState(1);
  const [chooseMinRange, setChooseMinRange] = useState(1);
  const [chooseMaxRange, setChooseMaxRange] = useState(1);


  async function dataURItoBlob(dataURI) {
    const response = await fetch(dataURI);
    const blob = await response.blob()
    let fileReader2 = new FileReader();
    fileReader2.readAsDataURL(blob);
    fileReader2.onload = () => {
      setImages(prev=>fileReader2.result)
      setDispalyArr(prev=>value.afterISP.images)
      setChooseMaxRange(prev=>value.afterISP.images.length)
    }
    return blob;
  }

  useEffect(() => {
    if(!value.afterISP.images[selectedImage-1]){
    if (!value.beforeISP.images[selectedImage-1]) return;
    console.log(value.beforeISP.images[selectedImage-1]);
    let fileReader = new FileReader();
    fileReader.readAsDataURL(value.beforeISP.images[selectedImage-1]);
    fileReader.onload = () => {
      setImages(prev=>fileReader.result);
      setChooseMaxRange(prev=>value.beforeISP.images.length)
      setDispalyArr(prev=>value.beforeISP.images)
    };
  }
  else{
    dataURItoBlob(value.afterISP.images[selectedImage-1])
  }
  }, [value.beforeISP,value.afterISP,selectedImage]);

  // useEffect(() => {
  //     setDispalyArr(
  //       images.slice(
  //         chooseMinRange - 1,
  //         chooseMaxRange < chooseMinRange ? chooseMinRange : chooseMaxRange)
  //     );
  // }, [chooseMinRange, chooseMaxRange, images]);

  const handleChange = (target) => {
    setSelectedImage(target.value);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainBar}>
          <Carousel imgUrl={images} imgOn={false} images={displayArr} />
        </div>
        <div className={styles.controlBar}>
          <div className={styles.cropBtn}>
            <Button width={132} children={"crop"} />
          </div>
          <div className={styles.CarouselSlider}>
            <RangeSlider
              className={styles.editRange}
              min={1}
              max={chooseMaxRange}
              func={handleChange}
              text="Frame #"
              textPosLeft={true}
            />
            <ChangeFrame
              className={styles.ChangeFrame}
              images={displayArr}
              max={chooseMaxRange}
              min={chooseMinRange}
              setChooseMinRange={setChooseMinRange}
              setChooseMaxRange={setChooseMaxRange}
              chooseMinRange={chooseMinRange}
            />
          </div>
        </div>
        <Histogram />
      </div>
    </>
  );
}
