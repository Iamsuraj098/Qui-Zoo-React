import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Cards from './Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function ScoreCards(props) {
    return (
        <>
            < Container fluid="md" className='mt-5' >
                <Row className="justify-content-md-center" style={{ border: "none", marginTop: '10%' }}>
                    <Card className="justify-content-md-center text-center" style={{ width: '25rem', }}>
                        <Card.Body style={{ width: '100%' }}>
                            <Card.Title className="text-decoration-underline fs-3 fw-semibold">Animal Qui-Zoo Result</Card.Title>
                            <Card.Text className="fs-2" >{props.score}/5</Card.Text>
                            <Card.Text className="fs-3" >Keep Practice</Card.Text>
                            <Button style={{ width: '50%' }} variant="primary mt-3" size="lg" onClick={() => { location.reload() }} >Play Again</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container >
        </>
    )
}