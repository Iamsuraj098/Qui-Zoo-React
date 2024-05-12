import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import QnaAnimal from '../Data/QnaAnimal';
import ScoreCards from './ScoreCards';

export default function Cards(props) {
    let QuestionSet = QnaAnimal[props.QuizNo];
    let [flag, setFlag] = useState(false);
    let [index, setIndex] = useState(0);
    let [Question, setQuestion] = useState(QuestionSet[index]);
    let [Result, setResult] = useState(0);
    let [timeLeft, setTimeLeft] = useState(120);

    const checkAns = (e, ans) => {
        if (!flag) {
            if (Question.result === ans) {
                document.querySelector("#opt" + ans).style.backgroundColor = "green";
                setResult(Result + 1);
            } else {
                document.querySelector("#opt" + ans).style.backgroundColor = "red";
                document.querySelector("#opt" + Question.result).style.backgroundColor = "green";
            }
            setFlag(true);
        }
    }

    const increment = () => {
        if (index < 5) {
            setQuestion(QuestionSet[index + 1]);
        }
        setIndex(index + 1);
        setFlag(false);
        if (index === 0) {
            startTimer();
        }
        document.getElementById("opt1").removeAttribute("style")
        document.getElementById("opt2").removeAttribute("style");
        document.getElementById("opt3").removeAttribute("style")
        document.getElementById("opt4").removeAttribute("style");   
    }

    const startTimer = () => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime === 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        if(minutes == 0 && seconds == 0 && index != 4) setIndex(5);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    return (
        <>
            {index < 5 ? (
                index === 0 ? (
                    <Container fluid className='mt-5' style={{overflow: 'hidden'}}>
                        <Row className="justify-content-center" style={{ marginTop: '0%', overflow: 'hidden' }}>
                            <Card className="text-center justify-content-center" style={{ margin: "0.7%", width: '99%', height: '91vh', backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', overflow: 'hidden' }}>
                                <Card.Body style={{ width: '30%', margin: '5% 0% 10% 35%', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                                    <Card.Title className="text-decoration-underline fs-3 fw-semibold">{props.title} Qui-Zoo</Card.Title>
                                    <Button style={{ width: '50%' }} variant="primary mt-3" size="lg" onClick={increment}>Start Quiz</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                ) : (
                    <Container fluid className='mt-5' style={{ overflow: 'hidden' }}>
                        <Row className="justify-content-center" style={{ marginTop: '0%', overflowY: 'hidden' }}>

                            <Card className="text-center justify-content-center" style={{ margin: "0.7%", width: '99%', height: '91vh', backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', overflow: 'hidden' }}>

                                <Card.Body style={{ width: '30%', margin: '5% 0% 10% 35%', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                                    <Card.Title className="text-decoration-underline fs-3 fw-semibold">{props.title} Qui-Zoo</Card.Title>
                                    <Card.Text key={Question.ques} className="fs-2">{Question.ques}</Card.Text>
                                    <ButtonGroup vertical style={{ width: '80%' }}>
                                        <ButtonGroup vertical style={{ width: '100%' }}>
                                            <Button id="opt1" variant="secondary mt-2" size="lg" onClick={(e) => checkAns(e, 1)}>{Question.opt1}</Button>
                                            <Button id="opt2" variant="secondary mt-2" size="lg" onClick={(e) => checkAns(e, 2)}>{Question.opt2}</Button>
                                            <Button id="opt3" variant="secondary mt-2" size="lg" onClick={(e) => checkAns(e, 3)}>{Question.opt3}</Button>
                                            <Button id="opt4" variant="secondary mt-2" size="lg" onClick={(e) => checkAns(e, 4)}>{Question.opt4}</Button>
                                        </ButtonGroup>
                                    </ButtonGroup>
                                    <Button style={{ width: '50%' }} variant="primary mt-3" size="lg" onClick={increment}>Next</Button>
                                    <div className="timer text-dark" id="timer">Time Left: {formatTime(timeLeft)}</div>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                )
            ) : (
                <ScoreCards score={Result} QuizNo={props.QuizNo} title={props.title} />
            )}
        </>
    );
}

