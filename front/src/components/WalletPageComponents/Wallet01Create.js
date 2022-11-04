import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PinInput } from 'react-input-pin-code';

import usePinStore from "../../store/PinStore";

{/*
==============================
(1031)Wallet Page에서 두번째 컴포넌트 페이지인 지갑 생성 컴포넌트입니다.
==============================
*/}
const Wallet01Create = ({ choosePage }) => {

    // 이 컴포넌트에서는 '지갑 생성을 위한 정보 입력 UI(1)', '지갑 생성 완료 UI(2)'의 두 UI를 표시합니다.
    // created의 state를 통해 표시 조건에 따라 각 UI를 표시합니다.
    // created == false 인 경우, 지갑 생성을 위한 정보 입력 UI 표시
    // created == true 인 경우, 지갑 생성 완료 UI 표시
    const [created, setCreated] = useState(false);
    const [valuess, setValues] = useState(['', '', '', '']);
    const [confirmvalues, setConfirmValues] = useState(['', '', '', '']);

    const { pinNumber, PinCreated } = usePinStore(state => state);
    
    let cnt=0;
    function ValueSetting(x){
        let temp = valuess;
        if(cnt>=0 && cnt<=3) {
            if(cnt>=0) {
                if(cnt>0 && x=='<') {
                    temp[cnt-1]='';
                    cnt--;
                }
                else if(cnt==0 && x=='<'){
                    temp[0]='';
                    cnt=0;
                }
                else {
                    temp[cnt]=x;
                    cnt++;
                }
            }
        }
        console.log(x);
        console.log(cnt);
        console.log(temp);
        setValues(temp);
    }

    function InputComplete(){
        console.log("complete");
        setCreated(!created);
    }

    function ConfirmComplete(){
        console.log("Confirm complete");
        PinCreated(confirmvalues);
        console.log(confirmvalues);
        console.log(pinNumber);
        choosePage("page2_2");
    }

    useEffect(() => {
        console.log("Values changed");
    },[valuess]);

    return (
        <div>
            <Container>
                {/* 만약 지갑 생성이 아직 되지 않았다면: 지갑 생성을 위한 정보를 입력한다. */}
                {!created ?
                    <>
                        <br />
                        <Row>
                            <Col>
                            <span>Set your PIN number</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "40px" }}>
                                    <PinInput
                                        values={valuess}
                                        onChange={(value, index, valuess) => setValues(valuess)}
                                        mask={true}
                                        placeholder=""
                                        size="lg"
                                        borderColor="rgb(255,255,255)"
                                        style={{ width: "50px" }}
                                        onComplete={() => InputComplete()}
                                        autoFocus={true}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col><button className="NumberButtom" onClick={() => ValueSetting('1')}>1</button></Col>
                            <Col><button className="NumberButtom">2</button></Col>
                            <Col><button className="NumberButtom">3</button></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col><button className="NumberButtom">4</button></Col>
                            <Col><button className="NumberButtom">5</button></Col>
                            <Col><button className="NumberButtom">6</button></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col><button className="NumberButtom">7</button></Col>
                            <Col><button className="NumberButtom">8</button></Col>
                            <Col><button className="NumberButtom">9</button></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col></Col>
                            <Col><button className="NumberButtom">0</button></Col>
                            <Col><button className="NumberButtom" onClick={() => ValueSetting('<')}>&lt;</button></Col>
                        </Row>
                    </>
                    // 만약 지갑 생성이 완료되었다면: 지갑 생성 완료 UI를 표시한다.
                    :
                    <>
                        <br />
                        <Row>
                            <Col>
                            <span>Confirm your PIN number</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "40px" }}>
                                    <PinInput
                                        values={confirmvalues}
                                        onChange={(value, index, confirmvalues) => setConfirmValues(confirmvalues)}
                                        mask={true}
                                        placeholder=""
                                        size="lg"
                                        borderColor="rgb(255,255,255)"
                                        style={{ width: "50px" }}
                                        onComplete={() => ConfirmComplete()}
                                        autoFocus={true}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col><button className="NumberButtom" onClick={() => ValueSetting('1')}>1</button></Col>
                            <Col><button className="NumberButtom">2</button></Col>
                            <Col><button className="NumberButtom">3</button></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col><button className="NumberButtom">4</button></Col>
                            <Col><button className="NumberButtom">5</button></Col>
                            <Col><button className="NumberButtom">6</button></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col><button className="NumberButtom">7</button></Col>
                            <Col><button className="NumberButtom">8</button></Col>
                            <Col><button className="NumberButtom">9</button></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col></Col>
                            <Col><button className="NumberButtom">0</button></Col>
                            <Col><button className="NumberButtom" onClick={() => ValueSetting('<')}>&lt;</button></Col>
                        </Row>
                        <br />
                    </>
                }
            </Container>
        </div>
    )
}

export default Wallet01Create;