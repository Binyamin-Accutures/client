// import Nuc from "../Nuc";
// import DynamicRangeStretch from "../DynamicRangeStretch";
import { useState, useContext } from "react";
import ImageContext from "../../context/ImageContext";
// import Demosaic from "../Demosaic";
// import Denoise from "../Denoise";
// import Sharping from "../Sharping";
import styles from "./style.module.css";
// import RangeSlider from "../RangeSlider";
// import { FiSettings } from "react-icons/fi"
// import ReactPDF, { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import JsPDF from 'jspdf';

// ReactPDF.render(<Pdf />, `./example.pdf`)


const generatePDF = () => {

    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('#report')).then(() => {
        report.save('report.pdf');
    })
};


// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default function Pdf() {
    const value = useContext(ImageContext);
    return (
        <div className={styles.pdf} id="report">
            <h1 className={styles.header}>IMAGE NAME</h1>
            <div className={styles.container}>
                <div className={styles.left_bar}> <label className={styles.label}>NUC</label><br />
                    {` Enable: ${value.beforeISP.NUC.enable}`}<br />
                    Method: <br />
                    {` 1pt: ${value.beforeISP.NUC.method.pt1}`}<br />
                    {` 2pt: ${value.beforeISP.NUC.method.pt2}`}<br />
                    {` Bad Pixel Correction: ${value.beforeISP.NUC.method.bad_pixel_correction}`}<br />

                </div>
                <div className={styles.left_bar}> <label className={styles.label}>Dynamic Range Stretch</label><br />
                    {` Enable: ${value.beforeISP.NUC.enable}`}<br />
                    Method: <br />
                    {` 1pt: ${value.beforeISP.NUC.method.pt1}`}<br />
                    {` 2pt: ${value.beforeISP.NUC.method.pt2}`}<br />
                    {` Bad Pixel Correction: ${value.beforeISP.NUC.method.bad_pixel_correction}`}<br />

                </div>

            </div>
            <button onClick={generatePDF} type="button">Export PDF</button>
        </div>
    )






    // // Create styles
    // const styles = StyleSheet.create({
    //     page: {
    //         flexDirection: 'row',
    //         backgroundColor: '#E4E4E4'
    //     },
    //     section: {
    //         margin: 10,
    //         padding: 10,
    //         flexGrow: 1
    //     }
    // });

    // Create Document Component
    // return (
    //     <>
    //         <Document >
    //             <Page size="A4" style={styles.page}>
    //                 <View style={styles.section}>
    //                     <Text>Section #1</Text>
    //                 </View>
    //                 <View style={styles.section}>
    //                     <Text>Section #2</Text>
    //                 </View>
    //             </Page>
    //         </Document>
    //     </>
    // );

    // <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
    //     {({ blob, url, loading, error }) =>
    //         loading ? 'Loading document...' : 'Download now!'
    //     }
    // </PDFDownloadLink>

    // ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);


    // return (
    //     <div className={styles.pdf}>
    //         <h1 className={styles.header}>IMAGE NAME</h1>
    //         <div className={styles.container}>
    //             <div className={styles.setting}>
    //                 <div className={styles.left_bar}> <label className={styles.label}>NUC</label><br />
    //                     <Nuc design={styles.D} /> </div>
    //                 <div className={styles.left_bar}>  <label className={styles.label}>Demosaic</label><br />
    //                     <Demosaic design={styles.D} /></div>
    //                 <div className={styles.sharpening}> <label className={styles.label}>Sharpening</label><br />
    //                     <Sharping design={styles.D} /></div>
    //                 <div className={styles.left_bar}>  <label className={styles.label}>Dynamic Range Stretch</label><br />
    //                     <DynamicRangeStretch design={styles.D} /></div>
    //                 <div className={styles.left_bar}> <label className={styles.label}>Denoise</label><br />
    //                     <Denoise design={styles.D} /></div>
    //             </div>
    //             <img src="" className={styles.image} />
    //             <div> <FiSettings /> DISPLAY SETTING</div>
    //             <div>    {

    //             }</div>
    //         </div>



    //     </div >

    // )

}