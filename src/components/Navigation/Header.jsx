import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Component Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                <Nav.Link style={{
                    color: "white",
                    textDecoration: "rgba(255,255,255,.5)"
                }} href="/">
                    Home
                </Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/toast">
                            Toast Notification
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/modal">
                            Modal
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/count-animation">
                            Count Animation
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/tooltips">
                            Toooltips
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/idle-timer">
                            Idle Timer
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
