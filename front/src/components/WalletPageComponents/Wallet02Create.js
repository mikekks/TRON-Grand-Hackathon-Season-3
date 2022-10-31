import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
{/*
==============================
(1031)Wallet Page에서 두번째 컴포넌트 페이지인 지갑 생성 컴포넌트입니다.
==============================
*/}
const Wallet02Create = ({ choosePage }) => {

    // 이 컴포넌트에서는 '지갑 생성을 위한 정보 입력 UI(1)', '지갑 생성 완료 UI(2)'의 두 UI를 표시합니다.
    // created의 state를 통해 표시 조건에 따라 각 UI를 표시합니다.
    // created == false 인 경우, 지갑 생성을 위한 정보 입력 UI 표시
    // created == true 인 경우, 지갑 생성 완료 UI 표시
    const [created, setCreated] = useState(false);

    // 이 컴포넌트는 하단의 버튼을 관리한다.
    const WalletCreated = () => {
        // 만약 지갑이 생성되지 않았다면
        if (!created) {
            return (
                // Create Wallet 버튼을 클릭하면 지갑 생성을 위한 정보 입력이 완료된 것으로 간주합니다.
                // 이 때, created state를 변경하여 컴포넌트 UI를 변경합니다.
                <button onClick={() => setCreated(true)} style={{ width: "100%", height: "50px", borderRadius: "10px", border: "none", backgroundColor: "#ffff55" }}>Create Wallet</button>
            )
        }
        // 만약 지갑이 생성되었다면
        else {
            return (
                // Back Up Now 버튼을 클릭하면 3번째 컴포넌트 페이지인 니모닉 페이지로 이동합니다. 
                <button onClick={() => choosePage(3)} style={{ width: "100%", height: "50px", borderRadius: "10px", border: "none", backgroundColor: "#ffff55" }}>Back Up Now</button>
            )
        }
    }

    return (
        <div>
            <Container>
                {/* 만약 지갑 생성이 아직 되지 않았다면: 지갑 생성을 위한 정보를 입력한다. */}
                {!created ?
                    <>
                        <br />
                        <Row>
                            <Col>
                                {/* 지갑 이름 */}
                                <TextField id="outlined-basic" label="Wallet Name" variant="outlined" style={{ backgroundColor: "white", borderRadius: "5px", width: "100%" }} />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                {/* 비밀번호 입력 */}
                                <TextField id="outlined-basic" label="Set a Password" variant="outlined" type="password" style={{ backgroundColor: "white", borderRadius: "5px", width: "100%" }} />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                {/* 비밀번호 재입력 */}
                                <TextField id="outlined-basic" label="Re-enter Password" variant="outlined" type="password" style={{ backgroundColor: "white", borderRadius: "5px", width: "100%" }} />
                            </Col>
                        </Row>
                    </>
                    // 만약 지갑 생성이 완료되었다면: 지갑 생성 완료 UI를 표시한다.
                    :
                    <>
                        {/* 정보 생성 완료 UI가 표시될 곳 */}
                    </>
                }
                <br />
                <Row>
                    <Col>
                        {/* 하단의 버튼은 이곳에서 관리한다. */}
                        <WalletCreated />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Wallet02Create;