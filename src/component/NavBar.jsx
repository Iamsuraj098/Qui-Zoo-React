import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cards from './Cards';

function NavBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand>Qui-Zoo</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/home'>Home</Nav.Link>
                            <Nav.Link href='/Animal'>Animal</Nav.Link>
                            <Nav.Link href='/Science'>Science</Nav.Link>
                            <Nav.Link href='/Maths'>Maths</Nav.Link>
                            <Nav.Link href='/India'>India</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;