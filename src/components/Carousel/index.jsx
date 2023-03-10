import { useState, useContext } from "react";
import styles from "./style.module.css";
import RangeSlider from "../RangeSlider";
import ImageManipulation from "../ImageManipulation";

// creator: Elisha & dudu
// carousel : this component change the image preview from rangeslider based on the images context length
//------props to pass------
// imgUrl = the url for displayed image
// imgOn - imageOn is a flag state for passing the kind of input  - enter "true" for images(jpg) or false for canvas


const Carousel = ({ imgUrl, imgOn = true }, images) => {


   return (
      <>
         <div className={styles.carouselContainer}>

            <div className={styles.carouselImage} >
               <ImageManipulation imgUrl={imgUrl} />
            </div>
         </div>
      </>
   )
}

export default Carousel;