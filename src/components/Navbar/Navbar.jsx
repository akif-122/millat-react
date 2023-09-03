import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from "../../assets/images/logo.PNG"

import "./navbar.css"
import { NavLink } from 'react-router-dom'

const TopNav = () => {
    return (
        <>
            {/* <!-- NAVBAR SECTION START --> */}
            <div class="navTop">
                <Navbar expand="md" class="navbar navbar-expand-md navbar-light" id="topNav">
                    <Container>
                        <Navbar.Brand href="#">
                            <img src={Logo} alt="Millat Logo" />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="myNav" />

                        <Navbar.Collapse id="myNav">
                            <Nav class="navbar-nav text-uppercase ms-auto">
                                <li><NavLink to="/" activeClass="active" class={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "nav-link active"}>Home</NavLink></li>
                                <li><NavLink to="/about" class={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "nav-link "}>About Us</NavLink></li>
                                <li><NavLink to="/contact" class={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "nav-link "}>contact us</NavLink></li>
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