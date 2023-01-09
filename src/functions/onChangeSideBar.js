
export default function onChangeSideBar(son, field, value, beforeISPTemp, setBeforeISPTemp) {
    setBeforeISPTemp(beforeISPTemp[son][field] = value)
}

export default onChangeSideBar;