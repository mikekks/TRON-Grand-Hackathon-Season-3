import React, { useState } from "react";
import BottomNavbar from "../components/features/GlobalFeatures/BottomNavbar";
import GrowingItembar from "../components/features/GrowingFarmComponents/GrowingItembar";
// import Itembar from "../components/features/GlobalFeatures/Itembar";
import TopBalancebar from "../components/features/GlobalFeatures/TopBalancebar";
import InteractionMenu from "../components/features/GrowingFarmComponents/InteractionMenu";
import Tree from "../components/features/GrowingFarmComponents/Tree";
import LoadingScreen from "../components/features/GlobalFeatures/LoadingScreen";

const GrowingFarmPage = () => {
    
    const [mode, setMode] = useState("mush");
    
    const handleMode = (value) => {
        setMode(value);
    }

    return (
        <div>
            <TopBalancebar />
            <Tree mode = {mode} handleMode = {handleMode} />
            <InteractionMenu />
            <GrowingItembar handleMode = {handleMode} />
            <BottomNavbar />
        </div>
    )
}

export default GrowingFarmPage;