import React from 'react'
import styles from "./style.module.css";
import { AiOutlineCheck } from 'react-icons/ai'


// creator: Yisrael Olonoff
// color: __primary-color, text-color_____________
// icon: ______BsFillCheckSquareFill__________


function Button({ children ,type, width, func, ...props }) {
    return (
        <>
            <button
                type={type} style={{ width: width }}
                onClick={{ func }} className={styles.button}>
                {children} <AiOutlineCheck size={20}/>
            </button>
        </>
    )
}

export default Button