import React from "react";
import { useNavigate  } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const GoBackButton = () => {
    
    const navigate = useNavigate();

    return(
        <div>
            <button
                className="GoBackButton"
                onClick={() => {
                    navigate('/growing');
                }}
            >
                <MdOutlineArrowBackIosNew size={24}/>                
            </button>
        </div>
    )
}

export default GoBackButton;