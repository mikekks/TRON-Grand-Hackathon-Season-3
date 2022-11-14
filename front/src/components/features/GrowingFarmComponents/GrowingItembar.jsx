import React, { useState } from "react";
import Poja from '../../../assets/spore.png';
import Mush02 from '../../../assets/mush02.png';
import useMushStore from "../../../stores/MushStore";
import { MdOutlineRunningWithErrors } from "react-icons/md";
import { useEffect } from "react";
import useSporeStore from "../../../stores/SporeStore";

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


const GrowingItembar = ({ handleMode }) => {

    const [item, setItem] = useState("");

    const { SporeState, ChangeSporeState } = useSporeStore(state => state);
    const { MushOne, MushOneEXP, MushOneNameChange, MushOneEXPChange, MushTwo, MushTwoEXP, MushTwoNameChange, MushTwoEXPChange, MushThree, MushThreeEXP, MushThreeNameChange, MushThreeEXPChange, MushFour, MushFourEXP, MushFourNameChange, MushFourEXPChange } = useMushStore(state => state);

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

    const handleEvent = () => {
        console.log("handleEvent");
        ChangeSporeState();
        if (MushOne == "hole") {
            MushOneNameChange("spore");
        } else {
            if (MushTwo == "hole") {
                MushTwoNameChange("spore");
            } else {
                if (MushThree == "hole") {
                    MushThreeNameChange("spore");
                } else {
                    if (MushFour == "hole") {
                        MushFourNameChange("spore");
                    }
                }
            }
        }
    }

    const PojaItem = ({ item }) => {
        return (
            <img src={item} style={{ borderRadius: "5px" }} onClick={() => handleEvent()} />
        )
    }

    return (
        <div className="Itembar">
            <div className="ItemElement">{SporeState == false ? <PojaItem item={item} />: <></>}</div>
            <div className="ItemElement"></div>
            <div className="ItemElement"></div>
            <div className="ItemElement"></div>
        </div>
    )
}

export default GrowingItembar;