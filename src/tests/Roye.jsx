 import CollepseTopDown from '../components/CollepseTopDown'
 import styles from "./style.module.css"


export default function Roye() {
const menuList = [{titel:"NUC",component:<div><ul><li>2</li><li>2</li></ul></div> },{titel:'Dynamic Range Stretch',component:<div>roey</div> },{titel:'Demosaic',component:<div>roey</div> },{titel:'Denoise',component:<div>roey</div> },{titel:'Sharpening',component:<div>roey</div> }]

    return <div className={styles.testcontiner} > <CollepseTopDown menuList={menuList}/> </div>
}


 function chengDefult(sun,filed,value, state , setstat){

setstat(state[sun][filed]=value)

 }

 