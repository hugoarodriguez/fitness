import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import logo from '../images/empty.png';
import "../components/styles/Navbar.css";
import moresLogoImg from "../images/mores-logo.jfif";
import { AiOutlineUser } from 'react-icons/ai';

const Navbarmenu = () => {

    const myIMG = <span><AiOutlineUser  style={{fontSize: '35px'}}/></span>

    return (
        <React.Fragment>
            <Navbar className="navbar-line"/>
            <Navbar expand="lg" id="navbar-container">
                <Container>
                    <Navbar.Brand href="#home" className="center-vertically" >
                        <img
                            alt=""
                            src={moresLogoImg}
                            width="50"
                            height="50"
                        />{''}
                    </Navbar.Brand>
                    <Navbar.Brand href="#home" className="center-vertically">
                        Pastelería More's
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto center-vertically">
                            <Nav.Link href="/exercise">NUESTRA HISTORIA</Nav.Link>
                            <NavDropdown title={myIMG} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
export default Navbarmenu;