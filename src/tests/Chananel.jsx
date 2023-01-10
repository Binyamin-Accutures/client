import React, { useState } from 'react'
import Checkbox from '../components/Checkbox'

function Chananel() {
  
    const [isChecked, setIsChecked] = useState(false);
    return (

    
    <div>
        <Checkbox label="" set={setIsChecked} prev={isChecked} />
    </div>
  )
}

export default Chananel

