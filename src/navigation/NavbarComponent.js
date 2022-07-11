import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './NavbarComponent.css'
import {useState} from 'react';
import Socials from "../Socials";

function NavbarComponent() {
   
    const [isHoveringHome, setIsHoveringHome] = useState(false);
    const [isHoveringAbout, setIsHoveringAbout] = useState(false);
    const [isHoveringProject, setIsHoveringProject] = useState(false);
    const [isHoveringSkills, setIsHoveringSkills] = useState(false);

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
    const handleMouseEnterProject = () => {
        setIsHoveringProject(true);
    };
    const handleMouseLeaveProject = () => {
        setIsHoveringProject(false);
    };
    const handleMouseEnterSkills = () => {
        setIsHoveringSkills(true);
    };
    const handleMouseLeaveSkills = () => {
        setIsHoveringSkills(false);
    };

    return (
            <div className="navbarDiv" >
            <Navbar className="navbar gradient-custom" fixed="top" variant={"light"} expand="lg">
                <Container>
                    <Navbar.Brand className="navName" href="#home">SEYOUNG REE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="me-auto px-2 justify-content-between">
                        <Nav.Link href="#home"  style={{color: isHoveringHome ? '#99FFE0' : '#D6FFF3', textTransform: isHoveringHome ? 'uppercase' : '',}} onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}>
                                HOME
                        </Nav.Link>
                        <Nav.Link href="#about" style={{color: isHoveringAbout ? '#99FFE0' : '#D6FFF3',textTransform: isHoveringAbout ? 'uppercase' : '',}} onMouseEnter={handleMouseEnterAbout} onMouseLeave={handleMouseLeaveAbout}>
                                 ABOUT
                        </Nav.Link>
                        <Nav.Link href="#projects-section" style={{color: isHoveringProject ? '#99FFE0' : '#D6FFF3',textTransform: isHoveringProject ? 'uppercase' : '',}} onMouseEnter={handleMouseEnterProject} onMouseLeave={handleMouseLeaveProject}>
                                 PROJECTS
                        </Nav.Link>
                        <Nav.Link href="#skills-section" style={{color: isHoveringSkills ? '#99FFE0' : '#D6FFF3',textTransform: isHoveringSkills ? 'uppercase' : '',}} onMouseEnter={handleMouseEnterSkills} onMouseLeave={handleMouseLeaveSkills}>
                                 SKILLS
                        </Nav.Link>
                    </Nav>
                    <Socials/>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>


            
            
    );
}

export default NavbarComponent;