import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEthereum, FaCopy } from "react-icons/fa";
import { MdOutlineFileDownload, MdNorthEast, MdOutlineSettings } from "react-icons/md";
import { CgArrowsExchangeAlt } from "react-icons/cg";
// WALLET Tab
const SecondTab = () => {
    return (
        <div className="SecondTab">
            <div className="Wallet">
                <p className="WalletAllBalance">1.594 ETH</p>
                <div className="WalletAccountContainer">
                    <span>0xab...1234</span><span className="WalletAccountCopy"><FaCopy /></span>
                </div>
            </div>
            <br/>
            <div style={{marginLeft: "30px", marginRight: "30px"}}>
                <Container>
                    <Row>
                        <Col>
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><MdOutlineFileDownload size="24px"/></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight:"bold" }}>RECEIVE</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><MdNorthEast size="24px"/></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight:"bold"  }}>SEND</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="SecondTabbtnContainer">
                                <button className="SecondTabbtn"><CgArrowsExchangeAlt size="24px"/></button>
                                <div style={{ color: "black", marginTop: "5px", fontSize: "5px", fontWeight:"bold"  }}>TRADE</div>
                            </div>
                        </Col>
                        <Col>
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
                        <Col><FaEthereum style={{ marginRight: "10px" }} />AAA</Col>
                        <Col className="WalletBalance">5.72</Col>
                    </Row>
                    <hr className="Wallethr" />
                    <Row className="WalletRow">
                        <Col>BBB</Col>
                        <Col className="WalletBalance">0</Col>
                    </Row>
                    <hr className="Wallethr" />
                    <Row className="WalletRow">
                        <Col>CCC</Col>
                        <Col className="WalletBalance">0</Col>
                    </Row>
                </Container>
            </div>
            <div className="Wallet">
                <Container className="WalletContainer">
                    <Row className="WalletRow">
                        <Col><FaEthereum style={{ marginRight: "10px" }} />NFT <span style={{ fontSize: "8px", color: "#999999" }}>#123456</span></Col>
                        <Col className="WalletBalance">$123</Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};
export default SecondTab;