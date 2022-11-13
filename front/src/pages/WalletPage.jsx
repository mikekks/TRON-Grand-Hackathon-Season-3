import React, { useState } from "react";
import GoBackButton from "../components/features/GlobalFeatures/GoBackButton";
import WalletFlow from "../components/features/WalletComponents/WalletFlow";

const WalletPage = () => {

    const [mode, setMode] = useState("mush");
    
    const handleMode = (value) => {
        setMode(value);
    }
    
    return (
        <div>
            <GoBackButton />
            <WalletFlow />
        </div>
    )
}

export default WalletPage;