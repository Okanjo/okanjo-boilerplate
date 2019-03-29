"use strict";

import React  from 'react';
import {Col, Container, Row} from "react-bootstrap";

// noinspection JSUnusedLocalSymbols
export default (props) => (
    <div>
        <Container>
            <Row>
                <Col md={12}>
                    <h1>Page Not Found</h1>
                    <p>The page you were looking for is not here :/</p>
                </Col>
            </Row>
        </Container>
    </div>
);
