import React from 'react'
import Demosaic from '../components/Demosaic'
import Sharping from '../components/Sharping'

function Pavel() {
  // ! default needs to be provided 
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
    
  return (
    <div>
        <Demosaic data={data} />
        <Sharping data={sharpingData}/>
    </div>
  )
}

export default Pavel