import React from "react";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from "react";
import PoisonMush from '../../../assets/poisonmush.png';
import LoadingScreen from "../GlobalFeatures/LoadingScreen";
import CardBack from '../../../assets/cardback.png';


const ThiefCards = () => {

    const [isflipped, setIsflipped] = useState([false, false, false, false, false, false, false, false, false]);
    const [ispoison, setIspoison] = useState([false, false, false, false, false, false, false, false, false]);

    const [display, setDisplay] = useState("none");

    const handleClick = (index) => {
        // 우선 클릭이 오면 여기서 카드 확률을 계산한다.
        // 결과가 나올 때까지, 로딩 화면을 출력한다.
        console.log("Cards handleClick");
        setDisplay("block");



        // 확률이 나오면, UI작업을 진행한다.
        setDisplay("none");
        let temp = isflipped;
        let tempElement = temp[index];
        temp[index] = !tempElement;
        setIsflipped(isflipped => [...temp]);
    }

    // useEffect(() => {
    //     console.log("changed");
    // },[isflipped]);

    return (
        <>
            <Container className="CardContainer">
                <Row className="CardRow">
                    <Col className="CardCol">
                        <div className="CardDiv">
                            <ReactCardFlip isFlipped={isflipped[0]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(0)}>
                                    <img src={CardBack} className="CardImage" />
                                </div>
                                <div className="CardBack" onClick={() => handleClick(0)}>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[1]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(1)}>
                                <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(1)}>

                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[2]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(2)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(2)}>
                                    {/* <img src={PoisonMush} /> */}
                                </div>
                            </ReactCardFlip>
                        </div>
                    </Col>
                </Row>

                <Row className="CardRow">
                    <Col className="CardCol">
                        <div className="CardDiv">
                            <ReactCardFlip isFlipped={isflipped[3]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(3)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(3)}>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[4]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(4)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(4)}>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[5]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(5)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(5)}>
                                </div>
                            </ReactCardFlip>
                        </div>
                    </Col>
                </Row>

                <Row className="CardRow">
                    <Col className="CardCol">
                        <div className="CardDiv">
                            <ReactCardFlip isFlipped={isflipped[6]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(6)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(6)}>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[7]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(7)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(7)}>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[8]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(8)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(8)}>
                                </div>
                            </ReactCardFlip>
                        </div>
                    </Col>
                </Row>
            </Container>
            <LoadingScreen display={display} />
        </>
    )
}

export default ThiefCards;