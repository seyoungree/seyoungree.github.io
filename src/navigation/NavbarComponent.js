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
            <Navbar className="navbar  gradient-custom" fixed="top" variant={"light"} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">SEYOUNG REE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="hover-3" style={{color: isHoveringHome ? 'white' : '',}} onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}>
                                 Home 
                        </Nav.Link>
                        <Nav.Link href="#about" style={{color: isHoveringAbout ? 'white' : '',}} onMouseEnter={handleMouseEnterAbout} onMouseLeave={handleMouseLeaveAbout}>
                                 About 
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
            </div>
    );
}

export default NavbarComponent;