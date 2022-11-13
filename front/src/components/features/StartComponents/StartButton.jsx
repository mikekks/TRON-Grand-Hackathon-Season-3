import React from "react";
import { Link } from "react-router-dom";

const StartButton = () => {
    return(
        <Link to="/growing" >
            <div className="ButtonClick">
                <button className="StartButton" active={true}>START</button>
            </div>
        </Link>
    )
}

export default StartButton;