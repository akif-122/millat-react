import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from "../../assets/images/logo.PNG"

import "./navbar.css"
import { NavLink } from 'react-router-dom'

const TopNav = () => {
    return (
        <>
            {/* <!-- NAVBAR SECTION START --> */}
            <div className="navTop">
                <Navbar expand="md" className="navbar-light" id="topNav">
                    <Container>
                        <Navbar.Brand href="#">
                            <img src={Logo} alt="Millat Logo" />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="myNav" />

                        <Navbar.Collapse id="myNav">
                            <Nav className="navbar-nav text-uppercase ms-auto">
                                <li><NavLink to="/" activeclassname="active" className="nav-link">Home</NavLink></li>
                                <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
                                <li><NavLink to="/contact" className="nav-link">contact us</NavLink></li>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            {/* <!-- NAVBAR SECTION END --> */}
        </>
    )
}

export default TopNav