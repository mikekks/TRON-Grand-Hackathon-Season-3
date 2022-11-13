import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEthereum } from "react-icons/fa";
{/*
==============================
(1031)SPENDING Tab 컴포넌트입니다.
==============================
*/}
// SPENDING Tab
const WalletTabSpending = () => {
    return (
        <div className="FirstTab">

            <div className="SpendingAccount">
                <p className="SpendingAccountTitle">Spending Account</p>
                <Container className="SpendingAccountContainer">
                    <Row className="SpendingAccountRow">
                        <Col><FaEthereum style={{marginRight:"10px"}}/>AAA</Col> {/* 토큰(코인)명 */}
                        <Col className="SpendingAccountBalance">5.72</Col> {/* 토큰(코인) 보유량 */}
                    </Row>
                    <hr className="SpendingAccounthr"/>
                    <Row className="SpendingAccountRow">
                        <Col>BBB</Col> {/* 토큰(코인)명 */}
                        <Col className="SpendingAccountBalance">0</Col> {/* 토큰(코인) 보유량 */}
                    </Row>
                    <hr className="SpendingAccounthr"/>
                    <Row className="SpendingAccountRow">
                        <Col>CCC</Col> {/* 토큰(코인)명 */}
                        <Col className="SpendingAccountBalance">0</Col> {/* 토큰(코인) 보유량 */}
                    </Row>
                    {/* 이후에 더 추가될 수 있도록 바꾸는 것도 좋을 것 같습니다. */}
                </Container>
            </div>

            {/* Transfer button */}
            <button className="FirstTabTransferbtn">TRANSFER</button>
            <div>
                <Container>
                    <Row>
                        <Col>dasdfasdfasdfasdf</Col>
                        <Col>dasdfasdfasdfasdf</Col>
                        <Col>dasdfasdfasdfasdf</Col>
                        <Col>dasdfasdfasdfasdf</Col>
                        <Col>dasdfasdfasdfasdf</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};
export default WalletTabSpending;