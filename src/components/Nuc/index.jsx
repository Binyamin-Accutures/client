// import styles from "./style.module.css"

import { useContext, useRef, useState } from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import ImageContext from "../../context/ImageContext";
import Checkbox from "../Checkbox";

// creator: anat
// color: _______________
// icon: ________________

export default function Nuc(props) {
  const [inputFile, setInputFile] = useState();
  const inputRef = useRef();
  const value = useContext(ImageContext);
  const inputFunction = () => {
    inputRef.current.click();
  };

  const handle = (e) => {
    let name = e.name;
    let valueToChange;
    e.type == "checkbox"
      ? (valueToChange = e.checked)
      : (valueToChange = e.value);
    value.setBeforeISP((preve) => {
      const newobj = { ...preve };
      newobj.NUC[name] = valueToChange;
      return newobj;
    });
  };
  const handle2 = (e) => {
    let valueToChange = e.checked;
    value.setBeforeISP((preve) => {
      const newobj = { ...preve };
      if (e.name == "pt1"){
        (newobj.NUC.method.pt1 = valueToChange)
      }
      else if (e.name == "pt2"){
        (newobj.NUC.method.pt2 = valueToChange)
      }
      else if(e.name =="bad_pixel_correction"){
        (newobj.NUC.method.bad_pixel_correction = valueToChange)
      }
      return newobj;
    })
  };

  return (
    <div className={props.design}>
      <Checkbox
        label={"enable"}
        name={"enable"}
        onChange={handle}
        checked={value.beforeISP.NUC.enable}
      />

      <div>
        <label>Method</label>
        <div>
          <Checkbox
            label={"1pt"}
            name="pt1"
            onChange={handle2}
            checked={value.beforeISP.NUC.method.pt1}
          />
          <Checkbox
            label={"2pt"}
            name="pt2"
            onChange={handle2}
            checked={value.beforeISP.NUC.method.pt2}
          />
        </div>
      </div>

      <Checkbox
        label={"Bad Pixel Correction"}
        name={"bad_pixel_correction"}
        onChange={handle2}
        checked={value.beforeISP.NUC.method.bad_pixel_correction}
      />

      <label>Sensor Characteristics File</label>
      <button onClick={inputFunction}>
        <HiOutlineDotsCircleHorizontal />
      </button>

      <div>
        <input
          type="file"
          ref={inputRef}
          hidden
          onChange={(e) => setInputFile(e.target.files[0].name)}
        ></input>
      </div>

      {inputFile}
    </div>
  );
}
