import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Mush02 from '../../../assets/mush02.png';
import LoadingScreen from "../GlobalFeatures/LoadingScreen";
require('dotenv').config();

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

const StartMushroomMint = ({ choosePage }) => {

    const [page, setPage] = useState("mint01");
    const [display, setDisplay] = useState("none");

    const MintMushroom = async(address) => {
        //loading screen display
        setDisplay("block");

        try {
            let contract = await tronWeb_owner.contract().at(stakeContract);
    
            let tokenRate = 15;  // 튜토리얼 버섯은 B등급으로 고정
    
            let result = await contract.mintMushInit(
                address,
                "ran0",   //uri
                tokenRate,
                0
            ).send({
                feeLimit: 10000000000
            }).then(output => {
                console.log('Output:', output);
                setDisplay("none");
                setPage("mint01");
                user_setApprovalForAll();
            });
    
        } catch(error) {
            console.error("mintMush error", error);
            setDisplay("none");
            user_setApprovalForAll();
        }

        //loading screen undisplay
        setDisplay("none");
        setPage("mint02");
        user_setApprovalForAll();
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
    

    const BeforeMint = () => {
        return (
            <>
                <div className="StartMushroomTitle">
                    <p>You can get </p>
                    <p>MUSHROOM!</p>
                </div>
                <div className="StartMushroomMintContainer">
                    <img src={Mush02} className="StartMushroomImage" />
                </div>
                <button className="StartMushroomMintButton" onClick={() => MintMushroom(userAddress)}>MINT</button>
            </>
        )
    }

    const AfterMint = () => {
        return (
            <>
                <div className="StartMushroomTitle">
                    <p>This is your</p>
                    <p>MUSHROOM!</p>
                </div>
                <div className="StartMushroomMintContainer">
                    <img src={Mush02} className="StartMushroomImage" />
                </div>
                <NavLink to="/growing"><button className="StartMushroomMintButton">START</button></NavLink>
            </>
        )
    }

    const MintComponent = () => {
        if (page == "mint01") {
            return (<BeforeMint />)
        }
        else if (page == "mint02") {
            return (<AfterMint />)
        }
    }

    return (
        <>
            {MintComponent()}
            <LoadingScreen display={display} />
        </>
    )
}

export default StartMushroomMint;