import React from 'react'
import RangeSlider from '../RangeSlider'
import Button from '../Button'
import styles from './style.module.css'


function ImageMainScreen() {
  return (
    <div>
        <div className={styles.imageContainer}>
            <img src="https://placekitten.com/200/300" alt="kitten" />
        </div>
    {/* <Button width={73}/> */}
    <div className={styles.controllerContainer}>
         <div className={styles.upperConroller}>
            <RangeSlider className={styles.frameSlider} text="Frame#" textPosLeft={true}/>
        </div> 
        <div className={styles.lowerController}>
            <RangeSlider className={styles.startEndSlider}text="Start Frame" textPosLeft={true} min={0} max={10} step={1}/>
            <RangeSlider className={styles.startEndSlider}text="End Frame" textPosLeft={true} min={0} max={10} step={1}/>
        </div>
    </div>
    </div>
  )
}

export default ImageMainScreen