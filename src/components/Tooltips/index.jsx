import React from 'react';
import Tippy from "@tippy.js/react"
import { Container, Button, Row, Col } from "react-bootstrap"
import "tippy.js/dist/tippy.css"

const Tooltips = () => {
    
    return (
        <Container>
            <Row>
                <Col className="mb-5">
                    <h4>Tooltips</h4>
                    <Tippy arrow={false} placement="right" content="Basic Tooltip">
                        <Button variant="primary">Hover</Button>
                    </Tippy>
                    <hr/>
                </Col>
            </Row>
        </Container>
    );
}

export default Tooltips;
