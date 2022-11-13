import React, { useEffect, useState } from "react";
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WalletPinComponent = ({ sentence, pinvalue }) => {

    const [pin, setPin] = useState(['', '', '', '']);
    const [cnt, setCnt] = useState(0);

    useEffect(() => {
        if (cnt == 4) {
            pinvalue(pin);
            setPin(['', '', '', '']);
            setCnt(0);
        }
    }, [cnt]);

    const handleChange = (x) => {
        let temp = pin;
        if (cnt >= 0 && cnt <= 4) {
            if (cnt >= 0) {
                if (cnt > 0 && x == '<') {
                    temp[cnt - 1] = '';
                    setCnt(cnt - 1);
                }
                else if (cnt == 0 && x == '<') {
                    temp[0] = '';
                    setCnt(0);
                }
                else if (cnt < 4) {
                    temp[cnt] = x;
                    setCnt(cnt + 1);
                }
            }
        }
        setPin(temp);
    }

    return (
        <>
            <br />
            <Row>
                <Col>
                    <span>{sentence}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "40px" }}>
                        {pin.map((data, index) => {
                            if (data != '') {
                                return (
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "50px", height: "50px", backgroundColor: "white", borderRadius: "15px", marginLeft: "5px", marginRight: "5px", boxShadow:"0px 5px 0px #CB9C00" }}>•</div>
                                )
                            }
                            else {
                                return (
                                    <div style={{ width: "50px", height: "50px", backgroundColor: "white", borderRadius: "15px", marginLeft: "5px", marginRight: "5px", boxShadow:"0px 5px 0px #CB9C00" }}></div>
                                )
                            }
                        })}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col><button className="NumberButtom" onClick={() => handleChange('1')}>1</button></Col>
                <Col><button className="NumberButtom" onClick={() => handleChange('2')}>2</button></Col>
                <Col><button className="NumberButtom" onClick={() => handleChange('3')}>3</button></Col>
            </Row>
            <br />
            <Row>
                <Col><button className="NumberButtom" onClick={() => handleChange('4')}>4</button></Col>
                <Col><button className="NumberButtom" onClick={() => handleChange('5')}>5</button></Col>
                <Col><button className="NumberButtom" onClick={() => handleChange('6')}>6</button></Col>
            </Row>
            <br />
            <Row>
                <Col><button className="NumberButtom" onClick={() => handleChange('7')}>7</button></Col>
                <Col><button className="NumberButtom" onClick={() => handleChange('8')}>8</button></Col>
                <Col><button className="NumberButtom" onClick={() => handleChange('9')}>9</button></Col>
            </Row>
            <br />
            <Row>
                <Col></Col>
                <Col><button className="NumberButtom" onClick={() => handleChange('0')}>0</button></Col>
                <Col><button className="NumberButtom" onClick={() => handleChange('<')}>&lt;</button></Col>
            </Row>
        </>
    )
}

export default WalletPinComponent;