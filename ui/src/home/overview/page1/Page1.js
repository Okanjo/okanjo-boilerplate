"use strict";

import React from 'react';

import {useSelector} from 'react-redux';
import {Col, Container, Row} from "react-bootstrap";
import Title from "../../../app/Title";

export default function Page1() {

    const { environment, version } = useSelector(state => {
        const { environment, version } = state.app;
        return { environment, version };
    });

    return (
        <div>
            <Title pageTitle="Page 1" />
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Page 1</h1>
                        <p>This might be a regular page of your app.</p>
                        <p>This component uses the function method with <code>useSelector</code></p>
                        <ul>
                            <li><b>Environment</b>: {environment}</li>
                            <li><b>Version</b>: {version}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}