"use strict";

import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import {Col, Container, Row} from "react-bootstrap";

// noinspection JSUnusedLocalSymbols
const mapStateToProps = (state) => {
    return { };
};

class Page2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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

export default withRouter(connect(mapStateToProps)(Page2));
