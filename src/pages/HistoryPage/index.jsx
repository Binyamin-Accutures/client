import React from 'react'
import { useState } from 'react'
import styles from "./style.module.css"
import { FiSearch } from "react-icons/fi";
import ModalPopUp from '../../components/ModalPopup';
import HistoryImage from '../../components/HistoryImage';
import languages from '../../functions/language';



export default function HistoryPage() {
  const ContextImages= [{name: 'ibmage1', url:'https://carwow-uk-wp-2.imgix.net/RR_VELAR_EDITION_23MY_027_GLHD_140422_01-scaled-e1659537496312.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600', date: 1278874645598},
                {name: 'iamage2', url:'https://www.galgalim.co.il/filestock/img/thumb_1664714566524-0.jpg', date: 1122364645598},
                {name: 'idmage3', url:'https://images1.calcalist.co.il/PicServer3/2019/09/10/933531/DSC_2798_lm.jpg', date:1673311233398},
                {name: 'icmage4', url:'https://new-car-lease.co.il/wp-content/uploads/2022/02/2008-2022_1.jpeg', date: 1673364645598},
                {name: 'igmage5', url:'https://images1.calcalist.co.il/picserver3/crop_images/2021/09/19/rJWhoxlHmY/rJWhoxlHmY_0_263_2835_1596_0_x-large.jpg', date: 1673364645598},
                {name: 'ifmage6', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlQ4TAW6pwKRqQbaTciJql3DzCDMuFYQLUzbXnCIAEF7GLM1QbcsSgFyJKCVlQ51fUew&usqp=CAU', date: 1672145598},
                {name: 'iemage7', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Mp6yLzHupZxKhu35ssIhDYJs2COlxl5jeg&usqp=CAU', date: 1211164645598},
                {name: 'ibmage1', url:'https://carwow-uk-wp-2.imgix.net/RR_VELAR_EDITION_23MY_027_GLHD_140422_01-scaled-e1659537496312.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600', date: 1278874645598},
                {name: 'iamage2', url:'https://www.galgalim.co.il/filestock/img/thumb_1664714566524-0.jpg', date: 1122364645598},
                {name: 'idmage3', url:'https://images1.calcalist.co.il/PicServer3/2019/09/10/933531/DSC_2798_lm.jpg', date:1673311233398},
                {name: 'icmage4', url:'https://new-car-lease.co.il/wp-content/uploads/2022/02/2008-2022_1.jpeg', date: 1673364645598},
                {name: 'igmage5', url:'https://images1.calcalist.co.il/picserver3/crop_images/2021/09/19/rJWhoxlHmY/rJWhoxlHmY_0_263_2835_1596_0_x-large.jpg', date: 1673364645598},
                {name: 'ifmage6', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlQ4TAW6pwKRqQbaTciJql3DzCDMuFYQLUzbXnCIAEF7GLM1QbcsSgFyJKCVlQ51fUew&usqp=CAU', date: 1672145598},
                {name: 'iemage7', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Mp6yLzHupZxKhu35ssIhDYJs2COlxl5jeg&usqp=CAU', date: 1211164645598},
                {name: 'ibmage1', url:'https://carwow-uk-wp-2.imgix.net/RR_VELAR_EDITION_23MY_027_GLHD_140422_01-scaled-e1659537496312.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600', date: 1278874645598},
                {name: 'iamage2', url:'https://www.galgalim.co.il/filestock/img/thumb_1664714566524-0.jpg', date: 1122364645598},
                {name: 'idmage3', url:'https://images1.calcalist.co.il/PicServer3/2019/09/10/933531/DSC_2798_lm.jpg', date:1673311233398},
                {name: 'icmage4', url:'https://new-car-lease.co.il/wp-content/uploads/2022/02/2008-2022_1.jpeg', date: 1673364645598},
                {name: 'igmage5', url:'https://images1.calcalist.co.il/picserver3/crop_images/2021/09/19/rJWhoxlHmY/rJWhoxlHmY_0_263_2835_1596_0_x-large.jpg', date: 1673364645598},
                {name: 'ifmage6', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlQ4TAW6pwKRqQbaTciJql3DzCDMuFYQLUzbXnCIAEF7GLM1QbcsSgFyJKCVlQ51fUew&usqp=CAU', date: 1672145598},
                {name: 'iemage7', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Mp6yLzHupZxKhu35ssIhDYJs2COlxl5jeg&usqp=CAU', date: 1211164645598}
              ]
   const [images, setImages] = useState(ContextImages)         
   const [arrImages, setArrImages] = useState(images.sort((image1,image2)=> image2.date - image1.date))       
   const [show,setShow] = useState(false) 
   const [delname,setDelname] = useState("")   

const funSearch=(e)=>{
  const arr =[]
  images.forEach(v=> v.name.includes(e.target.value)? arr.push(v):v)
  setArrImages(arr)
}



const sort=(e)=>{
  if(e.target.value==='byName'){
  setArrImages((arr) =>[...arr.sort((image1,image2)=> image1.name.localeCompare(image2.name))])
 }
 else if(e.target.value==='byDateDesc'){
  setArrImages((arr) =>[...arr.sort((image1,image2)=> image1.date - image2.date)])
 }
 else{
  setArrImages((arr) =>[...arr.sort((image1,image2)=> image2.date - image1.date)])
 }
}

const handleDelete =(name) =>{
  setDelname(name)
  setShow(true)

} 


const funDelete = (name)=>{
  const arr = images.filter(v=> v.name !== name)
  setImages(arr)
  setArrImages(arr)
  setShow(false)
}
console.log(images);
console.log(arrImages);

  
  return (

    <>
   

    
    <div className={styles.historyPageContainer}>
    
      <div className={styles.historyPageHead}>
        
        <div className={styles.historyPageSearch}>
       <input className={styles.historySearch} type="text" placeholder='search' onInput={(e)=> funSearch(e)}/>
       <FiSearch style={{color:'green', position:'absolute', right:'5px' ,top: '8px'}}/>
       </div>
       </div>
       <br />

  

       <div className={styles.HistoryPageSort}>
       <label htmlFor="historySort">{languages.HISTORY_SORT}</label>
       <select className={styles.historySort} id='sort' onChange={(e)=>sort(e)}>
       <option value="byDateAsc">{languages.HISTORY_SORT_ASC}</option>
       <option value="byDateDesc">{languages.HISTORY_SORT_DESC}</option>
       <option value="byName">{languages.HISTORY_SORT_NAME}</option>
       </select>
       </div>
     
       <ModalPopUp show={show} setShow={setShow} fonc={funDelete} delname={delname}/>
      
       <div className={styles.images}>
      {arrImages? arrImages.map(v => <HistoryImage src={v.url} date={new Date(v.date).toLocaleDateString()} time={new Date(v.date).toLocaleTimeString()} imgName={v.name} funcDel={handleDelete} /> ): null} 
       </div>
      
       </div>
   
    </>

  )
}

