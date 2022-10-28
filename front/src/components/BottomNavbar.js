import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaWallet, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
    return (
        <div className="BottomNavbar">
            <Container style={{height: "100%"}}>
                <Row style={{height: "100%", alignItems: "center"}}>
                    <Col><NavLink to="/" className={({ isActive }) => (isActive ? "hll-on" : "hll-off")}><FaHome size="24" /></NavLink></Col>
                    <Col><NavLink to="/wallet" className={({ isActive }) => (isActive ? "hll-on" : "hll-off")}><FaWallet size="24" /></NavLink></Col>
                    <Col>{/* 3rd icon */}</Col>
                    <Col>{/* 4th icon */}</Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomNavbar;