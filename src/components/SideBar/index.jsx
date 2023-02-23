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
import language from "../../functions/language";

// creator: Liat

const SideBar = ({ setIsAfterISP }) => {
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
    { titel: `${language.NUC}`, component: <Nuc design={styles.D} /> },
    {
      titel: `${language.DYNAMIC_RANGE_STRECH}`,
      component: <DynamicRangeStretch design={styles.D} />,
    },
    {
      titel: `${language.DEMOSIC}`,
      component: <Demosaic data={data} design={styles.D} />,
    },
    { titel: `${language.DENOISE}`, component: <Denoise design={styles.D} /> },
    {
      titel: `${language.SHARPING}`,
      component: <Sharping data={sharpingData} design={styles.D} />,
    },
  ];
  const value = useContext(ImageContext);
  const [IsOpen, setIsOpen] = useState(true);
  function slideBar(e) {
    setIsOpen(!IsOpen);
  }
  let index = 2;
  return (
    <div className={styles.sideBar}>
      {/* {IsOpen ? (
        <FiChevronLeft
          className={styles.btnToggle}
          onClick={(e) => slideBar(e)}
        />
      ) : (
        <FiChevronRight
          className={styles.btnToggle}
          onClick={(e) => slideBar(e)}
        />
      )} */}
      {IsOpen && (
        <div className={styles.form}>
          <div className={styles.all}>
            <div className={styles.collapse}>
              <InputLoadImage width="100%" className={styles.loadBtn} />
              <div style={{ height: "10px" }} />
              <Image value={value} index={0} />
              <CollepseTopDown
                menuList={menuList}
                className={styles.blackBack}
              />
              <BtnRunISP className={styles.btn} setIsAfterISP={setIsAfterISP} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SideBar;
