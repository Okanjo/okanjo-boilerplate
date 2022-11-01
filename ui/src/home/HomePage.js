"use strict";

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {Col, Container, Row} from "react-bootstrap";
import Title from "../common/Title";
import propTypes from "prop-types";

// noinspection JSUnusedLocalSymbols
const mapStateToProps = (state) => {
    return {
        environment: state.app.environment,
        version: state.app.version,
    };
};

class HomePage extends Component {

    static propTypes = {
        environment: propTypes.string,
        version: propTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { environment, version } = this.props;
        return (
            <div>
                <Title pageTitle="Home" />
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>Home Page</h1>
                            <p>This might be the home page of your app.</p>
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
}

export default connect(mapStateToProps)(HomePage);