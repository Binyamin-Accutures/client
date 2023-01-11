import Nuc from "../Nuc";
import DynamicRangeStretch from "../DynamicRangeStretch";
import { useState, useContext } from "react";
import ImageContext from "../../context/ImageContext";
import Demosaic from "../Demosaic";
import Denoise from "../Denoise";
import Sharping from "../Sharping";
import styles from "./style.module.css";
import RangeSlider from "../RangeSlider";
import { FiSettings } from "react-icons/fi"




export default function Pdf() {



    return (
        <div className={styles.pdf}>
            <h1 className={styles.header}>IMAGE NAME</h1>
            <div className={styles.container}>
                <div className={styles.setting}>
                    <div className={styles.left_bar}> <label className={styles.label}>NUC</label><br />
                        <Nuc design={styles.D} /> </div>
                    <div className={styles.left_bar}>  <label className={styles.label}>Demosaic</label><br />
                        <Demosaic design={styles.D} /></div>
                    <div className={styles.sharpening}> <label className={styles.label}>Sharpening</label><br />
                        <Sharping design={styles.D} /></div>
                    <div className={styles.left_bar}>  <label className={styles.label}>Dynamic Range Stretch</label><br />
                        <DynamicRangeStretch design={styles.D} /></div>
                    <div className={styles.left_bar}> <label className={styles.label}>Denoise</label><br />
                        <Denoise design={styles.D} /></div>
                </div>
                <img src="" className={styles.image} />
                <div> <FiSettings /> DISPLAY SETTING</div>
                <div>    {

                }</div>
            </div>



        </div >

    )

}