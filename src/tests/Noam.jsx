import React, { useContext } from "react";
import Image from "../components/Image";
import InputLoadImage from "../components/InputLoadImage";
import ImageContext from "../context/ImageContext";

function Noam() {
  const value = useContext(ImageContext);
  let index = 2;
  return (
    <>
      <div>
        <InputLoadImage width={"328px"} />
        <Image value={value} index={index || 0} />
      </div>
    </>
  );
}

export default Noam;
