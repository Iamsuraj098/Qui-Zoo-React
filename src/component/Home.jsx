import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
    return (
        <>
            <CardGroup style={{ margin: '7% 2% 0% 2%' }}>
                <Card border="danger" className='border-3' style={{ width: '18rem', height: '14rem', margin: '1%' }}>
                    <Card.Header>About Us</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome to the world of knowledge and fun - Qui-Zoo</Card.Title>
                        <Card.Text>
                            At Qui-Zoo, we believe in the power of learning through play. Our mission is simple yet profound: to make learning engaging, accessible, and enjoyable for everyone, everywhere.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="primary" className='border-3' style={{ width: '18rem', margin: '1%' }}>
                    <Card.Header>Animal</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome to the Animal Kingdom!</Card.Title>
                        <Card.Text>
                            Dive into the fascinating world of creatures great and small with our Animal section on Qui-Zoo!. From the depths of the ocean to the heights of the sky, explore the incredible diversity of life on Earth.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="success" className='border-3' style={{ width: '18rem', margin: '1%' }}>
                    <Card.Header>Science</Card.Header>
                    <Card.Body>
                        <Card.Title>Explore the Marvels of Nature!</Card.Title>
                        <Card.Text>
                            Welcome to the "Science" section on Qui-Zoo!. Get ready to delve into the wonders of the natural world, from the smallest microorganisms to the mightiest predators.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </CardGroup>
            <CardGroup style={{ margin: '3% 2% 0% 2%' }}>
                <Card border="info" className='border-3' style={{ width: '18rem', height: '14rem', margin: '1%' }}>
                    <Card.Header>Maths</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome to the Math Playground!</Card.Title>
                        <Card.Text>
                            Step into the realm of numbers, shapes, and patterns with the "Math" section on Qui-Zoo!. Get ready to exercise your brain and sharpen your mathematical skills in a fun and engaging way!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="warning" className='border-3' style={{ width: '18rem', margin: '1%' }}>
                    <Card.Header>Explore India</Card.Header>
                    <Card.Body>
                        <Card.Title>A Journey Through Culture and History</Card.Title>
                        <Card.Text>
                            Welcome to the "India" section on Qui-Zoo!. Embark on an exhilarating journey through the vibrant tapestry of India's culture, history, and heritage.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="dark" className='border-3' style={{ width: '18rem', margin: '1%' }}>
                    <Card.Header>Qui-Zoo Community</Card.Header>
                    <Card.Body>
                        <Card.Title>Thank You for Being Awesome!</Card.Title>
                        <Card.Text>
                            We extend our heartfelt gratitude to you for being a part of our Quiz-Zoo community. Your enthusiasm, curiosity, and dedication make every quiz a rewarding experience for us and for fellow users.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </CardGroup>
        </>
    )
}
