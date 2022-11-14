import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StartButton from "../components/features/StartComponents/StartButton";
import StartImage from "../components/layouts/StartLayouts/StartImage";
import StartTitle from "../components/layouts/StartLayouts/StartTitle";
import StartWalletFlow from "../components/features/StartComponents/StartWalletFlow";

const StartPage = () => {

    const [mode, setMode] = useState("start01");
    
    const handleMode = (value) => {
        setMode(value);
    }

    const TitlePage = () => {
        return(
            <Container>
                <Row>
                    <StartTitle />
                </Row>
                <Row>
                    <Col>
                        <StartImage />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StartButton handleMode = {handleMode}/>
                    </Col>
                </Row>
            </Container>
        )
    }

    const Page = () => {
        if(mode=="start01") {
            return(
                <TitlePage />
            )
        }
        else if(mode=="start02"){
            return(
                <StartWalletFlow />
            )
        }
    }

    return (
        <>
            {Page()}
        </>
    )
}

export default StartPage;