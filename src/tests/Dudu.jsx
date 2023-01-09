import React from 'react'
import Carousel from '../components/Carousel';

const checkimg=[
  {name:"image1", url:"https://www.w3schools.com/w3css/img_5terre.jpg"},
  {name:"image2", url:"https://www.w3schools.com/w3css/img_monterosso.jpg"},
  {name:"image3", url:"https://www.w3schools.com/w3css/img_vernazza.jpg"},
  {name:"image4", url:"https://www.w3schools.com/w3css/img_manarola.jpg"}
]

function Dudu() {
  return (
    <div><Carousel imgArray ={checkimg}/>
    </div>
  )
}

export default Dudu