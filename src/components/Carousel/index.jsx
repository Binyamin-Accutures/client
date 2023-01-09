import { useState,useContext } from "react";
import styles from "./style.module.css";
import RangeSlider from "../RangeSlider";
 
// creator: Elisha & dudu
// carousel : this component change the image preview from rangeslider based on the images context length
//------props to pass------
// imgArray = the selected array of images we want to load - beforeISP or afterISP

const Carousel = ({imgArray}) => {


   const [images,setImages] = useState(imgArray) // 
   const [selectedImage, setSelectedImage] = useState(1) // 1 is the default



   return (
      <>
      <div className={styles.carouselContainer}>
      <div className={styles.carouselImage} >
       {imgArray.length > 0 ?  <img src={imgArray[selectedImage-1].url} alt={imgArray[selectedImage-1].name}/> : "Please load images"}
      </div>
      <div className={styles.carouselSliderContainer}>
      <RangeSlider min='1' max={images.length} func={setSelectedImage} text='Selected Image'/>
      </div>
      </div>
      </>
   )
}

export default Carousel;