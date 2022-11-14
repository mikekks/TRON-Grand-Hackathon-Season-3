import React from "react";
import BottomNavbar from "../components/features/GlobalFeatures/BottomNavbar";
// import Itembar from "../components/features/GlobalFeatures/Itembar";
import StakingItembar from "../components/features/StakingComponents/StakingItembar";
import TopBalancebar from "../components/features/GlobalFeatures/TopBalancebar";
import StakingHouse from "../components/features/StakingComponents/StakingHouse";

const StakingFarmPage = () => {
    return (
        <div>
            <TopBalancebar />
            <StakingHouse />
            <StakingItembar />
            <BottomNavbar />
        </div>
    )
}

export default StakingFarmPage;