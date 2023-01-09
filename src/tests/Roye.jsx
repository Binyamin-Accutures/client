 import { useContext } from 'react'
import CollepseTopDown from '../components/CollepseTopDown'
 import styles from "./style.module.css"
import ImageContext from '../context/ImageContext'
import Pavel from './Pavel'
import Demosaic from '../components/Demosaic'
import Sharping from '../components/Sharping'
import DynamicRangeStretch from '../components/DynamicRangeStretch'

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

const menuList = [{titel:"NUC",component:<div><ul><li>2</li><li>2</li></ul></div> },
                {titel:'Dynamic Range Stretch',component:<DynamicRangeStretch classNameTitle ="title" classNameOption="option" classNameSecdTitle="dropTitle"/> },
                {titel:'Demosaic',component:<Demosaic data={data} /> },
                {titel:'Denoise',component:<div>roey</div> },
                {titel:'Sharpening',component:<Sharping data={sharpingData}/> }]







    return <div className={styles.testcontiner} > <CollepseTopDown menuList={menuList}/> </div>
}




