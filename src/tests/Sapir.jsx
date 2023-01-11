import { useState } from "react";
import { Link } from "react-router-dom";
import DisplaySetting from "../components/DisplaySettings";
import Header from "../components/Header";
import HistoryImage from "../components/HistoryImage";
import InputSelect from "../components/InputSelect";
import LogOut from "../components/Logout";
import { setToken } from "../functions/apiRequest";
import LoginPage from "../pages/LoginPage";

export default function Sapir() {
    return (
        <div>
<DisplaySetting/>
        </div>
    )
}

   