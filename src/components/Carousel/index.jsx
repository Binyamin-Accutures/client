import { useState,useContext } from "react";
import styles from "./style.module.css";
import RangeSlider from "../RangeSlider";
import ImageManipulation from "../ImageManipulation";
 
// creator: Elisha & dudu
// carousel : this component change the image preview from rangeslider based on the images context length
//------props to pass------
// imgUrl = the url for displayed image
// imgOn - imageOn is a flag state for passing the kind of input  - enter "true" for images(jpg) or false for canvas


const Carousel = ({imgUrl,imgOn=true}) => {
   

   // const [images,setImages] = useState(imgArray) // 
   // const [selectedImage, setSelectedImage] = useState(1) // 1 is the default

   // const handleChange = (target) => {
   //    setSelectedImage(target.value)
   // }


   return (
      <>
      <div className={styles.carouselContainer}>
      <div className={styles.carouselImage} >
       {!imgOn ? (imgUrl ? <img src={imgUrl} alt="Selected image"/> : "Please load images") : <ImageManipulation imgUrl={imgUrl}/> }
      </div>
      {/* <div className={styles.carouselSliderContainer}>
      <RangeSlider min='1' max={images.length} func={handleChange} text='Selected Image' textPosLeft={true}/>
      </div> */}
      </div>
      </>
   )
}

export default Carousel;