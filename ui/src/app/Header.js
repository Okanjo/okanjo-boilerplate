"use strict";

import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

// noinspection JSUnusedLocalSymbols
export default function Header(/*props*/) {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="md">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Okanjo Boilerplate</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/page1">
                            <Nav.Link href="#">Page 1</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/page2">
                            <Nav.Link href="#">Page 2</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item>Something else here</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <LinkContainer to="/bogus-page">
                            <Nav.Link eventKey={1} href="#">
                                Bogus Link
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/bogus-page2">
                            <Nav.Link eventKey={2} href="#">
                                Link Right
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
