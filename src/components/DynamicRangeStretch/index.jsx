import { useContext } from "react";
import ImageContext from "../../context/ImageContext";
import Checkbox from "../Checkbox";
import InputSelect from "../InputSelect";
import RangeSlider from "../RangeSlider";

// creator: yair ken

const DynamicRangeStretch = (props) => {
  const value = useContext(ImageContext);

  const handleHightLevel = (e) => {
    let name = e.name;
    let valueToChange;
    e.type == "checkbox"
      ? (valueToChange = e.checked)
      : (valueToChange = e.value);
    value.setBeforeISP((preve) => {
      const newobj = { ...preve };
      newobj.DRS[name] = valueToChange;
      return newobj;
    });
  };

  const handle = (e) => {
    let name = e.name;
    let valueToChange = e.value;
    value.setBeforeISP((preve) => {
      const newobj = { ...preve };
      newobj.DRS.method.cutoffs[name] = valueToChange;
      return newobj;
    });
  };

  return (
    <div className={props.design}>
      <Checkbox
        label="enable"
        name="enable"
        onChange={handleHightLevel}
        checked={value.beforeISP.DRS.enable}
      />

      <InputSelect
        label="method"
        options={["percent"]}
        width="265"
        handle={handle}
        dataDefault={value.beforeISP.DRS.method.cutoffs.method}
      />
      <RangeSlider
        func={handle}
        text="Bright Discards Percentile"
        name="low"
        min={0}
        max={100}
        step={1}
        textPosLeft={false}
        numInput={false}
        contextValue={value.beforeISP.DRS.method.cutoffs.low}
      />

      <RangeSlider
        func={handle}
        text="Dark Discard Percentile"
        name="high"
        min={0}
        max={100}
        step={1}
        textPosLeft={false}
        numInput={false}
        contextValue={value.beforeISP.DRS.method.cutoffs.high}
      />
    </div>
  );
};

export default DynamicRangeStretch;

//className={`styles.${label}`}
