import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Image from "../components/Image";
import InputLoadImage from "../components/InputLoadImage";
import ImageContext from "../context/ImageContext";
import apiCalls from "../functions/apiRequest";

function Noam() {
  const value = useContext(ImageContext);
  let index;
  
useEffect(()=>{

value.setCurrentImages(value.beforeISP.images)
console.log(value.currentImages);

},[value.beforeISP])


const prepareFilesToServer = (diff) => {  
    let formData = new FormData();
    for(let i of diff){
   
    formData.append("file", i)
  
  }
  return formData
    }
    
    const sendSettingsToServer = async (data) => {
      const serverFileList = await apiCalls(
        "get",
        "api/files" /*"what in server"*/
      );
    
      let same = [];
      let diff = [];
    
      const current = value.currentImages;
      // #1 compare current to server.
      current.foreach((image) => {
        if (serverFileList.data.includes(image)) {
          same.push(image);
        } else {
          diff.push(image);
        }
      });
      // #2 compare server to current
      const removeFromServer = serverFileList.map((v) => {
        if (!same.includes(v) && !diff.includes(v)) return v;
      });
      // removeFromServer && apiCalls("DELETE", "api/files", removeFromServer);
    
let beck = prepareFilesToServer(diff)


      apiCalls("POST", "api/files",{data});
      
    };
      






    const oneVersPostToServer =  () => {
   let formData = prepareFilesToServer(value.currentImages)

// -----------------    working!! dont touch!!      ----------------------- 

  //   axios.post("https://accutures-server.onrender.com/api/files", formData, {
  //     headers: {
  //       "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiamRvZTJzZGRoQDVnZGRtYWQ0MzRkZGRpbC5jb20iLCJpYXQiOjE2NzM0NTUwMzgsImV4cCI6MTY3MzU0MTQzOH0.aH2t8DlExa2oL1XSm9dmZLULN-S4k3kcXb9lh5dx2ko"
  //     }
  // }).then((req)=> {
  //   let projName = Date.parse(req.data.src[1].projProps.createDate)
  //   console.log("project name: ", projName )  } )
  // -----------------------------------------------------------------------

   axios.get(`https://accutures-server.onrender.com/api/files/upload/jdoe2sddh@5gddmad434dddil.com/1673456228914/original`, formData, {
    headers: {
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiamRvZTJzZGRoQDVnZGRtYWQ0MzRkZGRpbC5jb20iLCJpYXQiOjE2NzM0NTUwMzgsImV4cCI6MTY3MzU0MTQzOH0.aH2t8DlExa2oL1XSm9dmZLULN-S4k3kcXb9lh5dx2ko"
    }
}).then((req)=> {
  
  console.log("get files", req)

 } )

 
//http://localhost:5000/api/files/upload/davidhakak19@gmail.com/1673450213572/original



  }
 

       
  
    
      










  return (
    <>


      <div>
        <InputLoadImage width={"328px"} />
        <Image value={value} index={index || 0} />
        <Link to={"/calibration"}>
        <Button func={()=>oneVersPostToServer()}>Next</Button>
      </Link>


      </div>
    </>
  );
}

export default Noam;


// // first update server
const uplaodToServer = (start, end, condition, files) => {

  // 
  apiCalls("post", "api/files", files)
};
