import styles from "./style.module.css";
import React, { useState, useContext, useEffect } from 'react'
import Carousel from "../Carousel";
import RangeSlider from "../RangeSlider";
import ChangeFrame from "../ChangeFrame";
import Histogram from "../Histogram";
import Button from "../Button";
import ImageContext from "../../context/ImageContext";
import ImageManipulation from "../ImageManipulation";

const threeClasses = `${styles.CarouselSlider} ${styles.editRange} ${styles.rangeRover}`

// creator: moran hagbi & adel vaknin
// Instructions:   


export default function MainBar({ imgArray }) {
  const [images, setImages] = useState([
    { name: "image1", url: "/images/dog1.png" },
    { name: "image2", url: "/images/dog2.png" },
    { name: "image3", url: "/images/dog3.png" },
    { name: "image4", url: "/images/dog4.png" },
    { name: "image4", url: "/images/dog5.png" },
    { name: "image4", url: "/images/dog6.png" },
    { name: "image4", url: "/images/dog7.png" },
    { name: "image4", url: "/images/dog8.png" }
  ])

  //use context(imgArray)
  // const value = useContext(ImageContext)
  const [displayArr, setDispalyArr] = useState(images)
  const [selectedImage, setSelectedImage] = useState(1)
  const [chooseMinRange, setChooseMinRange] = useState(1)
  const [chooseMaxRange, setChooseMaxRange] = useState(1)

  useEffect(() => {
    setDispalyArr(images.slice(chooseMinRange - 1, (chooseMaxRange < chooseMinRange ? chooseMinRange : chooseMaxRange)))
    console.log(images.slice(chooseMinRange - 1, (chooseMaxRange < chooseMinRange ? chooseMinRange : chooseMaxRange)));
    console.log(chooseMinRange, chooseMaxRange);
  }, [chooseMinRange, chooseMaxRange, images])






  const handleChange = (target) => {
    setSelectedImage(target.value)
  }

  // let fr = new FileReader();
  // fr.readAsDataURL(selectedImage);
  // setSelectedImage(fr.result);



  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainBar}>
          <Carousel imgUrl={displayArr[selectedImage - 1].url} imgOn={false} images={images} />
        </div>
        <div className={styles.controlBar}>
          <div className={styles.cropBtn}><Button width={132} children={"crop"} /></div>
          <div className={styles.CarouselSlider}>
            <RangeSlider className={styles.editRange}
              min='1' max={displayArr.length}
              func={handleChange} text='Frame #'
              textPosLeft={true} />
            <ChangeFrame className={styles.ChangeFrame} images={images}
              setChooseMinRange={setChooseMinRange} setChooseMaxRange={setChooseMaxRange} chooseMinRange={chooseMinRange} />
          </div>
        </div>
        <Histogram />
      </div>
    </>
  )
}

