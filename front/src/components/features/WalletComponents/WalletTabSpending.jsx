import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEthereum } from "react-icons/fa";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Mush02 from '../../../assets/mush02.png';
import Spore from '../../../assets/spore.png';
import { NavLink } from "react-router-dom";

{/*
==============================
(1031)SPENDING Tab 컴포넌트입니다.
==============================
*/}
// SPENDING Tab
const WalletTabSpending = () => {

    const [open, setOpen] = useState(false); // 모달 여닫기를 관리하는 상태

    const [value, setValue] = useState("");

    const handleClose = () => setOpen(false); // 모달 닫는 함수
    const handleOpen = () => setOpen(true); // 모달 여는 함수

    const handleOpenModal = (val) => {
        handleOpen();
        setValue(val);
    }

    const ItemMenu = (val) => {
        if (val == "mush") {
            return (
                <>
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Mushroom</span>
                        <button className="WalletModalCloseButton" onClick={() => handleClose()}>X</button>
                    </div>
                    <br />
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <img src={Mush02} style={{width:"50%"}}/>
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <button className="ItemMenuButtonStyleOne">DECOMPOSITION</button>
                        <NavLink to="/staking">
                            <button className="ItemMenuButtonStyleTwo">STAKING</button>
                        </NavLink>
                    </div>
                    <br />
                </>
            )
        }
        else if (val == "spore") {
            return (
                <>
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Spore</span>
                        <button className="WalletModalCloseButton" onClick={() => handleClose()}>X</button>
                    </div>
                    <br />
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <img src={Spore} style={{width:"50%"}}/>
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <NavLink to="/growing">
                            <button className="ItemMenuButtonStyleOne">PLANT</button>
                        </NavLink>
                        {/* <button className="ItemMenuButtonStyleTwo">STAKING</button> */}
                    </div>
                    <br/>
                </>
            )
        }
        else if (val == "thief") {
            return (
                <>
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Thief</span>
                        <button className="WalletModalCloseButton" onClick={() => handleClose()}>X</button>
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <NavLink to="/steal">
                            <button className="ItemMenuButtonStyleOne">STEAL</button>
                        </NavLink>
                        {/* <button className="ItemMenuButtonStyleTwo">STAKING</button> */}
                    </div>
                    <br/>
                </>
            )
        }
    }

    const MushroomMenu = () => {

    }

    const ItemModal = () => {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                disableAutoFocus={true}
            >
                <Box className="WalletModalBox">
                    {ItemMenu(value)}
                </Box>
            </Modal>
        )
    }

    return (
        <div className="FirstTab">

            <div className="SpendingAccount">
                <p className="SpendingAccountTitle">Spending Account</p>
                <Container className="SpendingAccountContainer">
                    <Row className="SpendingAccountRow">
                        <Col><FaEthereum style={{ marginRight: "10px" }} />AAA</Col> {/* 토큰(코인)명 */}
                        <Col className="SpendingAccountBalance">5.72</Col> {/* 토큰(코인) 보유량 */}
                    </Row>
                    <hr className="SpendingAccounthr" />
                    <Row className="SpendingAccountRow">
                        <Col>BBB</Col> {/* 토큰(코인)명 */}
                        <Col className="SpendingAccountBalance">0</Col> {/* 토큰(코인) 보유량 */}
                    </Row>
                    <hr className="SpendingAccounthr" />
                    <Row className="SpendingAccountRow">
                        <Col>CCC</Col> {/* 토큰(코인)명 */}
                        <Col className="SpendingAccountBalance">0</Col> {/* 토큰(코인) 보유량 */}
                    </Row>
                    {/* 이후에 더 추가될 수 있도록 바꾸는 것도 좋을 것 같습니다. */}
                </Container>
            </div>

            {/* Transfer button */}
            <button className="FirstTabTransferbtn">TRANSFER</button>

            <hr className="WalletBodyhr" />

            {/* Item Inventory */}
            <div className="SpendingAccount">
                <p className="SpendingAccountTitle">Inventory</p>
                <Container>
                    <Row>
                        <Col className="InventoryCol" style={{ maxWidth: "50%" }}>
                            <div className="InventoryContainer" onClick={() => handleOpenModal("mush")}>
                                <div className="InventoryElement">
                                    <img src={Mush02} style={{ width: "80%" }} />
                                </div>
                            </div>
                        </Col>
                        <Col className="InventoryCol" style={{ maxWidth: "50%" }}>
                            <div className="InventoryContainer" onClick={() => handleOpenModal("spore")}>
                                <div className="InventoryElement">
                                    <img src={Spore} style={{ width: "80%" }} />
                                </div>
                            </div>
                        </Col>
                        <Col className="InventoryCol" style={{ maxWidth: "50%" }}>
                            <div className="InventoryContainer" onClick={() => handleOpenModal("thief")}>
                                <div className="InventoryElement">
                                    Image
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <ItemModal />
        </div>
    );
};
export default WalletTabSpending;