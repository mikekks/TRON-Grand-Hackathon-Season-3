import React, { useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import useWalletStore from "../../store/WalletStore";
import usePinStore from "../../store/PinStore";
{/*
==============================
(1031)Wallet Page에서 세번째 컴포넌트 페이지인 니모닉 컴포넌트입니다.
==============================
*/}
const Wallet02Mnemonic = ({ choosePage }) => {

    // 이 컴포넌트에서는 '니모닉 보기 UI(1)', '니모닉 검사(2)'의 두 UI를 표시합니다.
    // checked state를 통해 표시 조건에 따라 각 UI를 표시합니다.
    // checked == false 인 경우, 니모닉 보기 UI 표시
    // checked == true 인 경우, 니모닉 검사 UI 표시
    const [checked, setChecked] = useState(false);
    const mnemonic = useRef(['mne01', 'mne02', 'mne03', 'mne04', 'mne05', 'mne06', 'mne07', 'mne08', 'mne09', 'mne10', 'mne11', 'mne12']);

    const { WalletCreated } = useWalletStore(state => state); // 지갑이 만들어졌는지에 대한 여부 상태
    const { pinNumber } = usePinStore(state => state); // 핀넘버 상태(상태에 대한 문제가 있어 해결중)

    const CompleteWalletCreate = () => { // 지갑 생성이 완료되면
        WalletCreated();
        choosePage("page"); // 지갑 페이지로 전환
    }

    // 이 컴포넌트는 하단의 버튼을 관리한다.
    const MnemonicChecked = () => {
        // 만약 니모닉 보기가 이루어지지 않았다면
        if (!checked) {
            return (
                // 니모닉 확인 버튼을 누르면 니모닉 검사 UI로 변경된다.
                <button disabled style={{ maxWidth: "300px", width: "100%", height: "50px", borderRadius: "25px", border: "none", backgroundColor: "#ffffff", boxShadow: "0px 5px 0px #CB9C00" }}>I have stored the phrase safely.</button>
            )
        }
        // 만약 니모닉 보기가 이루어졌다면
        else {
            return (
                // 확인 후 DONE 버튼 클릭하면 Wallet Tab UI로 이동한다.
                // 니모닉 검사 조건은 이후에 추가토록 한다.
                <button onClick={() => CompleteWalletCreate()} style={{ maxWidth: "300px", width: "100%", height: "50px", borderRadius: "25px", border: "none", backgroundColor: "#ffffff", boxShadow: "0px 5px 0px #CB9C00" }}>I have stored the phrase safely.</button>
            )
        }
    }

    const MnemonicCopy = () => { // 니모닉을 클립보드에 복사
        let temp = mnemonic.join(" ");
        navigator.clipboard.writeText(temp);
    }

    const MnemonicJSON = () => { // 니모닉을 JSON 파일로 다운로드
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(mnemonic)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "mnemonic.json";
        link.click();
    }

    return (
        <div>
            <br />
            <Container>
                <Row>
                    <Col>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <p style={{ fontSize: "24px" }}>Mnemonic</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{ margin: "auto", backgroundColor: "white", borderRadius: "15px", paddingTop: "15px", paddingBottom: "15px", maxWidth: "300px", boxShadow: "0px 5px 0px #CB9C00" }}>
                            <p style={{ color: "red", fontSize: "12px", paddingLeft: "15px", paddingRight: "15px", wordWrap: "break-word" }}>The only way to recover your wallet is for you to store the following phrases in a safe place.</p>
                            <p className="Mnemonic_p">1  <span className="Mnemonic_span">{mnemonic[0]}</span></p>
                            <p className="Mnemonic_p">2  <span className="Mnemonic_span">{mnemonic[1]}</span></p>
                            <p className="Mnemonic_p">3  <span className="Mnemonic_span">{mnemonic[2]}</span></p>
                            <p className="Mnemonic_p">4  <span className="Mnemonic_span">{mnemonic[3]}</span></p>
                            <p className="Mnemonic_p">5  <span className="Mnemonic_span">{mnemonic[4]}</span></p>
                            <p className="Mnemonic_p">6  <span className="Mnemonic_span">{mnemonic[5]}</span></p>
                            <p className="Mnemonic_p">7  <span className="Mnemonic_span">{mnemonic[6]}</span></p>
                            <p className="Mnemonic_p">8  <span className="Mnemonic_span">{mnemonic[7]}</span></p>
                            <p className="Mnemonic_p">9  <span className="Mnemonic_span">{mnemonic[8]}</span></p>
                            <p className="Mnemonic_p">10 <span className="Mnemonic_span">{mnemonic[9]}</span></p>
                            <p className="Mnemonic_p">11 <span className="Mnemonic_span">{mnemonic[10]}</span></p>
                            <p className="Mnemonic_p">12 <span className="Mnemonic_span">{mnemonic[11]}</span></p>
                        </div>
                    </Col>
                </Row>
                <br />
                {/* 예비 공간 */}
                <Row>
                    <Col>
                        <div style={{ margin: "auto", maxWidth: "300px" }}>
                            <button onClick={() => MnemonicCopy()} style={{ width: "100%", maxWidth: "100px", marginRight: "40px", borderRadius: "15px", backgroundColor: "white", border: "none", boxShadow: "0px 5px 0px #CB9C00" }}>Copy</button>
                            <button onClick={() => MnemonicJSON()} style={{ width: "100%", maxWidth: "100px", marginLeft: "40px", borderRadius: "15px", backgroundColor: "white", border: "none", boxShadow: "0px 5px 0px #CB9C00" }}>JSON</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ display: "flex", marginLeft: "40px", marginTop: "20px" }}>
                        <div style={{ margin: "auto", maxWidth: "300px" }}>
                            <Form>
                                <Form.Check
                                    inline
                                    label="I have kept my mnemonic syntax in a safe place."
                                    name="group1"
                                    type="checkbox"
                                    id="inline-checkbox-1"
                                    style={{ fontSize: "12px", color: "#666666" }}
                                    checked={checked.current}
                                    onChange={() => setChecked(!checked)}
                                />
                            </Form>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        {/* 하단의 버튼은 이곳에서 따로 관리한다. 체크박스를 클릭하면 아래 버튼이 활성화된다. */}
                        <MnemonicChecked />
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Wallet02Mnemonic;