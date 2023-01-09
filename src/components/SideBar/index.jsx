import { useContext, useState } from "react";
import styles from "./style.module.css";
import ImageContext from "../../context/ImageContext";
import CollepseTopDown from "../CollepseTopDown";
import InputLoadImage from "../InputLoadImage";
import Image from "../Image";
// creator: Liat

const SideBar = () => {
  const menuList = [
    {
      titel: "NUC",
      component: (
        <div>
          <ul>
            <li>2</li>
            <li>2</li>
          </ul>
        </div>
      ),
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
        <Image images={value.beforeISP.images[0] || []} />
        <CollepseTopDown menuList={menuList} />
      </div>
    </form>
  );
};
export default SideBar;
