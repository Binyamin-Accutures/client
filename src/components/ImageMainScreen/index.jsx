import React from 'react'
import RangeSlider from '../RangeSlider'
import Button from '../Button'
import styles from './style.module.css'
import Carousel from '../Carousel'


function ImageMainScreen() {
  return (
    <div>
        <div className={styles.imageContainer}>
          <Carousel/>
        </div>
      <Button width={73}/>
    <div className={styles.controllerContainer}>
         <div className={styles.upperConroller}>
            {/* <RangeSlider className={styles.frameSlider} text="Frame#" textPosLeft={true}/> */}
        </div> 
        <div className={styles.lowerController}>
            {/* <RangeSlider className={styles.startEndSlider}text="Start Frame" textPosLeft={true} min={0} max={10} step={1}/>
            <RangeSlider className={styles.startEndSlider}text="End Frame" textPosLeft={true} min={0} max={10} step={1}/> */}
        </div>
    </div>
    </div>
  )
}

export default ImageMainScreen