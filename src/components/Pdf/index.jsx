import Nuc from "../Nuc";
import DynamicRangeStretch from "../DynamicRangeStretch";
import Demosaic from "../Demosaic";
import Denoise from "../Denoise";
import Sharping from "../Sharping";



export default function Pdf() {


    return (
        <div className={"pdf"}>
            <h1 className={"header"}>IMAGE NAME</h1>
            <div className={"container"}>
                <div>
                    <div className={"left_bar"}> <Nuc /> </div>
                    <div className={"left_bar"}>  <DynamicRangeStretch
                        classNameTitle="title"
                        classNameOption="option"
                        classNameSecdTitle="dropTitle"
                    /></div>
                    <div className={"left_bar"}><Demosaic data={data} className={styles.pedin} /></div>
                    <div className={"left_bar"}><Denoise /></div>
                </div>
                <div className={"sharpening"}><Sharping data={sharpingData} /></div>
            </div>



        </div>

    )

}