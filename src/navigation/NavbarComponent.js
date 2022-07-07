import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import Home from '../Home'
import About from '../About'
import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Link
} from "react-router-dom"
import './NavbarComponent.css'
import "@fontsource/shizuru";

function NavbarComponent() {
    return (
        <Router>
            <div className="navbarDiv">
            <Navbar className="navbar"  variant={"light"} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">SEYOUNG REE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}> Home </Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <div>
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                </Routes>
            </div>
            </Router>
    );
}

export default NavbarComponent;