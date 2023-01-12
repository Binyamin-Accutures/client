import React from 'react'
import styles from "./style.module.css"
import parentsStyles from "../SideBar/style.module.css"
import language from '../../functions/language';

// creator: Hadar Naiman


export default function BtnRunISP({sendSettingsToServer},props) {


    // const btnCss = props.className;
    const btnClasses = `${props.className} ${styles.run_isp}`;
    return (
        <button className={btnClasses}>{language.RUNISP}</button>


    );
}
