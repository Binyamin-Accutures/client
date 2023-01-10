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
    { titel: "NUC", component: <Nuc /> },
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
      component: <Demosaic data={data} className={styles.pedin} />,
    },
    { titel: "Denoise", component: <Denoise /> },
    { titel: "Sharpening", component: <Sharping data={sharpingData} /> },
  ];
  const value = useContext(ImageContext);
  const [IsOpen, setIsOpen] = useState(true);
  function slideBar(e) {
    setIsOpen(!IsOpen);
  }
  return (
    <>
      <button type="submit" onClick={(e) => slideBar(e)}>
        close
      </button>
      {IsOpen && (
        <div className={styles.form}>
          <div className={styles.collapse}>
            <InputLoadImage width="328px" />
            <Image value={value} index={0}/>
            <CollepseTopDown menuList={menuList} />
            <BtnRunISP />
          </div>
        </div >
      )}
    </>
  );
};
export default SideBar;
