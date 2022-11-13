import React from "react";
import { Link } from "react-router-dom";
import { CiVault } from "react-icons/ci";
import { TbMushroom } from "react-icons/tb";

const BottomNavbar = () => {
    return(
        <div className="BottomNavbar">
            <Link to="/growing" ><TbMushroom size={24} /></Link>
            <Link to="/staking" ><CiVault size={24} /></Link>
        </div>
    )
}

export default BottomNavbar;