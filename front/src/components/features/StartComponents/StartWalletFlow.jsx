import React, { useState } from "react";
import StartMushroomMint from "./StartMushroomMint";
import StartWalletMnemonic from "./StartWalletMnemonic";
// import WalletCreate from "./StartWalletOTPPIN";
// import WalletMnemonic from "./StartWalletMnemonic";
import StartWalletOTPPIN from "./StartWalletOTPPIN";
// import WalletTab from "./WalletTab";

const StartWalletFlow = () => {

    const [page, setPage] = useState("page01");

    const choosePage = (pg) => {
        setPage(pg);
    }

    switch(page) {
        case "page01":
            return (<StartWalletOTPPIN choosePage = {choosePage}/>);
        case "page02":
            return (<StartWalletMnemonic choosePage = {choosePage}/>);
        case "page03":
            return (<StartMushroomMint choosePage = {choosePage}/>);
        default:
            break;
    }
}

export default StartWalletFlow;