import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap"
import CountUp, { useCountUp } from "react-countup"

const CountAnimation = () => {

    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration: 5,
        end: 10000,
        startOnMount: false
    })

    return (
        <Container>
            <Row>
                <Col className="mb-5">
                    <h4>Count Animation</h4>
                        <div>
                            <h1>Count up - {countUp}</h1>
                            <Button variant="primary" onClick={start}>Start</Button>
                            <Button variant="warning" onClick={pauseResume}>Pause/Resume</Button>
                            <Button variant="danger" onClick={reset}>Reset</Button>
                            <Button variant="secondary" onClick={() => update(5000)}>Update to 5000</Button>
                        </div>
                        <h1><CountUp start={0} end={1000}/></h1>
                        <h1><CountUp start={500} end={2000} duration={2}/></h1>
                        <h1><CountUp start={0} end={3000} prefix="$" decimals={2}/></h1>
                    <hr/>
                </Col>
            </Row>
        </Container>
    );
}

export default CountAnimation;
