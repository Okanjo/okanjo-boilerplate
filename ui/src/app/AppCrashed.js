"use strict";

import React from 'react';

import {Container, Col, Row} from "react-bootstrap";
import Title from "../common/Title";

export default function AppCrashed() {

    return (
        <Container>
            <Row>
                <Col md={12} className="mt-4">
                    <Title pageTitle="Page Not Found"/>
                    <h1>Something Went Wrong :(</h1>
                    <p>Please reload the page and try again!</p>
                </Col>
            </Row>
        </Container>
    );
}