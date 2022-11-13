import React from "react";

const GlobalModal = ({children}) => {
    const style = {
        border: '1px solid black',
        borderRadius: '16px',
    };

    return(
        <div style={style}>
            {children}
        </div>
    )
}

export default GlobalModal;