import React, { useState } from "react";
import Poja from '../../../assets/spore.png';
import Mush02 from '../../../assets/mush02.png';
import useMushStore from "../../../stores/MushStore";
import { MdOutlineRunningWithErrors } from "react-icons/md";

const GrowingItembar = ({ handleMode }) => {

    // const[item, setItem] = useState([3,4]);

    // const [holes, setHoles] = useState(["hole", "hole", "hole", "hole", "hole"])

    const { MushOne, MushOneEXP, MushOneNameChange, MushOneEXPChange, MushTwo, MushTwoEXP, MushTwoNameChange, MushTwoEXPChange, MushThree, MushThreeEXP, MushThreeNameChange, MushThreeEXPChange, MushFour, MushFourEXP, MushFourNameChange, MushFourEXPChange } = useMushStore(state => state);

    // const handleElement = (val) => {
    //     handleMode(val);
    // }

    const handleEvent = () => {
        console.log("handleEvent");
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

    //잠깐 밑에 내려갔다오겠습니다

    const PojaItem = () => {
        return (
            <img src={Poja} style={{ borderRadius: "5px" }} onClick={() => handleEvent()} />
        )
    }

    return (
        <div className="Itembar">
            <div className="ItemElement"><PojaItem /></div>
            <div className="ItemElement"><PojaItem /></div>
            <div className="ItemElement"></div>
            <div className="ItemElement"></div>
        </div>
    )
}

export default GrowingItembar;