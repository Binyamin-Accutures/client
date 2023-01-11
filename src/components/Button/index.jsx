import React from 'react'
import styles from "./style.module.css";
import { AiOutlineCheck } from 'react-icons/ai'


// creator: Yisrael Olonoff
// colors: __primary-color, text-color, other colors for the active mode_____________
// icon: ______AiOutlineCheck__________
// when using my button component you decide the context by
// using my props: type={}, width={}, func={}, {props}.
// to add text in your button use children, example: 
// <Button type={'submit'} width={133} > Your text </Button>


function Button({ children, type, width, func, ...props }) {
    return (
        <>
            <button
                type={type} style={{ width: width }}
                onClick={func} className={styles.button} {...props}>
                {children} <AiOutlineCheck size={20} />
            </button>
        </>
    )
}

export default Button