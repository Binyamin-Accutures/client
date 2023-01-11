import { useContext, useState } from "react";
import styles from "./style.module.css";
import ImageContext from "../../context/ImageContext";
import CollepseTopDown from "../CollepseTopDown";
import InputLoadImage from "../InputLoadImage";
import Image from "../Image";
import Nuc from "../Nuc";
import BtnRunISP from "../BtnRunISP";
import DynamicRangeStretch from "../DynamicRangeStretch";
import Demosaic from "../Demosaic";
import Denoise from "../Denoise";
import Sharping from "../Sharping";
import apiCalls from "../../functions/apiRequest";
import { FiChevronRight, FiChevronLeft, IconName } from "react-icons/fi";
// creator: Liat

const SideBar = () => {
  
  const data = {
    demosaic: {
      enable: "true",
      method: ["Newton", "Tesla", "Edison"],
      pixelOrder: ["1", "2", "3"],
    },
  };

  const sharpingData = {
    sharpening: {
      enable: true,
      method: ["1", "2", "3"],
      radius: 0,
      ESP: 0,
      trehold: 0,
    },
  };
  const menuList = [
    {
      titel: "NUC",
      component: (
        <Nuc
          classCollaps={[
            "category",
            "subtitle",
            "labal_colaps_top_down",
            "titel_colaps_top_down",
          ]}
        />
      ),
    },
    {
      titel: "Dynamic Range Stretch",
      component: (
        <DynamicRangeStretch
          classNameTitle="title"
          classNameOption="option"
          classNameSecdTitle="dropTitle"
        />
      ),
    },
    {
      titel: "Demosaic",
      component: <Demosaic data={data} className={styles.category} />,
    },
    { titel: "Denoise", component: <Denoise /> },
    { titel: "Sharpening", component: <Sharping data={sharpingData} /> },
  ];
  const value = useContext(ImageContext);
  const [IsOpen, setIsOpen] = useState(true);
  function slideBar(e) {
    setIsOpen(!IsOpen);
  }

  const handle = (e) => {
    e.preventDefault();
    console.log(value.beforeISP.images);
    // console.log(e.target[1]);
    const fileArray = value.beforeISP.images;
    const file = new FormData();
    fileArray.forEach((v) => {
      // console.log(v["url"]);
      file.append("url", v["url"]);
      file.
      console.log(v["url"]);
    });

  };
  const sendSettingsToServer = () => {
    console.log();
    apiCalls("post", "/files", value.beforeISP);
  };
  return (
    <>   
    <div className={styles.sideBar}>
    {/* <FiChevronLeft
        className={styles.slideBar}
        className={styles.btnToggle}
        onClick={(e) => slideBar(e)}/
      > */}
      {IsOpen ?
      <FiChevronLeft className={styles.btnToggle} onClick={(e) => slideBar(e)}/>:
      <FiChevronRight className={styles.btnToggle} onClick={(e) => slideBar(e)}/>}
      {IsOpen && (
        <div className={styles.form}>
          <div className={styles.all}>
            <form onSubmit={handle}>
              <InputLoadImage width="328px" className={styles.loadBtn}/>
              <Image value={value} index={0} />
              <CollepseTopDown menuList={menuList} className={styles.blackBack} />
              <BtnRunISP className={styles.btn} sendSettingsToServer={sendSettingsToServer} />
            <input type="submit" className={styles.run_isp} value="Run ISP" />
          </form>
          </div>
        </div>
      )}
      </div>
    </>
  );
};
export default SideBar;
