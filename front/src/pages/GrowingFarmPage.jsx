import React, { useState } from "react";
import BottomNavbar from "../components/features/GlobalFeatures/BottomNavbar";
import Itembar from "../components/features/GlobalFeatures/Itembar";
import TopBalancebar from "../components/features/GlobalFeatures/TopBalancebar";
import Tree from "../components/features/GrowingFarmComponents/Tree";

const GrowingFarmPage = () => {
    
    const [mode, setMode] = useState("mush");
    
    const handleMode = (value) => {
        setMode(value);
    }

    return (
        <div>
            <TopBalancebar />
            <Tree mode = {mode} handleMode = {handleMode} />
            <Itembar handleMode = {handleMode} />
            <BottomNavbar />
        </div>
    )
}

export default GrowingFarmPage;