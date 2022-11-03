import React, { useState } from "react";
import FirstTab from "./Wallet000TabComponents/Wallet001FirstTab";
import SecondTab from "./Wallet000TabComponents/Wallet002SecondTab";
// import Modal from 'react-bootstrap/Modal';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import useWalletStore from "../../store/WalletStore";
{/*
==============================
(1031)Wallet Page에서 네번째 컴포넌트 페이지인 지갑 탭 컴포넌트입니다.
==============================
*/}
const Wallet00Tab = ({ choosePage }) => {

  // 이 컴포넌트에서는 'SPENDING Tab(1)', 'WALLET Tab(2)'의 두 UI를 표시합니다.
  // activeTab state를 통해 표시 조건에 따라 각 UI를 표시합니다.
  // activeTab == tab2(기본값) 인 경우, WALLET Tab UI 표시
  // activeTab == tab1 인 경우, SPENDING Tab UI 표시
  const [activeTab, setActiveTab] = useState("tab1");
  // const [wallet, setWallet] = useState(false);
  const [open, setOpen] = useState(false);

  const { walletstatus } = useWalletStore(state => state);
  
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  // 탭 이동 버튼 클릭시 activeTab state를 변경하는 함수
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    if (walletstatus == false) {
      handleOpen(); // 지갑 만들기 modal 열기
    }
    else {
      setActiveTab("tab2");
    }
  };

  const SecondTabModal = () => {
    return (
      <Modal
        // keepMounted
        open={open}
        onClose={handleClose}
        disableAutoFocus={true}
        // aria-labelledby="keep-mounted-modal-title"
        // aria-describedby="keep-mounted-modal-description"
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
          <br/>
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
          {/* 탭 컴포넌트는 관리 용이를 위해 Wallet040TabComponents 디렉토리에서 따로 관리합니다. */}
          {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
        </div>
      </div>
      <SecondTabModal />
    </>
  );
};
export default Wallet00Tab;