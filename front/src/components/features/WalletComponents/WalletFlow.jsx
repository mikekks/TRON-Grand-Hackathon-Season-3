import React, { useState } from "react";
import WalletCreate from "./WalletOTPPIN";
import WalletMnemonic from "./WalletMnemonic";
import WalletTab from "./WalletTab";

const WalletFlow = () => {

    const [page, setPage] = useState("page");

    const choosePage = (pg) => {
        setPage(pg);
    }

    switch(page) {
        case "page":
            return (<WalletTab choosePage = {choosePage}/>);
        case "page2_1":
            return (<WalletCreate choosePage = {choosePage}/>);
        case "page2_2":
            return (<WalletMnemonic choosePage = {choosePage}/>);
        // case "page2_3":
        // case 4:
        //     return (<Wallet04Tab />);
        default:
            break;
    }
}

export default WalletFlow;