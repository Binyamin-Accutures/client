import React, { useState, useContext, useEffect } from 'react'
import styles from './style.module.css'
import InputLoadImage from '../InputLoadImage'
import ChangeFrame from '../ChangeFrame'
import RangeSlider from '../RangeSlider'
import Button from '../Button'
import ImageContext from "../../context/ImageContext"
import language from '../../functions/language'


// Creator: Yisrael Olonoff . 
// updated on 12/1, 11:37 by Noam

function ImagePreview() {

    const [load, setLoad] = useState(false);//[true, empty]
    const value = useContext(ImageContext);
    const [selectedImage, setSelectedImage] = useState(0) // 1 is the default

    const handleChange = (target) => {
        setSelectedImage(target.value)
    }

    useEffect(()=>{
        if (value.beforeISP.images[0]) {
            setLoad(true)
        }
            console.log(value.beforeISP.images.length)
        },[value.beforeISP])



    return (
        <>
            <div className={styles.imgprevContainner}>     
                   {!load && <div className={styles.loadImagePage} > < InputLoadImage width={'133px'} >
                      </InputLoadImage><p>{language.OR_DRAG_N_DROP}</p></div>}                
                {load &&         
                    <div className={styles.ImagePreview}>
                        <img className={styles.images} src={new Object(value.beforeISP.images[selectedImage]).url}/>
                        <div className={styles.controls}>
                        <RangeSlider className={styles.RangeSlider} func={handleChange} min={0} max={value.beforeISP.images.length-1}/>
                        <ChangeFrame className={styles.ChangeFrame} images={value.beforeISP.images.length} func={handleChange} min={selectedImage.value} max={value}/>
                        <Button width={328} >{language.NEXT}</Button>
                        </div>
                    </div>
                    }
            </div>
        </>
    )
}

export default ImagePreview