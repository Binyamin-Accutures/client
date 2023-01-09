import React from 'react'
import { useState } from 'react'
import styles from "./style.module.css"

export default function HistoryPage() {
  const images= [{name: 'ibmage1', url:'https://carwow-uk-wp-2.imgix.net/RR_VELAR_EDITION_23MY_027_GLHD_140422_01-scaled-e1659537496312.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600', data: ()=> { return new Date('2019-06-01')}},
                {name: 'iamage2', url:'https://www.galgalim.co.il/filestock/img/thumb_1664714566524-0.jpg', data: ()=> {return new Date('2020-12-22')}},
                {name: 'idmage3', url:'https://images1.calcalist.co.il/PicServer3/2019/09/10/933531/DSC_2798_lm.jpg', data: ()=> {return new Date('1990-07-13')}},
                {name: 'icmage4', url:'https://new-car-lease.co.il/wp-content/uploads/2022/02/2008-2022_1.jpeg', data: ()=> {return new Date('2013-08-11')}},
                {name: 'igmage5', url:'https://images1.calcalist.co.il/picserver3/crop_images/2021/09/19/rJWhoxlHmY/rJWhoxlHmY_0_263_2835_1596_0_x-large.jpg', data: ()=> {return new Date('2002-01-21')}},
                {name: 'ifmage6', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlQ4TAW6pwKRqQbaTciJql3DzCDMuFYQLUzbXnCIAEF7GLM1QbcsSgFyJKCVlQ51fUew&usqp=CAU', data: ()=> {return new Date('1983-03-07')}},
                {name: 'iemage7', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Mp6yLzHupZxKhu35ssIhDYJs2COlxl5jeg&usqp=CAU', data: ()=> {return new Date('2016-09-09')}},
              ]
   const [arrImages, setArrImages] = useState(images)           

const funSearch=(e)=>{
  const arr =[]
  images.forEach(v=> v.name.includes(e.target.value)? arr.push(v):v)
  setArrImages(arr)
}
console.log(arrImages);


const sort=(e)=>{
  if(e.target.value==='byName'){
    const arr = [];
  images.forEach(v=> arr.push(v.name))
  arr.sort().forEach((v,i,a) => images.forEach(image=> v===image.name? a[i]=image:image))
  setArrImages(arr)
 }
 else if(e.target.value==='byDateDesc'){
  const arr = images.sort((image1,image2)=> image1.data() - image2.data())
  setArrImages(arr)
 }
}
console.log(arrImages);
  
  return (
    <div className={styles.historyPageContainer}>
      <div className={styles.historyPageHeader}>
       <input className={styles.historySearch} type="text" placeholder='search' onInput={(e)=> funSearch(e)}/>
       </div>
       <br />



       <div className={styles.HistoryPageSort}>
       <label htmlFor="historySort">sort by</label>
       <select className={styles.historySort} id='sort' onChange={(e)=>sort(e)}>
       <option value="byDateAsc">Sort by date ASC</option>
       <option value="byDateDesc">Sort by date DESC</option>
       <option value="byName">Sort by name</option>
       </select>
       </div>

      
      
       <div className={styles.images}>
{arrImages? arrImages.map(v => <div >
                        {v.name}
                        <br />
                        <img src={v.url} alt="image" width={'100%'}/>
                        <br />
                        {v.data().toDateString()}
                        <br />
                          </div>): null} 
       </div>
    </div>
  )
}

