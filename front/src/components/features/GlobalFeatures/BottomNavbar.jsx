import React from "react";
import { NavLink } from "react-router-dom";
import { GiMushroomGills, GiPiggyBank } from "react-icons/gi";

const BottomNavbar = () => {
    return(
        <div className="BottomNavbar">
            <NavLink to="/growing" className={({ isActive }) => (isActive ? "NavActive" : "NavDeactive")} ><GiMushroomGills size={24} /></NavLink>
            <NavLink to="/staking" className={({ isActive }) => (isActive ? "NavActive" : "NavDeactive")} ><GiPiggyBank size={24} /></NavLink>
        </div>
    )
}

export default BottomNavbar;