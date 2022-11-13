import React, {useState} from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const TopBalancebar = () => {

    const [valone, setValone] = useState(100);
    const [valtwo, setValtwo] = useState(300);

{/*
    무엇을 표시할 것인가?
    버섯 개수? 토큰 balance?
    를 받아 와서 표시한다.
*/}
    return(
        <div className="TopBalancebar">
            <div className="TopBalancebarBalances">
                <div className="TopBalanceBarToken"></div>
                <div>{valone}</div>
            </div>
            <div className="TopBalancebarBalances">
                <div className="TopBalanceBarToken"></div>
                <div>{valtwo}</div>
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