import React from 'react'
import Styles from './style.module.css'

//create by: Aviad elya

function AdminInterFace() {
    const arrayUser = [];

    return (
        <div className={Styles.generalDiv}>
            <table>
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
