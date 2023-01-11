import React, { useState, useContext } from 'react'
import styles from './style.module.css'
import InputLoadImage from '../InputLoadImage'
import ChangeFrame from '../ChangeFrame'
import RangeSlider from '../RangeSlider'
import Button from '../Button'
import ImageContext from "../../context/ImageContext"


// Creator: Yisrael Olonoff
// 



function ImagePreview() {

    const [load, setLoad] = useState(false);//[true, empty]
    const value = useContext(ImageContext);
    const [selectedImage, setSelectedImage] = useState(0) // 1 is the default
    console.log(value)

    const handleChange = (target) => {
        setSelectedImage(target.value)
    }

    return (
        <>
            <div className={styles.imgprevContainner}>     
                   {!load && <div className={styles.loadImagePage} > < InputLoadImage width={'133px'} setLoad={setLoad} >
                      Load Image </InputLoadImage><p>or drag and drop image here </p></div>}                
                {load &&         
                    <div className={styles.ImagePreview}>
                        <img className={styles.images} src={new Object(value.beforeISP.images[selectedImage]).url}/>
                        <div className={styles.controls}>
                        <RangeSlider className={styles.RangeSlider} func={handleChange} min={0} max={value.beforeISP.images.length-1}/>
                        <ChangeFrame className={styles.ChangeFrame} images={value.beforeISP.images.length-1} func={handleChange} min={selectedImage.value} max={value}/>
                        <Button width={328} >Next</Button>
                        </div>
                    </div>
                    }
            </div>
        </>
    )
}

export default ImagePreview