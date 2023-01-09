import { useContext } from 'react'
import CollepseTopDown from '../components/CollepseTopDown'
import styles from "./style.module.css"
import ImageContext from '../context/ImageContext'
import Denoise from '../components/Denoise'
import DynamicRangeStretch from '../components/DynamicRangeStretch'

export default function Roye() {
    const menuList = [{ titel: "NUC", component: <div><ul><li>2</li><li>2</li></ul></div> }, { titel: 'Dynamic Range Stretch', component: <DynamicRangeStretch classNameTitle="title" classNameOption="option" classNameSecdTitle="dropTitle" /> }, { titel: 'Demosaic', component: <div>roey</div> }, { titel: 'Denoise', component: <div><Denoise /></div> }, { titel: 'Sharpening', component: <div>roey</div> }]
    const value = useContext(ImageContext)






    return <div className={styles.testcontiner} > <CollepseTopDown menuList={menuList} /> </div>
}




