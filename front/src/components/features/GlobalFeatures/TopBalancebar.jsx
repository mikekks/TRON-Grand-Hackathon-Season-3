import React, {useState} from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useEffect } from "react";

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



const TopBalancebar = () => {

    const [maintoken, setMaintoken] = useState(0);
    // const [valtwo, setValtwo] = useState(300);

    useEffect(() => {
        j_viewMyMainToken(1);
    });

    const j_viewMyMainToken = async(Id) => {
        let tokencontract;
        let Address;
    
        if (Id == 1) {
            tokencontract = await tronWeb_user.contract().at(tokenContract);
            Address = userAddress;
        } else if(Id == 2) {
            tokencontract = await tronWeb_stealer.contract().at(tokenContract);
            Address = stealerAddress;
        }
    
         try {
             let _balance = await tokencontract.balanceOf(Address, 0).call();
             let balance = Number(_balance.toString())
    
             console.log('balanceOf(Main token) : ', balance);

             setMaintoken(balance);

             return balance;
    
        } catch(error) {
             console.error("balanceOf error", error);
        }
    }

    return(
        <div className="TopBalancebar">
            <div className="TopBalancebarBalances">
                <div className="TopBalanceBarToken"></div>
                <div>{maintoken}</div>
            </div>
            <div className="TopBalanceBarIcon">
                <Link to="/wallet" className="WalletIcon">
                    <MdOutlineAccountBalanceWallet size={24} />
                </Link>
            </div>
        </div>
    )
}

export default TopBalancebar;