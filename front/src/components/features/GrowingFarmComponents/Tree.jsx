import React, { useState } from "react";
import TreeImage from "../../../assets/tree.png";
import TreeNew from "../../../assets/treenew01.png";
import Poja from '../../../assets/spore.png';
import Mush01 from '../../../assets/mush01.png';
import Mush02 from '../../../assets/mush02.png';
import { useEffect } from "react";
import useMushStore from "../../../stores/MushStore";

const Tree = ({ mode, handleMode }) => {

    const { MushOne, MushOneEXP, MushOneNameChange, MushOneEXPChange,MushOneEXPInit, MushTwo, MushTwoEXP, MushTwoNameChange, MushTwoEXPChange,MushTwoEXPInit, MushThree, MushThreeEXP, MushThreeNameChange, MushThreeEXPChange, MushThreeEXPInit, MushFour, MushFourEXP, MushFourNameChange, MushFourEXPChange, MushFourEXPInit} = useMushStore(state => state);

    // const [holes, setHoles] = useState(["hole", "hole", "hole", "hole", "hole"]);
    // const [exp, setExp] = useState([0, 0, 0, 0, 0]);
    // const [max, setMax] = useState([10, 10, 10, 10, 10]);

    const HoleStore = () => {
        return (
            <div style={{width:"40px"}}></div>
        )
    }

    const ImgSpore = () => {
        return(
            <img src={Poja} width="40px" />
        )
    }

    const ImgBaby = () => {
        return(
            <img src={Mush01} width="40px" />
        )
    }

    // const ImgAdult = () => {
    //     return(
    //         <img src={Mush02} width="40px" />
    //     )
    // }

    const MushHarvest = (index) => {
        if(index==0){
            console.log("0 click");
            MushOneNameChange("hole");
            MushOneEXPInit();
        }
        if(index==1){
            console.log("1 click");

            MushTwoNameChange("hole");
            MushTwoEXPInit();
        }
        if(index==2){
            console.log("2 click");

            MushThreeNameChange("hole");
            MushThreeEXPInit();
        }
        if(index==3){
            console.log("3 click");

            MushFourNameChange("hole");
            MushFourEXPInit();
        }
    }

    const holeStateImage = (index) => {
        if(index==0){
            if (MushOne == "hole") {
                return (<HoleStore />);
            } else if (MushOne == "spore") {
                return (<ImgSpore />);
            } else if (MushOne == "baby") {
                return (<ImgBaby />);
            } else if (MushOne == "adult") {
                return (<img src={Mush02} width="40px" onClick={() => MushHarvest(0)}/>);
            }
        }
        if(index==1){
            if (MushTwo == "hole") {
                return (<HoleStore />);
            } else if (MushTwo == "spore") {
                return (<ImgSpore />);
            } else if (MushTwo == "baby") {
                return (<ImgBaby />);
            } else if (MushTwo == "adult") {
                return (<img src={Mush02} width="40px" onClick={() => MushHarvest(1)}/>);
            }
        }
        if(index==2){
            if (MushThree == "hole") {
                return (<HoleStore />);
            } else if (MushThree == "spore") {
                return (<ImgSpore />);
            } else if (MushThree == "baby") {
                return (<ImgBaby />);
            } else if (MushThree == "adult") {
                return (<img src={Mush02} width="40px" onClick={() => MushHarvest(2)}/>);
            }
        }
        if(index==3){
            if (MushFour == "hole") {
                return (<HoleStore />);
            } else if (MushFour == "spore") {
                return (<ImgSpore />);
            } else if (MushFour == "baby") {
                return (<ImgBaby />);
            } else if (MushFour == "adult") {
                return (<img src={Mush02} width="40px" onClick={() => MushHarvest(3)}/>);
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