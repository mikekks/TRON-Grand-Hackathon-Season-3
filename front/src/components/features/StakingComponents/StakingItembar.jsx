import React, { useState } from "react";
import Poja from '../../../assets/spore.png';
import Mush02 from '../../../assets/mush02.png';
import { Modal } from "@mui/material";
import Box from '@mui/material/Box';
import { useEffect } from "react";
import useStakingStore from "../../../stores/StakingStore";

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

const StakingItembar = ({ StakingState, handleMode }) => {

    const [startopen, setStartopen] = useState(false); // 모달 여닫기를 관리하는 상태
    const [completeopen, setCompleteopen] = useState(false); // 모달 여닫기를 관리하는 상태
    const [item, setItem] = useState("");

    // const { StakingState, ChangeStakingState } = useStakingStore(state => state);

    const handleStartClose = () => setStartopen(false); // 모달 닫는 함수
    const handleStartOpen = () => setStartopen(true); // 모달 여는 함수

    const handleCompleteClose = () => setCompleteopen(false); // 모달 닫는 함수
    const handleCompleteOpen = () => setCompleteopen(true); // 모달 여는 함수

    const handleOpenStartModal = () => {
        console.log("startmodal");
        handleStartOpen();
    }

    const handleCloseStartModal = (val) => {
        handleMode(val);
        console.log(val);
        if(val=="start"){
            console.log("start");
        }

        handleStartClose();
    }

    const handleOpenCompleteModal = () => {
        console.log("completemodal");
        handleCompleteOpen();
    }

    const handleCloseCompleteModal = (val) => {
        console.log(val);

        handleCloseStartModal(val);
        handleCompleteClose();
    }

    const BigMushItem = () => {
        return (
            <img src={Mush02} onClick={() => handleOpenStartModal()} style={{ width: "50px", borderRadius: "5px" }} />
        )
    }

    useEffect(() => {
        console.log(StakingState);
        if (StakingState == "stop") {
            handleOpenCompleteModal();
        }
    }, [StakingState]);

    useEffect(() => {
        j_viewMyNFTs(4, 1);
    });

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
            console.log(obj[0].uri);

            setItem(obj[0].uri);

            return jsonData;

        } catch (error) {
            console.error("balanceOf error", error);
        }
    }

    const StakingStartModal = () => {
        return (
            <Modal
                open={startopen}
                onClose={handleStartClose}
                disableAutoFocus={true}
            >
                <Box className="WalletModalBox">
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Mushroom Staking?</span>
                        <button className="WalletModalCloseButton" onClick={() => handleStartClose()}>X</button>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={Mush02} style={{ width: "50%" }} />
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <button className="ItemMenuButtonStyleOne" onClick={() => handleCloseStartModal("start")}>STAKING</button>
                    </div>
                    <br />
                </Box>
            </Modal>
        )
    }

    const StakingCompleteModal = () => {
        return (
            <Modal
                open={completeopen}
                onClose={handleCompleteClose}
                disableAutoFocus={true}
            >
                <Box className="WalletModalBox">
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Cancle Staking?</span>
                        <button className="WalletModalCloseButton" onClick={() => handleCompleteClose()}>X</button>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={Mush02} style={{ width: "50%" }} />
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <button className="ItemMenuButtonStyleOne" onClick={() => handleCloseCompleteModal("ready")}>YES</button>
                        <button className="ItemMenuButtonStyleTwo" onClick={() => handleCloseCompleteModal("start")}>NO</button>
                    </div>
                    <br />
                </Box>
            </Modal>
        )
    }

    return (
        <>
            {StakingState == "ready" ?
                <div className="Itembar">
                    <div className="ItemElement"><img src={item} onClick={() => handleOpenStartModal()} style={{ borderRadius: "5px" }} /></div>
                    <div className="ItemElement"></div>
                    <div className="ItemElement"></div>
                    <div className="ItemElement"></div>
                </div>
                :
                <div className="Itembar">
                    <div className="ItemElement"></div>
                    <div className="ItemElement"></div>
                    <div className="ItemElement"></div>
                    <div className="ItemElement"></div>
                </div>
            }
            <StakingStartModal />
            <StakingCompleteModal />
        </>
    )
}

export default StakingItembar;