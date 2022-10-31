import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
{/*
==============================
(1031)Wallet Page에서 세번째 컴포넌트 페이지인 니모닉 컴포넌트입니다.
==============================
*/}
const Wallet03Mnemonic = ({ choosePage }) => {

    // 이 컴포넌트에서는 '니모닉 보기 UI(1)', '니모닉 검사(2)'의 두 UI를 표시합니다.
    // checked state를 통해 표시 조건에 따라 각 UI를 표시합니다.
    // checked == false 인 경우, 니모닉 보기 UI 표시
    // checked == true 인 경우, 니모닉 검사 UI 표시
    const [checked, setChecked] = useState(false);

    // 이 컴포넌트는 하단의 버튼을 관리한다.
    const MnemonicChecked = () => {
        // 만약 니모닉 보기가 이루어지지 않았다면
        if (!checked) {
            return (
                // 니모닉 확인 버튼을 누르면 니모닉 검사 UI로 변경된다.
                <button onClick={() => setChecked(true)} style={{ width: "100%", height: "50px", borderRadius: "10px", border: "none", backgroundColor: "#ffff55" }}>Already Backed Up</button>
            )
        }
        // 만약 니모닉 보기가 이루어졌다면
        else {
            return (
                // 확인 후 DONE 버튼 클릭하면 Wallet Tab UI로 이동한다.
                // 니모닉 검사 조건은 이후에 추가토록 한다.
                <button onClick={() => choosePage(4)} style={{ width: "100%", height: "50px", borderRadius: "10px", border: "none", backgroundColor: "#ffff55" }}>Done</button>
            )
        }
    }

    return (
        <div>
            <br />
            <Container>
                {/* 만약 니모닉 확인 검사가 이루어지지 않았다면 */}
                {!checked
                    ? <>
                        {/* 니모닉을 표시한다. */}
                        <Row>
                            <Col className="Wallet03MnemonicCol">Mnemonic01</Col>
                            <Col className="Wallet03MnemonicCol">Mnemonic02</Col>
                            <Col className="Wallet03MnemonicCol">Mnemonic03</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="Wallet03MnemonicCol">Mnemonic04</Col>
                            <Col className="Wallet03MnemonicCol">Mnemonic05</Col>
                            <Col className="Wallet03MnemonicCol">Mnemonic06</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="Wallet03MnemonicCol">Mnemonic07</Col>
                            <Col className="Wallet03MnemonicCol">Mnemonic08</Col>
                            <Col className="Wallet03MnemonicCol">Mnemonic09</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="Wallet03MnemonicCol">Mnemonic10</Col>
                            <Col className="Wallet03MnemonicCol">Mnemonic11</Col>
                            <Col className="Wallet03MnemonicCol">Mnemonic12</Col>
                        </Row>
                        <br />
                        {/* 예비 공간 */}
                        <Row>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                        </Row>
                    </>
                    // 만약 니모닉 검사가 이루어졌다면: 니모닉 입력 UI를 표시한다.
                    : <>
                        <Row>
                            <Col>
                                <TextField id="outlined-basic" label="Mnemonic" variant="outlined" type="password" style={{ backgroundColor: "white", borderRadius: "5px", width: "100%" }} />
                            </Col>
                        </Row>
                    </>
                }
                <br/>
                <Row>
                    <Col>
                        {/* 하단의 버튼은 이곳에서 따로 관리한다. */}
                        <MnemonicChecked />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Wallet03Mnemonic;