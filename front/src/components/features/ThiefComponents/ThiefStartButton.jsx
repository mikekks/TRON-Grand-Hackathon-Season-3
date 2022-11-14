import React, { useEffect } from "react";
import { Modal } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";

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

const ThiefStartButton = ({ handleMode, handleAmount, handleAddress }) => {

    useEffect(() => {
        j_viewStealNFT(6);
    }, []);

    const [open, setOpen] = useState(false); // 모달 여닫기를 관리하는 상태

    const [uri, setUri] = useState("");

    const [amount, setAmount] = useState("");
    const [address, setAddress] = useState("");

    const amountOnChange = (e) =>{
        setAmount(e.target.value);
    }

    const addressOnChange = (e) =>{
        setAddress(e.target.value);
    }

    const handleClose = () => setOpen(false); // 모달 닫는 함수
    const handleOpen = () => setOpen(true); // 모달 여는 함수

    const handleSettings = (val) => {
        handleMode(val);
        handleAddress(address);
        handleAmount(amount);
    }

    const j_mintStealerNFT = async() => {
        try {
            let contract = await tronWeb_owner.contract().at(stakeContract);
    
            let result = await contract.mintStealerNFT(
                userAddress,
                "ran100",  // uri 수정 필요
                0
            ).send({
                feeLimit: 10000000000
            }).then(output => {
                console.log('Output:', output);
                user_setApprovalForAll();
            });
    
        } catch(error) {
            console.error("mintStealer error", error);
        }
    }

    const user_setApprovalForAll = async() => {
        try {
            let contract = await tronWeb_user.contract().at(tokenContract);
    
            let result = await contract.setApprovalForAll(
               stakeContract, true
            ).send({
                feeLimit: 10000000000
            }).then(output => {
                console.log('Output:', output);
            });
    
        } catch(error) {
            console.error("error2", error);
        }
    }

    async function j_viewStealNFT(_tokenId) {
        let tokencontract = await tronWeb_user.contract().at(tokenContract);
        let contract = await tronWeb_user.contract().at(stakeContract);
    try {
        let _uri = await tokencontract.uri(_tokenId).call();
        let isStealer = await tokencontract.stealer(_tokenId).call();
        let _balance = await tokencontract.balanceOf(userAddress, _tokenId).call();
        console.log(_balance);
        if (_balance == 0)
            return false;
        let data = new Object();

        data.tokenId = _tokenId;
        data.balance = _balance
        data.uri = _uri;
        data.isStealNFT = isStealer;  // 1이 아니면 stealerNFT가 아니다
        setUri(data.uri);
        console.log(data);
        return data;
    } catch (error) {
        return false;
    }
}

    const ThiefInputButton = () => {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                disableAutoFocus={true}
            >
                <Box className="WalletModalBox">
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Steal Input</span>
                        <button className="WalletModalCloseButton" onClick={() => handleClose()}>X</button>
                    </div>
                    <br />
                    <div className="ModalContentContainer">
                        <div>How much do you want to STEAL?</div>
                        <div>
                            <input type="text" className="ModalInput" onChange={amountOnChange} value={amount} placeholder="5"/>
                        </div>
                    </div>
                    <br />
                    <div className="ModalContentContainer">
                        <div>Where do you want to Steal?</div>
                        <div>
                            <input type="text" className="ModalInput" onChange={addressOnChange} value={address} placeholder="TFJ1EYjdkxX6ASjPhP45tNvDS29qsQn812"/>
                        </div>
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <button className="ItemMenuButtonStyleOne" onClick={() => handleSettings("yes")}>STEAL</button>
                    </div>
                    <br />
                </Box>
            </Modal>
        )
    }

    return (
        <>
            {uri != "" ?
                <div className="ThiefStartButtonContainer">
                    <button className="ThiefStartButton" onClick={() => j_mintStealerNFT()}>MINT</button>
                    <ThiefInputButton />
                </div>
                :
                <div className="ThiefStartButtonContainer">
                    <button className="ThiefStartButton" onClick={() => handleOpen()}>STEAL</button>
                    <ThiefInputButton />
                </div>
            }
        </>

    )
}

export default ThiefStartButton;