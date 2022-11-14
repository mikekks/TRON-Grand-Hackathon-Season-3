import React from "react";
import { NavLink } from "react-router-dom";
import { GiMushroomGills, GiPiggyBank } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdInventory } from "react-icons/md";

const BottomNavbar = () => {
    return(
        <div className="BottomNavbar">
            <NavLink to="/growing" className={({ isActive }) => (isActive ? "NavActive" : "NavDeactive")} ><GiMushroomGills size={24} /></NavLink>
            <NavLink to="/staking" className={({ isActive }) => (isActive ? "NavActive" : "NavDeactive")} ><GiPiggyBank size={24} /></NavLink>
            <NavLink to="/thief" className={({ isActive }) => (isActive ? "NavActive" : "NavDeactive")} ><FaMoneyBillWave size={24} /></NavLink>
            <NavLink to="/inventory" className={({ isActive }) => (isActive ? "NavActive" : "NavDeactive")} ><MdInventory size={24} /></NavLink>
        </div>
    )
}

export default BottomNavbar;