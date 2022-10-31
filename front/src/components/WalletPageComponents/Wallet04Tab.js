import React, { useState } from "react";
import FirstTab from "./Wallet040TabComponents/Wallet041FirstTab";
import SecondTab from "./Wallet040TabComponents/Wallet042SecondTab";
{/*
==============================
(1031)Wallet Page에서 네번째 컴포넌트 페이지인 지갑 탭 컴포넌트입니다.
==============================
*/}
const Wallet04Tab = () => {

  // 이 컴포넌트에서는 'SPENDING Tab(1)', 'WALLET Tab(2)'의 두 UI를 표시합니다.
  // activeTab state를 통해 표시 조건에 따라 각 UI를 표시합니다.
  // activeTab == tab2(기본값) 인 경우, WALLET Tab UI 표시
  // activeTab == tab1 인 경우, SPENDING Tab UI 표시
  const [activeTab, setActiveTab] = useState("tab2");

  // 탭 이동 버튼 클릭시 activeTab state를 변경하는 함수
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
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
  );
};
export default Wallet04Tab;