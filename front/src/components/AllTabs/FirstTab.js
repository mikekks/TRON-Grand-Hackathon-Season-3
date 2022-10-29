import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEthereum } from "react-icons/fa";

// SPENDING Tab
const FirstTab = () => {
    return (
        <div className="FirstTab">

            <div className="SpendingAccount">
                <p className="SpendingAccountTitle">Spending Account</p>
                <Container className="SpendingAccountContainer">
                    <Row className="SpendingAccountRow">
                        <Col><FaEthereum style={{marginRight:"10px"}}/>AAA</Col>
                        <Col className="SpendingAccountBalance">5.72</Col>
                    </Row>
                    <hr className="SpendingAccounthr"/>
                    <Row className="SpendingAccountRow">
                        <Col>BBB</Col>
                        <Col className="SpendingAccountBalance">0</Col>
                    </Row>
                    <hr className="SpendingAccounthr"/>
                    <Row className="SpendingAccountRow">
                        <Col>CCC</Col>
                        <Col className="SpendingAccountBalance">0</Col>
                    </Row>
                </Container>
            </div>

            <button className="FirstTabTransferbtn">TRANSFER</button>
        </div>
    );
};
export default FirstTab;