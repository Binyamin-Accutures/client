import React from 'react'
import styles from './style.module.css'

function AdminInterFace() {
    const arrayUser = [
        {
            userName: "ddd",
            password: "fff",
            status:"fffg",
            isActiv: "ggg"
        },
        {
            userName: "ddd",
            password: "fff",
            status:"fffg",
            isActiv: "ggg"
        },
        {
            userName: "ddd",
            password: "fff",
            status:"fffg",
            isActiv: "ggg"
        },
        {
            userName: "ddd",
            password: "fff",
            status:"fffg",
            isActiv: "ggg"
        }
    ]

    return (
        <div>
            <table className={styles.table}>
                <tr>
                    <th>useName</th>
                    <th>password</th>
                    <th>Status</th>
                    <th colspan="2">isActiv</th>
                </tr>
                {arrayUser.map((v) => (
                    <tr>
                        <td>{v.userName}</td>
                        <td>{v.password}</td>
                        <td>{v.status}</td>
                        <td>{v.isActiv}</td>
                    </tr>
                ))}
                

            </table>


        </div>
    )
}

export default AdminInterFace
