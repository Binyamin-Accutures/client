import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import HistoryImage from "../components/HistoryImage";
import InputSelect from "../components/InputSelect";
import { setToken } from "../functions/apiRequest";
import LoginPage from "../pages/LoginPage";

export default function Sapir() {
    return (
        <div>
            <HistoryImage  />
        </div>
    )
}

    // const logOut = () =>{
        //     localStorage.clear();
        //     setToken();
        //     setUser()
        // }