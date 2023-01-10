import React, { useState } from 'react'
import styles from './style.module.css'
import InputLoadImage from '../InputLoadImage'
import Header from '../Header'



function ImagePreview() {

    const [load, setLoad] = useState(false)

    return (
        <>
            <div className={styles.imgprevContainner}>
            <div className={styles.ImagePreview}>
                <InputLoadImage  width={'133px'} > Load Image </InputLoadImage>
                <p>or drag and drop image here </p>
            </div>
            </div>
        </>
    )
}

export default ImagePreview