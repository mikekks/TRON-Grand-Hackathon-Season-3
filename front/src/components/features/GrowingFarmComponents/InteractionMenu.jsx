import React from "react";
import { GiHammerDrop } from "react-icons/gi";
import useMushStore from "../../../stores/MushStore";

const InteractionMenu = () => {

    const { MushOne, MushOneEXP, MushOneNameChange, MushOneEXPChange,MushOneEXPInit, MushTwo, MushTwoEXP, MushTwoNameChange, MushTwoEXPChange,MushTwoEXPInit, MushThree, MushThreeEXP, MushThreeNameChange, MushThreeEXPChange, MushThreeEXPInit, MushFour, MushFourEXP, MushFourNameChange, MushFourEXPChange, MushFourEXPInit} = useMushStore(state => state);

    const handleGrowing = () => {
        if(MushOne != "hole") {
            if(MushOneEXP==10){
                if(MushOne == "spore"){
                    MushOneNameChange("baby");
                    MushOneEXPInit();
                }
                else if(MushOne == "baby"){
                    MushOneNameChange("adult");
                    MushOneEXPInit();
                }
            } else {
                MushOneEXPChange();
            }
        }
        if(MushTwo != "hole") {
            if(MushTwoEXP==10){
                if(MushTwo == "spore"){
                    MushTwoNameChange("baby");
                    MushTwoEXPInit();
                }
                else if(MushTwo == "baby"){
                    MushTwoNameChange("adult");
                    MushTwoEXPInit();
                }
            } else {
                MushTwoEXPChange();
            }
        }
        if(MushThree != "hole") {
            if(MushThreeEXP==10){
                if(MushThree == "spore"){
                    MushThreeNameChange("baby");
                    MushThreeEXPInit();
                }
                else if(MushThree == "baby"){
                    MushThreeNameChange("adult");
                    MushThreeEXPInit();
                }
            } else {
                MushThreeEXPChange();
            }
        }
        if(MushFour != "hole") {
            if(MushFourEXP==10){
                if(MushFour == "spore"){
                    MushFourNameChange("baby");
                    MushFourEXPInit();
                }
                else if(MushFour == "baby"){
                    MushFourNameChange("adult");
                    MushFourEXPInit();
                }
            } else {
                MushFourEXPChange();
            }
        }
    }

    return(
        <div className="Interactionbar">
            <div className="InteractionbarElement" onClick={() => handleGrowing()}>WATER</div>
            <div className="InteractionbarElement" onClick={() => handleGrowing()}>CLEAN</div>
            <div className="InteractionbarElement" onClick={() => handleGrowing()}>SUN</div>
            <div className="InteractionbarElement" onClick={() => handleGrowing()}>WOOD</div>
        </div>
    )
}

export default InteractionMenu;