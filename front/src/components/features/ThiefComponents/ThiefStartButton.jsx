import React from "react";
import { Modal } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";

const ThiefStartButton = ({handleMode}) => {

    const [open, setOpen] = useState(false); // 모달 여닫기를 관리하는 상태

    const handleClose = () => setOpen(false); // 모달 닫는 함수
    const handleOpen = () => setOpen(true); // 모달 여는 함수

    const ThiefInputButton = () => {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                disableAutoFocus={true}
            >
                <Box className="WalletModalBox">
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Steal Input</span>
                        <button className="WalletModalCloseButton" onClick={() => handleClose()}>X</button>
                    </div>
                    <br />
                    <div className="ModalContentContainer">
                        <div>How much do you want to STEAL?</div>
                        <div>
                            <input type="text" className="ModalInput"></input>
                        </div>
                    </div>
                    <br />
                    <div className="ModalContentContainer">
                        <div>Where do you want to Steal?</div>
                        <div>
                            <input type="text" className="ModalInput"/>
                        </div>
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <button className="ItemMenuButtonStyleOne" onClick={() => handleMode("yes")}>STEAL</button>
                    </div>
                    <br />
                </Box>
            </Modal>
        )
    }

    return (
        <div className="ThiefStartButtonContainer">
            <button className="ThiefStartButton" onClick={() => handleOpen()}>STEAL</button>
            <ThiefInputButton />
        </div>
    )
}

export default ThiefStartButton;