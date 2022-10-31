import React from "react";
{/*
==============================
(1031)Wallet Page에서 첫번째 컴포넌트 페이지인 지갑 선택 컴포넌트입니다.
CreateWallet 버튼을 클릭하면 2번째 컴포넌트 페이지인 지갑 생성 페이지로 이동합니다.

아직 Import Wallet은 구현되지 않은 상황입니다.
==============================
*/}
const Wallet01Select = ({ choosePage }) => {
    return (
        <div>
            <button className="CreateWalletButton" onClick={() => choosePage(2)}>Create Wallet</button>
            <button className="ImportWalletButton">Import Wallet</button>
        </div>
    )
}

export default Wallet01Select;