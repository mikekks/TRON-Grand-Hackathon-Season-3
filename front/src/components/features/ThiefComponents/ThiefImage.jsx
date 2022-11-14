import React, { useEffect } from "react";
import { useState } from "react";
import Thief from '../../../assets/thief.png';

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

const ThiefImage = () => {
    
    const [uri, setUri] = useState("");

    useEffect(() => {
        j_viewStealNFT(6);
    }, []);

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

    return(
        <div className="ThiefImage">
            {uri == "" ? <></> : <img src={uri} className="Thief"/> }
        </div>
    )
}

export default ThiefImage;