"use strict";

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {Col, Container, Row} from "react-bootstrap";
import Title from "../../../app/Title";

// noinspection JSUnusedLocalSymbols
const mapStateToProps = (/*state*/) => {
    return { };
};

class Page2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Title pageTitle="Page 2" />
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>Page 2</h1>
                            <p>This might be a yet another regular page of your app.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Page2);
