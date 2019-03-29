"use strict";

import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import {Col, Container, Row} from "react-bootstrap";

// noinspection JSUnusedLocalSymbols
const mapStateToProps = (state) => {
    return { };
};

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>Home Page</h1>
                            <p>This might be the home page of your app.</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(HomePage));