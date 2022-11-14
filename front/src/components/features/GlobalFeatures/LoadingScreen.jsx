import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const LoadingScreen = () => {
    return(
        <div className="LoadingScreenContainer">
            <Spinner animation="border" variant="warning" />
        </div>
    )
}

export default LoadingScreen;