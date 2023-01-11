import axios from "axios";
import React, { useContext } from "react";
import Button from "../components/Button";
import Image from "../components/Image";
import InputLoadImage from "../components/InputLoadImage";
import ImageContext from "../context/ImageContext";
import apiCalls from "../functions/apiRequest";

function Noam() {
  const value = useContext(ImageContext);
  let index;

  return (
    <>
      <div>
        <InputLoadImage width={"328px"} />
        <Image value={value} index={index || 0} />
        {/* <Button func={uplaodToServer()}>Next</Button> */}
      </div>
    </>
  );
}

export default Noam;


// // first update server
// const uplaodToServer = (start, end, condition, files) => {
//   // 
//   apiCalls("post", "api/files", files)
// };
