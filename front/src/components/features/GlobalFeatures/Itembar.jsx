import React, {useState} from "react";
import Poja from '../../../assets/poja.png';
import Mush02 from '../../../assets/mush02.png';

const Itembar = ({handleMode}) => {

    // const[item, setItem] = useState([3,4]);

    // const [holes, setHoles] = useState(["hole", "hole", "hole", "hole", "hole"])

    const handleElement = (val) => {
        handleMode(val);
    }

    const PojaItem = () => {
        return(
            <img src={Poja} style={{width:"58px"}} onClick={() => handleElement("poja")} />
        )
    }

    const BigMushItem = () => {
        return(
            <img src={Mush02} style={{width:"58px"}} onClick={() => handleElement("bigmush")} />
        )
    }

    return(
        <div className="Itembar">
            <div className="ItemElement"><PojaItem /></div>
            <div className="ItemElement"><BigMushItem /></div>
            <div className="ItemElement"></div>
            <div className="ItemElement"></div>
            <div className="ItemElement"></div>
        </div>
    )
}

export default Itembar;