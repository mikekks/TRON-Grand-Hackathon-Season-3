import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StartButton from "../components/features/StartComponents/StartButton";
import StartImage from "../components/layouts/StartLayouts/StartImage";
import StartTitle from "../components/layouts/StartLayouts/StartTitle";

const StartPage = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <StartTitle />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StartImage />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StartButton />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default StartPage;