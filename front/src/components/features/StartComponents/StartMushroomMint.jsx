import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Mush02 from '../../../assets/mush02.png';
const StartMushroomMint = ({ choosePage }) => {

    const [page, setPage] = useState("mint01");

    const MintMushroom = () => {
        //버섯 민트하는 장소
        setPage("mint02");
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
                <button className="StartMushroomMintButton" onClick={() => MintMushroom()}>MINT</button>
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
        </>
    )
}

export default StartMushroomMint;