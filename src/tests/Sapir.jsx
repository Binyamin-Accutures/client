import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import HistoryImage from "../components/HistoryImage";
import InputSelect from "../components/InputSelect";
import LogOut from "../components/Logout";
import { setToken } from "../functions/apiRequest";
import LoginPage from "../pages/LoginPage";

export default function Sapir() {
    return (
        <div>
            {/* <LogOut/> */}
            <HistoryImage src={'https://pps.whatsapp.net/v/t61.24694-24/311019981_881128723230304_1836867762896045726_n.jpg?ccb=11-4&oh=01_AdQHa0JTI5h4aQ2YwULUtNHRLhcz3t2_PaKElYywXdLxJg&oe=63C944FC'} time={"ff"} date={"44"} imgName={"pic"} />
        </div>
    )
}

    // const logOut = () =>{
        //     localStorage.clear();
        //     setToken();
        //     setUser()
        // }