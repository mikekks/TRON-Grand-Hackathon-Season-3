import React, { useState } from "react";
import Poja from '../../../assets/poja.png';
import Mush02 from '../../../assets/mush02.png';
import { Modal } from "@mui/material";

const StakingItembar = ({ handleMode }) => {

    // const[item, setItem] = useState([3,4]);
    const [startopen, setStartopen] = useState(false); // 모달 여닫기를 관리하는 상태
    const [completeopen, setCompleteopen] = useState(false); // 모달 여닫기를 관리하는 상태

    const handleStartClose = () => setStartopen(false); // 모달 닫는 함수
    const handleStartOpen = () => setStartopen(true); // 모달 여는 함수

    const handleCompleteClose = () => setCompleteopen(false); // 모달 닫는 함수
    const handleCompleteOpen = () => setCompleteopen(true); // 모달 여는 함수

    // const [holes, setHoles] = useState(["hole", "hole", "hole", "hole", "hole"])

    const handleElement = (val) => {
        // handleMode(val);
    }

    const BigMushItem = () => {
        return (
            <img src={Mush02} style={{ width: "58px", borderRadius: "5px" }} onClick={() => handleElement("bigmush")} />
        )
    }

    const StakingStartModal = () => {
        return (
            <Modal
                open={startopen}
                onClose={handleStartClose}
                disableAutoFocus={true}
            >

            </Modal>
        )
    }

    const StakingCompleteModal = () => {
        return (
            <Modal>

            </Modal>
        )
    }

    return (
        <div className="Itembar">
            <div className="ItemElement"><BigMushItem /></div>
            <div className="ItemElement"><BigMushItem /></div>
            <div className="ItemElement"></div>
            <div className="ItemElement"></div>
        </div>
    )
}

export default StakingItembar;