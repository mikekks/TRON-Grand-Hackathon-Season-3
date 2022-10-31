import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaWallet, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
{/*
==============================
(1031)하단바 컴포넌트입니다.

isActive가 뭐죠: NavLink에서 함수 className을 사용하면 링크의 active 상태가 매개변수로 전달된다.
참고: https://v5.reactrouter.com/web/api/NavLink
==============================
*/}
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