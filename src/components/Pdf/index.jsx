import { useState, useContext } from "react";
import ImageContext from "../../context/ImageContext";
import styles from "./style.module.css";
import { FiSettings } from "react-icons/fi"
import { GrDocumentPdf } from "react-icons/gr"
import logo from './logo.svg';
import JsPDF from 'jspdf';


const generatePDF = () => {

    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('#report')).then(() => {
        report.save('report.pdf');
    })
};

export default function Pdf() {
    const value = useContext(ImageContext);
    return (
        <div className={styles.pdf} id="report">
            <div className={styles.logo}><img src={logo} alt='logo' />
                < div className={styles.container}>
                    <div className={styles.left_bar}> <label className={styles.label}><b>NUC</b></label><br />
                        {` Enable: ${value.beforeISP.NUC.enable}`}<br />
                        Method: <br />
                        {` 1pt: ${value.beforeISP.NUC.method.pt1}`}<br />
                        {` 2pt: ${value.beforeISP.NUC.method.pt2}`}<br />
                        {` Bad Pixel Correction: ${value.beforeISP.NUC.method.bad_pixel_correction}`}<br />

                    </div>
                    <div className={styles.left_bar}> <label className={styles.label}><b>Dynamic Range Stretch</b></label><br />
                        {` Enable: ${value.beforeISP.DRS.enable}`}<br />
                        {`Method: ${value.beforeISP.DRS.method.cutoffs.method}`}<br />
                        {`Bright Discard Precentile: ${value.beforeISP.DRS.method.cutoffs.low}`}<br />
                        {` Dark Discard  Precentile: ${value.beforeISP.DRS.method.cutoffs.high}`}<br />

                    </div>

                    <div className={styles.left_bar}> <label className={styles.label}><b>Demosaic</b></label><br />

                        {`Method: ${value.beforeISP.demosaic.method}`}<br />
                        {`Pixel Order: ${value.beforeISP.demosaic.pixelOrder}`}<br />


                    </div>

                    <div className={styles.left_bar}> <label className={styles.label}><b>Denoise</b></label><br />
                        {`Method: ${value.beforeISP.denoise.method}`}<br />
                        {`Radius: ${value.beforeISP.denoise.radius}`}<br />
                        {` ESP: ${value.beforeISP.denoise.ESP}`}<br />

                    </div>
                    <div className={styles.left_bar}> <label className={styles.label}><b>Sharpening</b></label><br />
                        {` Enable: ${value.beforeISP.sharpening.enable}`} <br />
                        {`Method: ${value.beforeISP.sharpening.method}`}<br />
                        {`Radius: ${value.beforeISP.sharpening.radius}`}<br />
                        {` ESP: ${value.beforeISP.sharpening.ESP}`}<br />
                        {` trehold: ${value.beforeISP.sharpening.trehold}`}<br /><br />

                    </div>


                    <h3> <FiSettings /> DISPLAY SETTING</h3>

                </div>
                <div>
                    <div className={styles.left_bar}> <label className={styles.label}><b>RGB</b></label><br />
                        {`AoLP Center: ${value.afterISP.displaySet.RGB.AoLPCenter}`}<br />
                        {`AoLP FOV: ${value.afterISP.displaySet.RGB.AoLPPov}`}<br />
                        {`Minimum DoLP value: ${value.afterISP.displaySet.RGB.minDoLPVal}`}<br />
                        {`Maximum DoLP value: ${value.afterISP.displaySet.RGB.maxDoLPVal}`}<br />
                        {`Minimum S0 value: ${value.afterISP.displaySet.RGB.minS0Value}`}<br />
                        {`Maximum S0 value: ${value.afterISP.displaySet.RGB.maxS0Value}`}
                    </div>

                    <button onClick={generatePDF} type="button"><GrDocumentPdf />Export PDF</button>
                </div >

            </div >
        </div >
    )
}