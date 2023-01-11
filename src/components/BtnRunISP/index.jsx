import React from "react";
import styles from "./style.module.css";
import parentsStyles from "../SideBar/style.module.css";

// creator: Hadar Naiman

export default function BtnRunISP(props) {
  // const btnCss = props.className;
  const btnClasses = `${props.className} ${styles.run_isp}`;
  return <button className={btnClasses}>Run ISP</button>;
}
