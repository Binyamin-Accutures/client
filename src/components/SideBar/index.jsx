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
  //   const [beforeISPTemp, setBeforeISPTemp] = useState(value.beforeISP);
  function slideBar(e) {
    setIsOpen(!IsOpen);
  }
  let index = 2;
  return (
    <div className={styles.sideBar}>
      {IsOpen ? (
        <FiChevronLeft
          className={styles.btnToggle}
          onClick={(e) => slideBar(e)}
        />
      ) : (
        <FiChevronRight
          className={styles.btnToggle}
          onClick={(e) => slideBar(e)}
        />
      )}
      {IsOpen && (
        <div className={styles.form}>
          <div className={styles.all}>
            <div className={styles.collapse}>
              <InputLoadImage width="328px" className={styles.loadBtn} />
              <Image value={value} index={0} />
              <CollepseTopDown
                menuList={menuList}
                className={styles.blackBack}
              />
              <BtnRunISP className={styles.btn} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SideBar;
