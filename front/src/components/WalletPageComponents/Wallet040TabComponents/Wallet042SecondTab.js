import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEthereum, FaCopy } from "react-icons/fa";
import { MdOutlineFileDownload, MdNorthEast, MdOutlineSettings } from "react-icons/md";
import { CgArrowsExchangeAlt } from "react-icons/cg";
{/*
==============================
(1031)WALLET Tab 컴포넌트입니다.
==============================
*/}
// WALLET Tab
const SecondTab = () => {
    return (
        <div className="SecondTab">
            <div className="Wallet">
                <p className="WalletAllBalance">1.594 ETH</p> {/* 코인(토큰) 보유량 */}
                <div className="WalletAccountContainer">
                    {/* address 표시란 */}
                    <span>0xab...1234</span><span className="WalletAccountCopy"><FaCopy /></span>
                </div>
            </div>
            <br/>
            <div style={{marginLeft: "30px", marginRight: "30px"}}>
                <Container>
                    <Row>
                        <Col>
                            {/* RECEIVE 버튼 */}
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><MdOutlineFileDownload size="24px"/></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight:"bold" }}>RECEIVE</div>
                            </div>
                        </Col>
                        <Col>
                            {/* SEND 버튼 */}
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><MdNorthEast size="24px"/></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight:"bold"  }}>SEND</div>
                            </div>
                        </Col>
                        <Col>
                            {/* TRADE 버튼 */}
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><CgArrowsExchangeAlt size="24px"/></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight:"bold"  }}>TRADE</div>
                            </div>
                        </Col>
                        <Col>
                            {/* SETTINGS 버튼 */}
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><MdOutlineSettings size="24px"/></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight:"bold"  }}>SETTINGS</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <hr className="WalletBodyhr" />

            <div className="Wallet">
                <Container className="WalletContainer">
                    <Row className="WalletRow">
                        <Col><FaEthereum style={{ marginRight: "10px" }} />AAA</Col> {/* 토큰(코인)명 */}
                        <Col className="WalletBalance">5.72</Col> {/* 토큰(코인) 보유량 */}
                    </Row>
                    <hr className="Wallethr" />
                    <Row className="WalletRow">
                        <Col>BBB</Col> {/* 토큰(코인)명 */}
                        <Col className="WalletBalance">0</Col> {/* 토큰(코인) 보유량 */}
                    </Row>
                    <hr className="Wallethr" />
                    <Row className="WalletRow">
                        <Col>CCC</Col> {/* 토큰(코인)명 */}
                        <Col className="WalletBalance">0</Col> {/* 토큰(코인) 보유량 */}
                    </Row>
                </Container>
            </div>
            <div className="Wallet">
                <Container className="WalletContainer">
                    <Row className="WalletRow">
                        {/* NFT 아이콘 + NFT 이름 + NFT 번호 */}
                        <Col><FaEthereum style={{ marginRight: "10px" }} />NFT <span style={{ fontSize: "8px", color: "#999999" }}>#123456</span></Col>
                        <Col className="WalletBalance">$123</Col> {/* 가격? 가치? */}
                    </Row>
                </Container>
            </div>
        </div >
    );
};
export default SecondTab;