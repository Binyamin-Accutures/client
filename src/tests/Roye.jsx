import { useContext } from 'react'
import CollepseTopDown from '../components/CollepseTopDown'
import styles from "./style.module.css"
import Denoise from '../components/Denoise'
import ImageContext from '../context/ImageContext'

import Pavel from './Pavel'
import Demosaic from '../components/Demosaic'
import Sharping from '../components/Sharping'
import DynamicRangeStretch from '../components/DynamicRangeStretch'
import Nuc from '../components/Nuc'

export default function Roye() {


    const  value = useContext(ImageContext)

    const data = {
        demosaic : {
            enable : 'true',
            method : ['Newton', 'Tesla', 'Edison'],
            pixelOrder : ['1', '2', '3']
        }
    }

    const sharpingData = {
      sharpening : {
        enable : true,
        method : ['1', '2', '3'],
        radius : 0,
        ESP : 0,
        trehold : 0
    }
    }

const menuList = [{titel:"NUC",component:<Nuc/> },
                {titel:'Dynamic Range Stretch',component:<DynamicRangeStretch classNameTitle ="title" classNameOption="option" classNameSecdTitle="dropTitle"/> },
                {titel:'Demosaic',component:<Demosaic data={data} className={styles.pedin} /> },
                {titel:'Denoise',component:<div>roey</div> },
                {titel:'Sharpening',component:<Sharping data={sharpingData}/> }]







    return <div className={styles.testcontiner} > <CollepseTopDown menuList={menuList} /> </div>
}




