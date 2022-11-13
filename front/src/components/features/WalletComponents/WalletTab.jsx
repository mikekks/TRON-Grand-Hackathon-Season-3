import React, { useState } from "react";
// import WalletFirstTab from "../../layouts/WalletLayouts/WalletFirstTab";
// import WalletSecondTab from "../../layouts/WalletLayouts/WalletSecondTab";
// import SecondTab from "../../WalletComponents/Wallet000TabComponents/Wallet00SecondTab";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// import useWalletStore from "../../../store/WalletStore";
import WalletTabSpending from "./WalletTabSpending";
import WalletTabWallet from "./WalletTabWallet";
// import usePinStore from "../../store/PinStore";

{/*
==============================
(1031)Wallet Page에서 네번째 컴포넌트 페이지인 지갑 탭 컴포넌트입니다.
==============================
*/}
const WalletTab = ({ choosePage }) => {

    // 이 컴포넌트에서는 'SPENDING Tab(1)', 'WALLET Tab(2)'의 두 UI를 표시합니다.
    // activeTab state를 통해 표시 조건에 따라 각 UI를 표시합니다.
    // activeTab == tab2(기본값) 인 경우, WALLET Tab UI 표시
    // activeTab == tab1 인 경우, SPENDING Tab UI 표시
    const [activeTab, setActiveTab] = useState("tab1"); // 탭 전환을 관리하는 상태
    const [open, setOpen] = useState(false); // 모달 여닫기를 관리하는 상태

    //   const { walletstatus } = useWalletStore(state => state); // 지갑이 만들어졌는지 관리하는 상태

    const handleClose = () => setOpen(false); // 모달 닫는 함수
    const handleOpen = () => setOpen(true); // 모달 여는 함수

    // 탭 이동 버튼 클릭시 activeTab state를 변경하는 함수
    const handleTab1 = () => {
        setActiveTab("tab1"); // 탭1로 전환
    };
    const handleTab2 = () => {
        setActiveTab("tab2"); // 탭2로 전환
    };

    const SecondTabModal = () => {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                disableAutoFocus={true}
            >
                <Box className="WalletModalBox">
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Set a WALLET</span>
                        <button className="WalletModalCloseButton" onClick={() => handleClose()}>X</button>
                    </div>
                    <br />
                    <div className="WalletModalSelectButton">
                        <button className="WalletModalCreateButton" onClick={() => choosePage("page2_1")}>Create a new wallet</button>
                        <br />
                        <button className="WalletModalImportButton">Import a wallet using Seed Phrase</button>
                    </div>
                    <br />
                </Box>
            </Modal>
        )
    }

    return (
        <>
            <div className="WalletTabs">
                <ul className="nav">
                    {/* SPENDING Tab 버튼 */}
                    <li
                        className={activeTab === "tab1" ? "active" : ""}
                        onClick={handleTab1}
                    >
                        SPENDING
                    </li>
                    {/* WALLET Tab 버튼 */}
                    <li
                        className={activeTab === "tab2" ? "active" : ""}
                        onClick={handleTab2}
                    >
                        WALLET
                    </li>
                </ul>

                <div className="outlet">
                    {activeTab === "tab1" ? <WalletTabSpending /> : <WalletTabWallet />}
                </div>
            </div>
            <SecondTabModal />
        </>
    );
};
export default WalletTab;