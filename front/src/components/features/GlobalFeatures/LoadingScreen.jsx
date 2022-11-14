import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const LoadingScreen = ({display}) => {
    console.log(display);
    return(
        <div className="LoadingScreenContainer" style={{position:"absolute", width:"100%", height:"100%", backgroundColor: "#00000099", zIndex: "100", display: display}}>
            <Spinner animation="border" variant="warning" style={{position: "absolute", top:"50%", left:"50%"}} />
        </div>
    )
}


export default LoadingScreen;