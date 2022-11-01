"use strict";

import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {URL_PATHS} from "../constants";
import LinkContainer from "../common/LinkContainer";

// noinspection JSUnusedLocalSymbols
export default function Header(/*props*/) {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="md">
            <Container>
                <LinkContainer to={URL_PATHS.ROOT} exact>
                    <Navbar.Brand>Okanjo Boilerplate</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav activeKey={"no-dup-active-classes"}>
                        <LinkContainer to={URL_PATHS.PAGE_1}>
                            <Nav.Link eventKey={URL_PATHS.PAGE_1}>Page 1</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={URL_PATHS.PAGE_2}>
                            <Nav.Link eventKey={URL_PATHS.PAGE_2}>Page 2</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item>Something else here</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto" activeKey={"no-dup-active-classes"}>
                        <LinkContainer to="/bogus-page">
                            <Nav.Link eventKey={'/bogus-page'} href="#">
                                Bogus Link
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/bogus-page2">
                            <Nav.Link eventKey={'/bogus-page2'} href="#">
                                Link Right
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
