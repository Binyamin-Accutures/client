import React from 'react'
import Demosaic from '../components/Demosaic'

function Pavel() {
    const data = {
        demosaic : {
            enable : 'true',
            method : '432',
            pixelOrder : 'fds'
        }
    }
  return (
    <div>Pavel
        <Demosaic data={data} />
    </div>
  )
}

export default Pavel