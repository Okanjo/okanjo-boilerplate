"use strict";

import React from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

// noinspection JSUnusedLocalSymbols
export default (props) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Okanjo Boilerplate</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/page1">
                    <NavItem href="#">Page 1</NavItem>
                </LinkContainer>
                <LinkContainer to="/page2">
                    <NavItem href="#">Page 2</NavItem>
                </LinkContainer>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <LinkContainer to="/bogus-page">
                    <NavItem eventKey={1} href="#">
                        Bogus Link
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/bogus-page2">
                    <NavItem eventKey={2} href="#">
                        Link Right
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

