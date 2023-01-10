import styles from "./style.module.css";
import React, { useState } from 'react'
import Carousel from "../Carousel";
import RangeSlider from "../RangeSlider";
import ChangeFrame from "../ChangeFrame";



export default function MainBar({imgArray}) {
  const [images,setImages] = useState([
    {name:"image1", url:"https://www.w3schools.com/w3css/img_5terre.jpg"},
    {name:"image2", url:"https://www.w3schools.com/w3css/img_monterosso.jpg"},
    {name:"image3", url:"https://www.w3schools.com/w3css/img_vernazza.jpg"},
    {name:"image4", url:"https://www.w3schools.com/w3css/img_manarola.jpg"},
    {name:"image4", url:"https://www.w3schools.com/w3css/img_riomaggiore.jpg"},
    {name:"image4", url:"https://www.w3schools.com/w3css/img_corniglia.jpg"}
  ])
  const [selectedImage, setSelectedImage] = useState(1)
  
  const handleChange = (target) => {
    setSelectedImage(target.value)
  }
  return (
  <>
        <div className={styles.main}>
            <div className={styles.mainBar}>
               <Carousel imgUrl={images[selectedImage-1].url} imgOn={true}/>
            </div>
            <div className={styles.controlBar}>
              <div className={styles.CarouselSlider}>
              <RangeSlider min='1' max={images.length} func={handleChange} text='Frame #' textPosLeft={true} /> 
              </div>
              <div className={styles.ChangeFrame}>
              <ChangeFrame />
              </div>
            </div>
        </div>
  </>
  )
}

