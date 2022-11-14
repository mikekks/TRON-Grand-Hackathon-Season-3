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
import Mush02 from '../../../assets/mush02.png';
import poisonmush from '../../../assets/poisonmush.png';

const TronWeb = require('tronweb');
// const fetch  = require("node-fetch");

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://nile.trongrid.io");
const solidityNode = new HttpProvider("https://nile.trongrid.io");
const eventServer = new HttpProvider("https://nile.trongrid.io");

const ownerprivateKey = "D9598D7346741CAA2FA5A46777CD4A810BFB05A1423F8FE24A8B89F7642819C4"; // user
const userprivateKey = "13a1675e3df35978edd1d7f2ef54b6e9b7067228c8df300b0eae2cd5cac4e942";  // owner
const stealerprivateKey = "80c8c1032c3aeb1e020730e7db437d88e844af333f7f8b7553df1eeec42430df"; // stealer

const ownerAddress = "TSafMJ7VyjPioafQiCL8RywEH31rXHRLRL";  //testsong
const userAddress = "TFJ1EYjdkxX6ASjPhP45tNvDS29qsQn812"; // wallet1
const stealerAddress = "THeTAEcaL2z7RMSQWfr4MYTtb3xEmGkhbQ"; // stealer

const tronWeb_owner = new TronWeb(fullNode, solidityNode, eventServer, ownerprivateKey);  // (테스트를 위한 주석) testsong 지갑
const tronWeb_user = new TronWeb(fullNode, solidityNode, eventServer, userprivateKey);  // (테스트를 위한 주석) Wallet1 지갑
const tronWeb_stealer = new TronWeb(fullNode, solidityNode, eventServer, stealerprivateKey);

const tokenContract = "TXDdk1evoKi9uEDd2guneFo4BVRpFqR3Aw";// token coontract
const stakeContract = "TM8vfeqkozyD6pBQgr1gv1TNnC3WephCXG";  // staking contract

const ThiefCards = ({ amount, address }) => {

    const [isflipped, setIsflipped] = useState([false, false, false, false, false, false, false, false, false]);
    const [CardFront, setCardFront] = useState([Mush02, Mush02, Mush02, Mush02, Mush02, Mush02, Mush02, Mush02, Mush02]);

    const [ispoison, setIspoison] = useState([false, false, false, false, false, false, false, false, false]);

    const [display, setDisplay] = useState("none");

    const handleClick = (index) => {
        // 우선 클릭이 오면 여기서 카드 확률을 계산한다.
        // 결과가 나올 때까지, 로딩 화면을 출력한다.
        console.log("Cards handleClick");
        setDisplay("block");

        let res = j_steal(6, amount, index);
        console.log("RES: "+res);
    }

    const j_steal = async (_stealTokenId, _amount, index) => {
        try {
            let contract = await tronWeb_user.contract().at(stakeContract);

            let result = await contract.steal(
                stealerAddress, userAddress, _amount, _stealTokenId
            ).send({
                feeLimit: 10000000000
            }).then(output => {
                console.log('Output:', output);
            });

        } catch (error) {
            console.error("stake error", error);
        }

        let num;
        let event = await tronWeb_user.getEventResult(stakeContract, { eventName: "stealevent", size: 1 }).then(event => {
            console.log(event[0].result.isSuccess);
            num = event[0].result.isSuccess;
            console.log(num);
        })
        if(num == 0) {
            let temp2=CardFront;
            let temp2Element = temp2[index];
            temp2[index]=poisonmush;
            setCardFront(CardFront => [...temp2]);

                    // 확률이 나오면, UI작업을 진행한다.
        setDisplay("none");
        let temp = isflipped;
        let tempElement = temp[index];
        temp[index] = !tempElement;
        setIsflipped(isflipped => [...temp]);
        }
        return num;
    }

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
                                    <img src={CardFront[0]} className="CardMushroom" />
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[1]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(1)}>
                                    <img src={CardBack} className="CardImage" />
                                </div>
                                <div className="CardBack" onClick={() => handleClick(1)}>
                                    <img src={CardFront[1]} className="CardMushroom" />
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[2]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(2)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(2)}>
                                    <img src={CardFront[2]} className="CardMushroom" />

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
                                    <img src={CardFront[3]} className="CardMushroom" />

                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[4]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(4)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(4)}>
                                    <img src={CardFront[4]} className="CardMushroom" />

                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[5]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(5)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(5)}>
                                    <img src={CardFront[5]} className="CardMushroom" />

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
                                    <img src={CardFront[6]} className="CardMushroom" />

                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[7]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(7)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(7)}>
                                    <img src={CardFront[7]} className="CardMushroom" />

                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip isFlipped={isflipped[8]} flipDirection="horizontal">
                                <div className="CardFront" onClick={() => handleClick(8)}>
                                    <img src={CardBack} className="CardImage" />

                                </div>
                                <div className="CardBack" onClick={() => handleClick(8)}>
                                    <img src={CardFront[8]} className="CardMushroom" />

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