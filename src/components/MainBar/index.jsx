import styles from "./style.module.css";
import React, { useState, useContext } from 'react'
import Carousel from "../Carousel";
import RangeSlider from "../RangeSlider";
import ChangeFrame from "../ChangeFrame";
import Histogram from "../Histogram";
import Button from "../Button";
import ImageContext from "../../context/ImageContext";



// creator: moran hagbi & adel vaknin
// Instructions:   


export default function MainBar({ imgArray }) {
  const [images, setImages] = useState([
    { name: "image1", url: "https://www.w3schools.com/w3css/img_5terre.jpg" },
    { name: "image2", url: "https://www.w3schools.com/w3css/img_monterosso.jpg" },
    { name: "image3", url: "https://www.w3schools.com/w3css/img_vernazza.jpg" },
    { name: "image4", url: "https://www.w3schools.com/w3css/img_manarola.jpg" },
    { name: "image4", url: "https://www.w3schools.com/w3css/img_riomaggiore.jpg" },
    { name: "image4", url: "https://www.w3schools.com/w3css/img_corniglia.jpg" }
  ])

  //use context(imgArray)
const value = useContext(ImageContext)
  const [selectedImage, setSelectedImage] = useState(1)


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
          <Carousel imgUrl={images[selectedImage-1].url} imgOn={true} />
        </div>
        <div className={styles.controlBar}>
          <div className={styles.cropBtn}><Button width={73} children={"crop"}/></div>
          <div className={styles.CarouselSlider}>
            <RangeSlider className={styles.editRange} 
            min='1' max={images.length} 
            func={handleChange} text='Frame #' 
            textPosLeft={true} />
            <ChangeFrame className={styles.ChangeFrame} />
          </div>
        </div>
            <Histogram/>
      </div>
  
  </>
  )
}

