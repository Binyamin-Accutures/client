import React from 'react'
import './style.module.css'
import Button from '../Button'
import language from '../../functions/language'

// creators: Yisrael_Olonoff & Pavel 
// the crop component is a button that crops images that
// are in type of JPG, does not crops canvas images.
// we built it using React-easy-crop library.


function Crop() {
  return (
    <div>
        <Button width={133} >{language.CROP}</Button>
    </div>
  )
}

export default Crop