import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEthereum } from "react-icons/fa";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Mush00 from '../../../assets/mush00.png';
import Mush02 from '../../../assets/mush02.png';
import Spore from '../../../assets/spore.png';
import { NavLink } from "react-router-dom";
import useInventoryStore from "../../../stores/InventoryStore";

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

// SPENDING Tab
const WalletTabSpending = () => {

    const [item, setItem] = useState("");
    const [type, setType] = useState("");
    const [open, setOpen] = useState(false); // 모달 여닫기를 관리하는 상태
    const [value, setValue] = useState("");
    const [maintoken, setMaintoken] = useState(0);

    const handleClose = () => setOpen(false); // 모달 닫는 함수
    const handleOpen = () => setOpen(true); // 모달 여는 함수

    const { InventoryState, ChangeInventoryState } = useInventoryStore(state => state);

    const handleOpenModal = (val) => {
        handleOpen();
        setValue(val);
    }

    useEffect(() => {
        j_viewMyNFTs(4, 1);
        j_viewMyMainToken(1);
    }, []);

    const j_viewMyNFTs = async (_tokenId, count) => {  // 주석으로 바꿔야 함

        try {
            let tokencontract = await tronWeb_user.contract().at(tokenContract);
            let contract = await tronWeb_user.contract().at(stakeContract)
            let result = new Array();

            while (count > 0) {
                let _balance = await tokencontract.balanceOf(userAddress, _tokenId).call();
                let balance = parseInt(_balance, 16);
                let _uri = await tokencontract.uri(_tokenId).call();
                let _type = await tokencontract.NFTinfo(_tokenId).call();

                let data = new Object();
                data.tokenId = _tokenId;
                data.uri = _uri;
                data.type = _type.staking;
                data.balance = balance;
                result.push(data);
                count--;
                _tokenId++;
            }
            let jsonData = JSON.stringify(result);

            console.log('balanceOf\n', jsonData);

            let obj = JSON.parse(jsonData);
            // console.log(obj[0].uri);

            setItem(obj[0].uri);
            setType(obj[0].type);

            return jsonData;

        } catch (error) {
            console.error("balanceOf error", error);
        }
    }

    const j_MushToSpore = async (_tokenId) => {
        try {
            let contract = await tronWeb_user.contract().at(stakeContract);
            let tokencontract = await tronWeb_user.contract().at(tokenContract);

            let randNum = Math.floor(Math.random() * 10000);

            let MushInfo = await tokencontract.NFTinfo(_tokenId).call();

            let Rate = MushInfo.tokenRate;

            let SporeRate = await CalProbability(Rate, randNum);

            let result = await contract.MushToSpore(
                _tokenId, SporeRate, "ran100", 0  // uri 수정 필요
            ).send({
                feeLimit: 10000000000
            }).then(output => {
                console.log('Output:', output);
                handleClose();
            });

        } catch (error) {
            console.error("MushToSpore error", error);
            handleClose();
        }

    }

    const CalProbability = async (sporeRate, randNum) => {
        if (sporeRate == 50) {
            if (randNum <= 400)
                return 50;
            else if (randNum <= 1600 && randNum > 400)
                return 30;
            else if (randNum <= 4000 && randNum > 1600)
                return 15;
            else if (randNum <= 7200 && randNum > 4000)
                return 10;
            else
                return 5;

        } else if (sporeRate == 30) {
            if (randNum <= 200)
                return 50;
            else if (randNum <= 800 && randNum > 200)
                return 30;
            else if (randNum <= 2800 && randNum > 800)
                return 15;
            else if (randNum <= 5600 && randNum > 2800)
                return 10;
            else
                return 5;
        } else if (sporeRate == 15) {
            if (randNum <= 100)
                return 50;
            else if (randNum <= 400 && randNum > 100)
                return 30;
            else if (randNum <= 1600 && randNum > 400)
                return 15;
            else if (randNum <= 4100 && randNum > 1600)
                return 10;
            else
                return 5;
        } else if (sporeRate == 10) {
            if (randNum <= 50)
                return 50;
            else if (randNum <= 200 && randNum > 50)
                return 30;
            else if (randNum <= 1000 && randNum > 200)
                return 15;
            else if (randNum <= 3000 && randNum > 1000)
                return 10;
            else
                return 5;
        } else if (sporeRate == 5) {
            if (randNum <= 1)
                return 50;
            else if (randNum <= 100 && randNum > 1)
                return 30;
            else if (randNum <= 500 && randNum > 100)
                return 15;
            else if (randNum <= 1500 && randNum > 500)
                return 10;
            else
                return 5;
        }
    }

    const j_viewMyMainToken = async (Id) => {
        let tokencontract;
        let Address;

        if (Id == 1) {
            tokencontract = await tronWeb_user.contract().at(tokenContract);
            Address = userAddress;
        } else if (Id == 2) {
            tokencontract = await tronWeb_stealer.contract().at(tokenContract);
            Address = stealerAddress;
        }

        try {
            let _balance = await tokencontract.balanceOf(Address, 0).call();
            let balance = Number(_balance.toString())

            console.log('balanceOf(Main token) : ', balance);

            setMaintoken(balance);

            return balance;

        } catch (error) {
            console.error("balanceOf error", error);
        }
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
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={Mush02} style={{ width: "50%" }} />
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <button className="ItemMenuButtonStyleOne" onClick={() => j_MushToSpore(4)}>DECOMPOSITION</button>
                        <NavLink to="/staking">
                            <button className="ItemMenuButtonStyleTwo">STAKING</button>
                        </NavLink>
                    </div>
                    <br />
                </>
            )
        }
        else if (val == "initmush") {
            return (
                <>
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Mushroom</span>
                        <button className="WalletModalCloseButton" onClick={() => handleClose()}>X</button>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={Mush00} style={{ width: "50%" }} />
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <button className="ItemMenuButtonStyleOne" onClick={() => j_MushToSpore(4)}>DECOMPOSITION</button>
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
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={Spore} style={{ width: "50%" }} />
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <NavLink to="/growing">
                            <button className="ItemMenuButtonStyleOne">PLANT</button>
                        </NavLink>
                        {/* <button className="ItemMenuButtonStyleTwo">STAKING</button> */}
                    </div>
                    <br />
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
                    <br />
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

    const InventoryItem = () => {
        return (
            <Col className="InventoryCol" style={{ maxWidth: "50%" }}>
                {type == true ?
                    <div className="InventoryContainer" onClick={() => handleOpenModal("mush")}>
                        <div className="InventoryElement">
                            <img src={item} style={{ width: "80%" }} />
                        </div>
                    </div>
                    :
                    <div className="InventoryContainer" onClick={() => handleOpenModal("spore")}>
                        <div className="InventoryElement">
                            <img src={item} style={{ width: "80%" }} />
                        </div>
                    </div>
                }

            </Col>
        )
    }

    const InventoryThief = () => {
        return (
            <Col className="InventoryCol" style={{ maxWidth: "50%" }}>
                <div className="InventoryContainer" onClick={() => handleOpenModal("thief")}>
                    <div className="InventoryElement">
                        Image
                    </div>
                </div>
            </Col>
        )
    }

    return (
        <div className="FirstTab">
            <div className="SpendingAccount">
                <p className="SpendingAccountTitle">Spending Account</p>
                <Container className="SpendingAccountContainer">
                    <Row className="SpendingAccountRow">
                        <Col>Token</Col> {/* 토큰(코인)명 */}
                        <Col className="SpendingAccountBalance">{maintoken}</Col> {/* 토큰(코인) 보유량 */}
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
                        <InventoryItem />
                    </Row>
                </Container>
            </div>
            <ItemModal />
        </div>
    );
};
export default WalletTabSpending;