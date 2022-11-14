import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEthereum, FaCopy } from "react-icons/fa";
import { MdOutlineFileDownload, MdNorthEast, MdOutlineSettings } from "react-icons/md";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Spore from '../../../assets/spore.png'
import Mush02 from '../../../assets/mush02.png';
{/*
==============================
(1031)WALLET Tab 컴포넌트입니다.
==============================
*/}

// 임시 address
let address = "0xec5656a2fb4CF5A735dE5680361E0292D0274B6c";

// 이 탭에서 필요한 정보
{/*
(추후 구현)0. Pin(실행 후 최초 1회 핀번호 입력 및 확인)
1. address
2. address가 갖고 있는 토큰(코인) balance
3. 소유한 NFT 목록
*/}

// WALLET Tab
const WalletTabWallet = () => {
    return (
        <div className="SecondTab">
            <div className="Wallet">
                <p className="WalletAllBalance">1.594 ETH</p> {/* 코인(토큰) 보유량 */}
                <div className="WalletAccountContainer" onClick={() => { navigator.clipboard.writeText("0xab...1234") }}>
                    {/* address 표시란 */}
                    <span>{address.substr(0, 4)}...{address.substr(38, 41)}</span><span className="WalletAccountCopy"><FaCopy /></span>
                </div>
            </div>
            <br />
            <div style={{ marginLeft: "30px", marginRight: "30px" }}>
                <Container>
                    <Row>
                        <Col>
                            {/* RECEIVE 버튼 */}
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><MdOutlineFileDownload size="24px" /></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight: "bold" }}>RECEIVE</div>
                            </div>
                        </Col>
                        <Col>
                            {/* SEND 버튼 */}
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><MdNorthEast size="24px" /></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight: "bold" }}>SEND</div>
                            </div>
                        </Col>
                        <Col>
                            {/* TRADE 버튼 */}
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><CgArrowsExchangeAlt size="24px" /></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight: "bold" }}>TRADE</div>
                            </div>
                        </Col>
                        <Col>
                            {/* SETTINGS 버튼 */}
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><MdOutlineSettings size="24px" /></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight: "bold" }}>SETTINGS</div>
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

            <hr className="WalletBodyhr" />

            {/* Item Inventory */}
            <div className="SpendingAccount">
                <p className="SpendingAccountTitle">Inventory</p>
                <Container>
                    <Row>
                        <Col className="InventoryCol" style={{ maxWidth: "50%" }}>
                            <div className="InventoryContainer">
                                <div className="InventoryElement">
                                    Mushroom Image
                                </div>
                            </div>
                        </Col>
                        <Col className="InventoryCol" style={{ maxWidth: "50%" }}>
                            <div className="InventoryContainer">
                                <div className="InventoryElement">
                                    poja Image
                                </div>
                            </div>
                        </Col>
                        <Col className="InventoryCol" style={{ maxWidth: "50%" }}>
                            <div className="InventoryContainer">
                                <div className="InventoryElement">
                                    Image
                                </div>
                            </div>
                        </Col>
                        <Col className="InventoryCol" style={{ maxWidth: "50%" }}>
                            <div className="InventoryContainer">
                                <div className="InventoryElement">
                                    Image
                                </div>
                            </div>
                        </Col>
                        <Col className="InventoryCol" style={{ maxWidth: "50%" }}>
                            <div className="InventoryContainer">
                                <div className="InventoryElement">
                                    Image
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};
export default WalletTabWallet;