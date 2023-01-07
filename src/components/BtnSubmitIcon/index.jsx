import React from 'react'
import styles from "./style.module.css"

// creator: israel israeli
// color: _______________
// icon: ________________

export default function BtnSubmitIcon({ color, icon, func, ...props }) {
    return (<>
        <div className={styles.conteiner}>
            <button className={`${styles[color]} ${styles.submit}`} onClick={func} {...props}>
                <img src={"/images/icon-btns/" + icon} alt="" />
            </button>
        </div>
    </>
    );
}