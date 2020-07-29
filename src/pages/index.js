import React from 'react';
import { Jumbotron, Container } from "react-bootstrap"

// Components
import ToastNotification from "../components/ToastNotification"
import Modal from "../components/Modal"
import Tooltips from "../components/Tooltips"
import CountAnimation from "../components/CountAnimation"
import IdleTimerContainer from "../components/IdleTimer"

const Pages = () => {
    return (
        <Container>
            <Jumbotron className="">
                <h1 className="text-center">Components Library</h1>
            </Jumbotron>
            <ToastNotification/>
            <Modal/>
            <Tooltips/>
            <CountAnimation/>
            <IdleTimerContainer/>
        </Container>
    );
}

export default Pages;
