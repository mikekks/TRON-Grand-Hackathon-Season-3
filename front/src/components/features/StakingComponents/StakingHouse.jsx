import React, { useEffect } from "react";
import { GiWavyItinerary } from "react-icons/gi";
import Vault from '../../../assets/garagenew.png';
import Mush02 from '../../../assets/mush02.png';
import useStakingStore from "../../../stores/StakingStore";

const StakingHouse = ({ StakingState, handleMode }) => {

    // const { StakingState, ChangeStakingState } = useStakingStore(state => state);

    console.log(StakingState);

    const CancleStaking = () => {
        handleMode("stop");
    }

    const StakingMode = () => {
        if (StakingState == "ready") {
            return (
                <>
                    <img src={Vault} className="StakingHouse" />
                </>
            )
        }
        else if (StakingState == "start" || StakingState=="stop") {
            return (
                <>
                    <div className="StakingTitle">
                        Staking Complete
                    </div>
                    <div className="StakingInfo">
                        <p>time: {"asdf"}</p>
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