"use strict";

import React  from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Title from "./Title";

// noinspection JSUnusedLocalSymbols
export default function NotFound(/*props*/) {
    return <div>
        <Container>
            <Row>
                <Col md={12}>
                    <Title pageTitle="Page Not Found"/>
                    <h1>Page Not Found</h1>
                    <p>The page you were looking for is not here :/</p>
                </Col>
            </Row>
        </Container>
    </div>;
}
