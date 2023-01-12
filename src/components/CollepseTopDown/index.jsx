import styles from "./style.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useEffect, useState } from "react";

const CollepseTopDown = (props) => {
  const [openCollepseTopDown, setOpenCollepseTopDown] = useState(null)

  let openClasses = `${styles.oneOptions} ${props.className}`

  useEffect(() => {
    if (props.isClose) {
      setOpenCollepseTopDown(() => null)
    }
  }, [props.isClose])

  useEffect(() => {
    if (openCollepseTopDown && props.isClose) {
      props.setIsClose(() => false)
    }
  }, [openCollepseTopDown])

  const onClickLine = (titel, ref) => {
    if (openCollepseTopDown === titel) {
      setOpenCollepseTopDown(null)
    }
    else {
      setOpenCollepseTopDown(titel)
    }
  }}}


  return (
    <div className={styles.CollepseTopDown}>
      {props.menuList.map((v, inx) => {
        return (
         <>
         <div className={v.titel == openCollepseTopDown ? openClasses : styles.oneOptions} id={inx} onClick={()=>onClickLine(v.titel)}>
            <p className={openCollepseTopDown===v.titel ? styles.bold : ""}>{v.titel}</p>
            {openCollepseTopDown===v.titel ?<FiChevronUp/>:<FiChevronDown />}
          </div>
           <div className={openCollepseTopDown===v.titel ? `${styles.openPropertis} ${styles.active}` : styles.openPropertis}>{v.component}</div>
       
           </>
        )
      })}

    </div>
  );
};

export default CollepseTopDown;
