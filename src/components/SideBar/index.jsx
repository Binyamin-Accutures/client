import { useContext, useState } from "react";
import styles from "./style.module.css";
import ImageContext from "../../context/ImageContext";
import CollepseTopDown from "../CollepseTopDown";
import InputLoadImage from "../InputLoadImage";
import Image from "../Image";
import Nuc from "../Nuc";
import BtnRunISP from "../BtnRunISP";
// creator: Liat

const SideBar = () => {
  const menuList = [
    {
      titel: "NUC",
      component: <Nuc />,
    },
    { titel: "Dynamic Range Stretch", component: <div>roey</div> },
    { titel: "Demosaic", component: <div>roey</div> },
    { titel: "Denoise", component: <div>roey</div> },
    { titel: "Sharpening", component: <div>roey</div> },
  ];
  const value = useContext(ImageContext);
  const [IsOpen, setIsOpen] = useState(true);
  //   const [beforeISPTemp, setBeforeISPTemp] = useState(value.beforeISP);
  function slideBar(e) {
    setIsOpen(!IsOpen);
  }
  let index = 2;
  return (
    <>
      <button type="submit" onClick={(e) => slideBar(e)}>
        close
      </button>
      {IsOpen && (
        <div className={styles.form}>
          <div className={styles.collapse}>
            <InputLoadImage width="328px" />
            <Image value={value} index={index || 0} />
            <CollepseTopDown menuList={menuList} />
            <BtnRunISP />
          </div>
        </div>
      )}
    </>
  );
};
export default SideBar;
