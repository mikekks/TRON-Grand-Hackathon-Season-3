import React from "react";
import { useState } from "react";
import BottomNavbar from "../components/features/GlobalFeatures/BottomNavbar";
// import Itembar from "../components/features/GlobalFeatures/Itembar";
// import StakingItembar from "../components/features/StakingComponents/StakingItembar";
import TopBalancebar from "../components/features/GlobalFeatures/TopBalancebar";
import ThiefCards from "../components/features/ThiefComponents/ThiefCards";
import ThiefImage from "../components/features/ThiefComponents/ThiefImage";
import ThiefNeedText from "../components/features/ThiefComponents/ThiefNeedText";
import ThiefStartButton from "../components/features/ThiefComponents/ThiefStartButton";
import ThiefTitle from "../components/features/ThiefComponents/ThiefTitle";

const ThiefPage = () => {

    const [mode, setMode] = useState("no");
    const [thief, setThief] = useState(true);

    const [amount, setAmount] = useState("");
    const [address, setAddress] = useState("");

    const handleMode = (val) => {
        setMode(val);
    }

    const handleAmount = (val) => {
        setAmount(val);
    }

    const handleAddress = (val) => {
        setAddress(val);
    }

    const thiefMenu = () => {
        if (mode == "no") {
            return (
                <>
                    <ThiefTitle />
                    <ThiefImage />
                    {thief==true ?
                    <ThiefStartButton handleMode={handleMode} handleAmount={handleAmount} handleAddress={handleAddress}/>
                    : <ThiefNeedText />
                    }
                </>
            )
        }
        else if (mode == "yes") {
            return(
                <>
                    <ThiefCards amount={amount} address={address}/>
                </>
            )
        }
    }

    return (
        <div>
            <TopBalancebar />
            {/* <StakingItembar /> */}
            {thiefMenu()}

            <BottomNavbar />
        </div>
    )
}

export default ThiefPage;