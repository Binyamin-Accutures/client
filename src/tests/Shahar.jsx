import RangeSlider from "../components/RangeSlider";

import React from 'react';

function Shahar(props) {
    return (
        <RangeSlider
            min={1}
            max={10}
            text={'Frame#'}
            textPosLeft={false}
            name={"shahar"} 
        />
    );
}

export default Shahar;