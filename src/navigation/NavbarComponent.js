import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './NavbarComponent.css'
import {useState} from 'react';

function NavbarComponent() {
   
    const [isHoveringHome, setIsHoveringHome] = useState(false);
    const [isHoveringAbout, setIsHoveringAbout] = useState(false);

    const handleMouseEnterHome = () => {
        setIsHoveringHome(true);
    };
    const handleMouseLeaveHome = () => {
        setIsHoveringHome(false);
    };
    const handleMouseEnterAbout = () => {
        setIsHoveringAbout(true);
    };
    const handleMouseLeaveAbout = () => {
        setIsHoveringAbout(false);
    };

    return (
            <div className="navbarDiv" >
            <Navbar className="navbar gradient-custom" fixed="top" variant={"light"} expand="lg">
                <Container>
                    <Navbar.Brand className="navName" href="#home">SEYOUNG REE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto px-2">
                        <Nav.Link href="#home"  style={{color: isHoveringHome ? 'rgb(36,76,112)' : 'rgb(122,139,153)', textTransform: isHoveringHome ? 'uppercase' : '',}} onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}>
                                HOME
                        </Nav.Link>
                        <Nav.Link href="#about" style={{color: isHoveringAbout ? 'rgb(36,76,112)' : 'rgb(122,139,153)',textTransform: isHoveringAbout ? 'uppercase' : '',}} onMouseEnter={handleMouseEnterAbout} onMouseLeave={handleMouseLeaveAbout}>
                                 ABOUT
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
    );
}

export default NavbarComponent;