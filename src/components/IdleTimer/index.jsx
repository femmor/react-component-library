import React, {useRef, useState} from 'react';
import { Container, Row, Button } from "react-bootstrap"
import ReactModal from "react-modal"

import IdleTimer from "react-idle-timer"

ReactModal.setAppElement("#root")
const IdleTimerContainer = () => {

    const [ isLoggedIn, setIsLoggedIn ] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)

    const idleTimerRef = useRef(null)
    const sessionTimeoutRef = useRef(null)

    const handleIdle = () => {
        setModalOpen(true)
        sessionTimeoutRef.current = setTimeout(handleLogout, 5000)
    }

    const handleStayActive = () => {
        setModalOpen(false)
        clearTimeout(sessionTimeoutRef.current)
    }

    const handleLogout = () => {
        setModalOpen(false)
        setIsLoggedIn(false)
        clearTimeout(sessionTimeoutRef.current)
    }

    

    return (
        <Container>
            <Row className="my-5">
                { isLoggedIn ? (<h2>Hello Emmanuel!</h2>) : (<h2>Hello Guest!</h2>) }
            <IdleTimer 
                ref={idleTimerRef}  
                timeout={5 * 1000} 
                onIdle={handleIdle}>
            </IdleTimer>
            <ReactModal 
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: "grey"
                    }
                }}
            >
                <div className="text-center">
                    <h2>You've been idle for a while</h2>
                    <p>You will be logged out soon!</p>
                    <div>
                        <Button variant="danger" onClick={handleLogout}>Log me out</Button>
                        <Button variant="success" onClick={handleStayActive}>Keep me signed in</Button>
                    </div>
                </div>
            </ReactModal>
        </Row>
        </Container>
    );
}

export default IdleTimerContainer;
