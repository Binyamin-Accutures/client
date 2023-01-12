import { useContext } from "react";
import InputSelect from "../InputSelect";
import ImageContext from "../../context/ImageContext";

function Demosaic(props) {
  const value = useContext(ImageContext);

  const handle = (e) => {
    let name = e.name;
    let valueToChange;
    e.type == "checkbox"
      ? (valueToChange = e.checked)
      : (valueToChange = e.value);
    value.setBeforeISP((preve) => {
      const newobj = { ...preve };
      newobj.demosaic[name] = valueToChange;
      return newobj;
    });
  };

  return (

    <div className={props.design}>
      <InputSelect
        label="method"
        options={["newton"]}
        width="265"
        handle={handle}
        dataDefault={value.beforeISP.demosaic.method}
      />
      <InputSelect
        label="pixelOrder"
        options={["hrfv"]}
        width="265"
        handle={handle}
        dataDefault={value.beforeISP.demosaic.pixelOrder}
      />
    </div>
  );
}

export default Demosaic;
