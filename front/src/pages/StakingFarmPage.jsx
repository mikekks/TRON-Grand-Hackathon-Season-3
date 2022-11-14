import React, { useState } from "react";
import BottomNavbar from "../components/features/GlobalFeatures/BottomNavbar";
// import Itembar from "../components/features/GlobalFeatures/Itembar";
import StakingItembar from "../components/features/StakingComponents/StakingItembar";
import TopBalancebar from "../components/features/GlobalFeatures/TopBalancebar";
import StakingHouse from "../components/features/StakingComponents/StakingHouse";
import useStakingStore from "../stores/StakingStore";

const StakingFarmPage = () => {

    const[mode, setMode] = useState("ready");

    const { StakingState, ChangeStakingState } = useStakingStore(state => state);

    const handleMode = (val) => {
        // setMode(val);
        ChangeStakingState(val);
    }

    return (
        <div>
            <TopBalancebar />
            <StakingHouse StakingState={StakingState} handleMode={handleMode} />
            <StakingItembar StakingState={StakingState} handleMode={handleMode} />
            <BottomNavbar />
        </div>
    )
}

export default StakingFarmPage;