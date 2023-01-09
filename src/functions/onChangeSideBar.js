

export default function onChangeSideBar(componentName, CompKey, InputValue, beforeISPTemp, setBeforeISPTemp) {
    setBeforeISPTemp(beforeISPTemp[componentName][CompKey] = InputValue)

}

