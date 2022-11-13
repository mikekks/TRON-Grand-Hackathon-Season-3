import React, { useState } from "react";
import GoBackButton from "../components/features/GlobalFeatures/GoBackButton";
import WalletFlow from "../components/features/WalletComponents/WalletFlow";

const WalletPage = () => {

    return (
        <div>
            <GoBackButton />
            <WalletFlow />
        </div>
    )
}

export default WalletPage;