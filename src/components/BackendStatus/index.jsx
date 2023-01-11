import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import language from '../../functions/language'


function BackendStatus({ cntImg = 4 }) {
    const [battery, setBattery] = useState([false, false, false, false, false, false, false, false, false, false, false])
    useEffect(() => {
        const intervel = setInterval(() => {
            setBattery(prev => {
                let count = prev.filter(v => v).length
                // console.log(count)
                let newArray = prev.map((v, i) => {
                    //    console.log( i<=9)
                    return i <= count && count <= 10 ? true : false
                }
                )
                return newArray
            })
        }, 200);

        return () => { clearInterval(intervel) }
    }, [])

    return (

        <div className={styles.BackendStatusMain}>
            <label className={styles.title}>Backend Status</label>
            <div className={styles.BackendStatus}>


                <label> {language.RUNNING} </label>
                <label>Number of Images = {cntImg} </label>
                <label>In Progress</label>


                <div className={styles.battery}>
                    {battery.map((v, i) => {
                        return <div key={i + "khsdvkhs"} className={v ? styles.bar : styles.dark} ></div>

                    })}
                </div>

            </div>

        </div>


    )
}

export default BackendStatus