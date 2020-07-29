import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Container, Button, Row, Col } from "react-bootstrap"

ReactModal.setAppElement("#root")
const Modal = () => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false)

    return (
        <Container>
            <Row>
                <Col className="mb-5">
                <h4>Modal</h4>
                        <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                            style={{
                                overlay: {
                                    backgroundColor: "grey"
                                }
                            }}
                        >
                            <h3>Modal Title</h3>
                            <p>Modal Body</p>
                        </ReactModal>
                        <Button variant="primary" onClick={() => setModalIsOpen(true)}>Click for Modal Popup</Button>
                    <hr/>
                </Col>
            </Row>
        </Container>
    );
}

export default Modal;
