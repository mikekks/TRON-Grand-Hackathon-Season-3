import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PinInput } from 'react-input-pin-code';

import usePinStore from "../../store/PinStore";
import WalletPinComponent from "./WalletComponents/WalletPinComponent";

{/*
==============================
(1031)Wallet Page에서 두번째 컴포넌트 페이지인 지갑 생성 컴포넌트입니다.
==============================
*/}
const Wallet01Create = ({ choosePage }) => {

    // 이 컴포넌트에서는 '지갑 생성을 위한 정보 입력 UI(1)', '지갑 생성 완료 UI(2)'의 두 UI를 표시합니다.
    // created의 state를 통해 표시 조건에 따라 각 UI를 표시합니다.
    // created == false 인 경우, 지갑 생성을 위한 정보 입력 UI 표시
    // created == true 인 경우, 지갑 생성 완료 UI 표시
    const [created, setCreated] = useState(false);
    const [pinvalue, setPinvalue] = useState(['', '', '', '']);
    const [confirmpinvalue, setConfirmpinvalue] = useState(['', '', '', '']);

    const handleSetPinValue = (val) => {
        setPinvalue(val);
        setCreated(!created);
    }

    const handleConfirmPinValue = (val) => {
        setConfirmpinvalue(val);
    }

    useEffect(() => {
        if(confirmpinvalue[0]!=''){
            comparePins();
        }
    },[confirmpinvalue]);

    const comparePins = () => {
        let tempVal = pinvalue.join("");
        let tempCon = confirmpinvalue.join("");
        if(tempVal==tempCon) { // 입력 핀과 확인 핀이 같으면
            choosePage("page2_2"); // 니모닉 페이지로
        } else { // 다르면
            setPinvalue(['', '', '', '']);
            setConfirmpinvalue(['', '', '', '']);
            setCreated(!created); // 다시 입력
        }
    }

    return (
        <div>
            <Container>
                {/* 만약 지갑 생성이 아직 되지 않았다면: 지갑 생성을 위한 정보를 입력한다. */}
                {!created ?
                    <>
                        <Row>
                            <Col>
                                <WalletPinComponent sentence="Set your PIN number" pinvalue={handleSetPinValue} />
                            </Col>
                        </Row>
                    </>
                    // 만약 지갑 생성이 완료되었다면: 지갑 생성 완료 UI를 표시한다.
                    :
                    <>
                        <Row>
                            <Col>
                                <WalletPinComponent sentence="Confirm your PIN number" pinvalue={handleConfirmPinValue} />
                            </Col>
                        </Row>
                    </>
                }
            </Container>
        </div>
    )
}

export default Wallet01Create;