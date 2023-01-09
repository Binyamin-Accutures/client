import { useContext, useState } from "react";
import styles from "./style.module.css";
import ImageContext from "../../context/ImageContext";
import CollepseTopDown from "../CollepseTopDown";
import InputLoadImage from "../InputLoadImage";
import Image from "../Image";
import Nuc from "../Nuc";
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
  const [beforeISPTemp, setBeforeISPTemp] = useState(value.beforeISP);
  console.log("value.beforeISP -", value.beforeISP.images);
  return (
    <form className={styles.form}>
      <div className={styles.collapse}>
        <InputLoadImage width="328px" />
        <Image value={value} />

        <CollepseTopDown menuList={menuList} />
      </div>
    </form>
  );
};
export default SideBar;
