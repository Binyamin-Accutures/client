import React, { useContext, useEffect, useState } from 'react';
import Checkbox from '../Checkbox';
import mangeContext from '../../context/ImageContext'
import styles from "./style.module.css";


function CheckList() {
    const { afterISP, setAfterISP } = useContext(mangeContext)
    const context = afterISP.displaySet

    const [isAllChecked, setIsAllChecked] = useState(true)

    useEffect(() => {
        if (isAllChecked) {
            Object.keys(context).forEach(v => setAfterISP(prev => ({
                ...prev, displaySet:
                    ({
                        ...prev.displaySet, [v]:
                            ({ ...prev.displaySet[v], enable: true })
                    })
            })))
        }
    }, [isAllChecked])

    useEffect(() => {
        if (Object.keys(context).find(v => !context[v].enable)) {
            setIsAllChecked(() => false)
        }
    }, [afterISP.displaySet])

    const handleCheckAll = (target) => {
        if (!isAllChecked) setIsAllChecked(() => target.checked)
    }

    const handleCheck = (target) => {
        setAfterISP(prev => ({
            ...prev, displaySet:
                ({
                    ...prev.displaySet, [target.name]:
                        ({ ...prev.displaySet[target.name], enable: target.checked })
                })
        }))
    }

    return (
        <div >
            <div className={styles.bold} >
                <Checkbox label={'Save all sections results'} onChange={handleCheckAll} prev={isAllChecked} />
            </div>
            <div className={styles.list}>
                <Checkbox label={'S0'} onChange={handleCheck} name={'s0'} prev={context.s0.enable} />
                <Checkbox label={'DoLP'} onChange={handleCheck} name={'DoLP'} prev={context.DoLP.enable} />
                <Checkbox label={'AoLP Overlayed'} onChange={handleCheck} name={'AoLPOvealayed'} prev={context.AoLPOvealayed.enable} />
                <Checkbox label={'AoLP + DoLP'} onChange={handleCheck} name={'AoLPDoLP'} prev={context.AoLPDoLP.enable} />
                <Checkbox label={'RGB'} onChange={handleCheck} name={'RGB'} prev={context.RGB.enable} />
            </div>
        </div>
    );
}

export default CheckList;