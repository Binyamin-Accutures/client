 import { useContext } from 'react'
import CollepseTopDown from '../components/CollepseTopDown'
 import styles from "./style.module.css"
import ImageContext from '../context/ImageContext'

export default function Roye() {
const menuList = [{titel:"NUC",component:<div><ul><li>2</li><li>2</li></ul></div> },{titel:'Dynamic Range Stretch',component:<div>roey</div> },{titel:'Demosaic',component:<div>roey</div> },{titel:'Denoise',component:<div>roey</div> },{titel:'Sharpening',component:<div>roey</div> }]
const  value = useContext(ImageContext)






    return <div className={styles.testcontiner} > <CollepseTopDown menuList={menuList}/> </div>
}




