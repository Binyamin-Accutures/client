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
  const [images, setImages] = useState([]);
  const value = useContext(ImageContext);
  useEffect(() => {
    if (!value.beforeISP.images[0]) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(value.beforeISP.images[0]);
    fileReader.onload = () => {
      setImages(fileReader.result);
      console.log(images);
    };
  }, [value.beforeISP]);

  //use context(imgArray)
  // const value = useContext(ImageContext)
  const [selectedImage, setSelectedImage] = useState(1);
  const [chooseMinRange, setChooseMinRange] = useState(1);
  const [chooseMaxRange, setChooseMaxRange] = useState(1);
  const [displayArr, setDisplayArr] = useState(
    value.beforeISP.images[chooseMinRange]
  );

  useEffect(() => {
    setDisplayArr(
      images.slice(
        chooseMinRange - 1,
        chooseMaxRange < chooseMinRange ? chooseMinRange : chooseMaxRange
      )
    );
    //   images.slice(
    //     chooseMinRange - 1,
    //     chooseMaxRange < chooseMinRange ? chooseMinRange : chooseMaxRange
    //   )
    // );
  }, [chooseMinRange, chooseMaxRange, images]);

  const handleChange = (target) => {
    setSelectedImage(target.value);
  };

  // let fr = new FileReader();
  // fr.readAsDataURL(selectedImage);
  // setSelectedImage(fr.result);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainBar}>
          <Carousel imgUrl={images} imgOn={false} images={images} />
        </div>
        <div className={styles.controlBar}>
          {/* <div className={styles.cropBtn}>
            <Button width={132} children={"crop"} />
          </div> */}
          <div className={styles.CarouselSlider}>
            <RangeSlider
              className={styles.editRange}
              min="1"
              max={displayArr.length}
              func={handleChange}
              text="Frame #"
              textPosLeft={true}
            />
            <ChangeFrame
              className={styles.ChangeFrame}
              images={images}
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
