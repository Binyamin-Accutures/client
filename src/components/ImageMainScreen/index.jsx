import React, { useState } from 'react'
import Button from '../Button'
import styles from './style.module.css'
import ChangeFrame from '../ChangeFrame'
import Carousel from '../Carousel'
import Dudu from '../../tests/Dudu'


function ImageMainScreen() {    
    
  return (
    <div>
      <div className={styles.displayContainer}>
        <div className={styles.imageContainer}>
          <Dudu/>
        </div>
        <div className={styles.controlPanel}>
          <Button width={73} type="submit">Crop</Button>
          <ChangeFrame/>
        </div>
      </div>
    </div>
  )
}

export default ImageMainScreen