import React, { useEffect } from "react";
import { useState } from "react";
import { GiWavyItinerary } from "react-icons/gi";
import Vault from '../../../assets/garagenew.png';
import Mush02 from '../../../assets/mush02.png';
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

const StakingHouse = ({ StakingState, handleMode }) => {

    useEffect(() => {
        j_viewStakeToken(4);
    }, []);


    const [data, setData] = useState("");
    const [tokenid, setTokenid] = useState("-");
    const [rate, setRate] = useState("-");
    const [timestamp, setTimestamp] = useState("-");
    const [uri, setUri] = useState("-");

    const j_stake = async (_tokenId, address) => {
        try {
            console.log("staking start!");
            let contract = await tronWeb_owner.contract().at(stakeContract);

            let result = await contract.stake(
                _tokenId, address
            ).send({
                feeLimit: 10000000000
            }).then(output => {
                console.log('Output:', output);
            });

        } catch (error) {
            console.error("stake error", error);
        }
    }

    async function j_viewStakeToken(_tokenId) {
        try {
            console.log("view stake start!");

            let contract = await tronWeb_user.contract().at(stakeContract);
            let stakeInfo = await contract.stakes(userAddress).call();
            let tokencontract = await tronWeb_user.contract().at(tokenContract);

            let _uri = await tokencontract.uri(_tokenId).call();
            // let _type = await tokenContract.NFTinfo(_tokenId).call();

            // let response = await fetch(_uri);
            // let metadata = await response.json();

            let data = new Object();

            data.tokenId = Number(stakeInfo[0].toString());
            data.rate = Number(stakeInfo[1].toString());
            data.timestamp = Number(stakeInfo[2].toString());
            data.uri = _uri;

            setTokenid(data.tokenId);
            setRate(data.rate);
            setTimestamp(data.timestamp);
            setUri(data.uri);

            let jsonData = JSON.stringify(data);

            console.log('Stake Info \n', jsonData);

            return jsonData;

        } catch (error) {
            console.error("viewStakeToken", error);
        }
    }

    const j_unstake = async () => {
        try {
            console.log("unstaking start!");

            let contract = await tronWeb_owner.contract().at(stakeContract);

            let result = await contract.unstake(
                userAddress
            ).send({
                feeLimit: 10000000000
            }).then(output => {
                console.log('Output:', output);
            });

        } catch (error) {
            console.error("stake error", error);
        }
    }

    const CancleStaking = () => {
        handleMode("stop");
        j_unstake();
    }

    const StakingMode = () => {
        if (StakingState == "ready") {
            return (
                <>
                    <img src={Vault} className="StakingHouse" />
                </>
            )
        }
        else if (StakingState == "start" || StakingState == "stop") {
            j_stake(4, userAddress);
            // j_viewStakeToken(4);
            // j_unstake();

            return (
                <>
                    <div className="StakingTitle">
                        Staking Complete
                    </div>
                    <div className="StakingInfo">
                        <p>tokenId: {tokenid}</p>
                        <p>rate: {rate}</p>
                        <p>timestamp: {timestamp}</p>
                        <p>uri: {uri}</p>
                    </div>
                    <img src={Vault} className="StakingHouse" />
                    <div className="StakingMushroomContainer">
                        {/* <img src={Mush02} className="StakingMushroom" /> */}
                    </div>
                    <div>
                        <button className="StakingCancle" onClick={() => CancleStaking()}>CANCLE</button>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            {StakingMode()}
        </>
    )
}

export default StakingHouse;