import React, { useState } from "react";
import TreeImage from "../../../assets/tree.png";
import Poja from '../../../assets/poja.png';
import Mush02 from '../../../assets/mush02.png';

const Tree = ({mode, handleMode}) => {
    const [holes, setHoles] = useState(["hole", "hole", "hole", "hole", "hole"]);

    const handleHoles = (index) => {
        handleMode("none");
        let temp = holes;
        temp[index] = "poja";
        setHoles(temp);
    }

    return(
        <div className="Tree">
            <img src={TreeImage} className="TreeImage"/>
            {mode=="poja" ?
                <div className="TreeHoles">
                    <div className="TreeHole" onClick={() => handleHoles(0)}></div>
                    <div className="TreeHole" onClick={() => handleHoles(1)}></div>
                    <div className="TreeHole" onClick={() => handleHoles(2)}></div>
                    <div className="TreeHole" onClick={() => handleHoles(3)}></div>
                    <div className="TreeHole" onClick={() => handleHoles(4)}></div>
                </div>
            : <div>
                
            </div>
            }
        </div>
    )
}

export default Tree;