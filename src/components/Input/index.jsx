import React from 'react'
import styles from './style.module.css'

function Input({ type, placeholder, pattern, ...props }) {
    // const pattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[@#\$%\^&\*]).{8,}$/;

    // const valid = (e) => {
    //     if (type == 'email') { return setValidition(true) }
    //     else if (type == 'password') {
    //         if (pattern.test(e.target.value)) { return setValidition(true) }
    //         else return setValidi(false)
    //     }
    // }




    return (
        <div>
            <input type={type} name='input' className={styles.input} placeholder={placeholder} pattern={pattern} {...props}/>
        </div>
    )
}

export default Input





