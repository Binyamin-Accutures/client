import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { palette } from "@mui/system";

function valuetext(value) {
  return { value };
}

const minDistance = 1;

export default function MinimumDistanceSlider() {
  const [value2, setValue2] = React.useState([1, 100]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Box
      sx={{
        width: 736.6,

        borderRadius: 3,
        height: 1,
        padding: 0,
        color: "#3a8589",
      }}
    >
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
}
