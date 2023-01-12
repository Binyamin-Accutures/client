import React, { useContext, useEffect, useState } from 'react';
import Checkbox from '../Checkbox';
import mangeContext from '../../context/ImageContext'
import language from '../../functions/language';

function CheckList() {
    const { afterISP, setAfterISP } = useContext(mangeContext)
    const context = afterISP.displaySet

    const [isAllChecked, setIsAllChecked] = useState(true)

    useEffect(() => {
        if(isAllChecked){
            Object.keys(context).forEach(v => setAfterISP(prev => ({...prev, displaySet:
                ({...prev.displaySet, [v]:
                    ({...prev.displaySet[v], enable: true})
                })
            })))
        }
    },[isAllChecked])

    useEffect(()=> {
        if(Object.keys(context).find(v => !context[v].enable)){
            setIsAllChecked(() => false)
        }
    },[afterISP.displaySet])

    const handleCheckAll = (target) => {
        if(!isAllChecked) setIsAllChecked(() => target.checked)
    }

    const handleCheck = (target) => {
        setAfterISP(prev => ({...prev, displaySet:
            ({...prev.displaySet, [target.name]:
                ({...prev.displaySet[target.name], enable: target.checked})
            })
        })) 
    }

    return (
        <div>
            <Checkbox label={language.SAVE_ALL_SECTION} onChange={handleCheckAll} prev={isAllChecked} />
            <Checkbox label={language.s0} onChange={handleCheck} name={'s0'} prev={context.s0.enable} /> 
            <Checkbox label={language.DOLP} onChange={handleCheck} name={'DoLP'} prev={context.DoLP.enable} /> 
            <Checkbox label={language.ALOP_OVERLAYED} onChange={handleCheck} name={'AoLPOvealayed'} prev={context.AoLPOvealayed.enable} /> 
            <Checkbox label={language.AOLPDOLP} onChange={handleCheck} name={'AoLPDoLP'} prev={context.AoLPDoLP.enable} /> 
            <Checkbox label={language.RGB} onChange={handleCheck} name={'RGB'} prev={context.RGB.enable} /> 
        </div>
    );
}

export default CheckList;