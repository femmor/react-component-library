import React from 'react';
import { toast } from "react-toastify"
import { Container, Button, Row, Col } from "react-bootstrap"
import "react-toastify/dist/ReactToastify.css"

// Initialize the toast 
toast.configure()

const ToastNotification = () => {
    const notify = () => {
        // Default Notification
        // toast("Basic notification!", {position: toast.POSITION.TOP_CENTER}),

        // Success Notification
        // toast.success("Success notification!", {position: toast.POSITION.TOP_CENTER})

        // Warning Notification
        // toast.warn("Warning notification!", {position: toast.POSITION.TOP_CENTER})

        // Info Notification
        // toast.info("Info notification!", {position: toast.POSITION.TOP_CENTER})

        // Error/Danger Notification
        toast.error("Error/Danger notification!", {
            position: toast.POSITION.TOP_CENTER,
            // autoClose: false or any number e.g 7000(7s)
        })
    }
    return (
        <Container>
            <Row>
                <Col className="mb-5">
                    <h4>Toast Notification</h4>
                    <Button variant="primary" onClick={notify}>Notify!</Button>
                    <hr/>
                </Col>
            </Row>
        </Container>
    );
}

export default ToastNotification;
