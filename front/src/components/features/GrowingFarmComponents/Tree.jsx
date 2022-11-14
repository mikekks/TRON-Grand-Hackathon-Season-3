import React, { useState } from "react";
import TreeImage from "../../../assets/tree.png";
import TreeNew from "../../../assets/treenew01.png";
import Poja from '../../../assets/spore.png';
import Mush00 from '../../../assets/mush00.png';
import Mush01 from '../../../assets/mush01.png';
import Mush02 from '../../../assets/mush02.png';
import { useEffect } from "react";
import useMushStore from "../../../stores/MushStore";

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

const Tree = ({ mode, handleMode }) => {

    const { MushOne, MushOneEXP, MushOneNameChange, MushOneEXPChange, MushOneEXPInit, MushTwo, MushTwoEXP, MushTwoNameChange, MushTwoEXPChange, MushTwoEXPInit, MushThree, MushThreeEXP, MushThreeNameChange, MushThreeEXPChange, MushThreeEXPInit, MushFour, MushFourEXP, MushFourNameChange, MushFourEXPChange, MushFourEXPInit } = useMushStore(state => state);

    const HoleStore = () => {
        return (
            <div style={{ width: "60px", height: "60px" }}></div>
        )
    }

    const ImgSpore = () => {
        return (
            <div style={{ width: "60px", height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={Poja} />
            </div>
        )
    }

    const ImgBaby = () => {
        return (
            <div style={{ width: "60px", height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={Mush01} />
            </div>
        )
    }

    const j_SporeToMush = async (_tokenId) => {
        try {
            let contract = await tronWeb_user.contract().at(stakeContract);
            let tokencontract = await tronWeb_user.contract().at(tokenContract);

            let randNum = Math.floor(Math.random() * 10000);

            let SporeInfo = await tokencontract.NFTinfo(_tokenId).call();
            let Rate = SporeInfo.tokenRate;

            let MushRate = await CalProbability(Rate, randNum);

            let result = await contract.SporeToMush(
                _tokenId, MushRate, "ran101", 0  // uri 수정 필요
            ).send({
                feeLimit: 10000000000
            }).then(output => {
                console.log('Output:', output);
            });

        } catch (error) {
            console.error("MushToSpore error", error);
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


    const MushHarvest = (index) => {
        if (index == -1) {
            console.log("init mush click");
            MushOneNameChange("hole");
            MushOneEXPInit();
        }
        if (index == 0) {
            console.log("0 click");
            MushOneNameChange("hole");
            MushOneEXPInit();
            j_SporeToMush(4);
        }
        if (index == 1) {
            console.log("1 click");
            MushTwoNameChange("hole");
            MushTwoEXPInit();
            j_SporeToMush(4);
        }
        if (index == 2) {
            console.log("2 click");
            MushThreeNameChange("hole");
            MushThreeEXPInit();
            j_SporeToMush(4);
        }
        if (index == 3) {
            console.log("3 click");
            MushFourNameChange("hole");
            MushFourEXPInit();
            j_SporeToMush(4);
        }
    }

    const holeStateImage = (index) => {
        if (index == 0) {
            if (MushOne == "hole") {
                return (<HoleStore />);
            } else if (MushOne == "spore") {
                return (<ImgSpore />);
            } else if (MushOne == "baby") {
                return (<ImgBaby />);
            } else if (MushOne == "adult") {
                return (<img src={Mush02} width="60px" height="60px" onClick={() => MushHarvest(0)} />);
            } else if (MushOne == "adult2") {
                return (<img src={Mush00} width="60px" height="60px" onClick={() => MushHarvest(-1)} />);
            }
        }
        if (index == 1) {
            if (MushTwo == "hole") {
                return (<HoleStore />);
            } else if (MushTwo == "spore") {
                return (<ImgSpore />);
            } else if (MushTwo == "baby") {
                return (<ImgBaby />);
            } else if (MushTwo == "adult") {
                return (<img src={Mush02} width="60px" height="60px" onClick={() => MushHarvest(1)} />);
            }
        }
        if (index == 2) {
            if (MushThree == "hole") {
                return (<HoleStore />);
            } else if (MushThree == "spore") {
                return (<ImgSpore />);
            } else if (MushThree == "baby") {
                return (<ImgBaby />);
            } else if (MushThree == "adult") {
                return (<img src={Mush02} width="60px" height="60px" onClick={() => MushHarvest(2)} />);
            }
        }
        if (index == 3) {
            if (MushFour == "hole") {
                return (<HoleStore />);
            } else if (MushFour == "spore") {
                return (<ImgSpore />);
            } else if (MushFour == "baby") {
                return (<ImgBaby />);
            } else if (MushFour == "adult") {
                return (<img src={Mush02} width="60px" height="60px" onClick={() => MushHarvest(3)} />);
            }
        }
    }

    // console.log("MushOne: ",MushOne);
    // console.log("MushTwo: ",MushTwo);
    // console.log("MushTwo: ",MushThree);
    // console.log("MushTwo: ",MushFour);

    return (
        <div className="Tree">
            <img src={TreeNew} className="TreeImage" />
            <div className="TreeHoles">
                <div>{holeStateImage(0)}</div>
                <div>{holeStateImage(1)}</div>
                <div>{holeStateImage(2)}</div>
                <div>{holeStateImage(3)}</div>
            </div>
        </div>
    )
}

export default Tree;