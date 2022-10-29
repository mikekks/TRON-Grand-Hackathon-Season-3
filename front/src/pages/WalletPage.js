import React from "react";
import Tabs from "../components/WalletTabComponent/Tabs";
// import WalletSwitch from "../components/WalletSwitch";

const WalletPage = () => {
    return(
        <div className="WalletBackground">
            {/* <WalletSwitch /> */}
            <Tabs />
        </div>
    )
}

export default WalletPage;