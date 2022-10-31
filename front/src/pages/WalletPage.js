import React, { useState } from "react";
import Wallet01Select from "../components/WalletPageComponents/Wallet01Select";
import Wallet02Create from "../components/WalletPageComponents/Wallet02Create";
import Wallet03Mnemonic from "../components/WalletPageComponents/Wallet03Mnemonic";
import Wallet04Tab from "../components/WalletPageComponents/Wallet04Tab";

{/*
==============================
(1031)지갑 페이지입니다.
Todo list
- 뒤로가기
- 니모닉 처음에 가리기
- 비밀번호 검증할때 조건 추가하고 확인 가능하게 하기
- 기타 스타일 수정
==============================
*/}

const WalletPage = () => {

    // Wallet Page 하위의 컴포넌트 순서 상태를 관리하는 hook
    // 지갑 선택(1) -> 지갑 생선(2) -> 지갑 니모닉(3) -> 지갑 페이지(4)의 순서로 state가 관리된다.
    const [page, setPage] = useState(1);

    // 하위 컴포넌트들로부터 특정 이벤트 발생시 choosePage(int)가 실행되고, 이 int의 값에 따라 페이지가 변경된다.
    // Flow 상으로 페이지가 뒤로 가는 것은 아직 구현하지 않은 상태이며, 이는 이후 뒤로가기 버튼이 구현된 이후에 추가한다.
    const choosePage = (pg) => {
        setPage(pg);
    }

    // 페이지에서 표시할 컴포넌트를 정한다. 이는 상단의 'page' state 값으로 정한다.
    const WalletPages = () => {
        switch(page) {
            case 1:
                return (<Wallet01Select choosePage = {choosePage}/>);
            case 2:
                return (<Wallet02Create choosePage = {choosePage}/>);
            case 3:
                return (<Wallet03Mnemonic choosePage = {choosePage}/>);
            case 4:
                return (<Wallet04Tab />);
            default:
                break;
        }
    }
    // 각 컴포넌트마다 존재하는 choosePage는 커스텀된 prop전달함수이며, 자식 컴포넌트로부터 값(또는 함수 실행 이벤트)을 받게 된다.
    // 참고: https://blog.devgenius.io/how-to-pass-data-from-child-to-parent-in-react-33ed99a90f43

    // Wallet Page
    return (
        <div className="WalletBackground">
            <WalletPages />
        </div>
    )
}

export default WalletPage;