import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import language from "../../functions/language";
import ImageContext from "../../context/ImageContext";

function BackendStatus() {
  const value = useContext(ImageContext);
  const cntImg = value.beforeISP.images.length;

  const [battery, setBattery] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  console.log(value.beforeISP.images.length);
  useEffect(() => {
    const intervel = setInterval(() => {
      setBattery((prev) => {
        let count = prev.filter((v) => v).length; //begin from
        let newArray = prev.map((v, i) => {
          return i <= count && count <= 10 ? true : false;
        });
        return newArray;
      });
    }, 200);

    return () => {
      clearInterval(intervel);
    };
  }, []);

  return (
    <div className={styles.BackendStatusMain}>
      <h1>{language.BACK_END_STATUS}</h1>
      <div className={styles.BackendStatus}>
        <label> {language.RUNNING} </label>
        <label>
          {language.NUMBER_OF_IMAGE} = {cntImg}{" "}
        </label>
        <label>{language.IN_PROGRESS}</label>

        <div className={styles.battery}>
          {battery.map((v, i) => {
            return (
              <div
                key={i + "khsdvkhs"}
                className={v ? styles.bar : styles.dark}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BackendStatus;
