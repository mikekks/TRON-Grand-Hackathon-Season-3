import React from "react";
import { Link } from "react-router-dom";

const StartButton = () => {
    return(
        <Link to="/growing" ><button className="StartButton">START</button></Link>
    )
}

export default StartButton;