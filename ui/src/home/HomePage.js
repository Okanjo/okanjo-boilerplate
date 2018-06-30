"use strict";

import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import {Col, Grid, Row} from "react-bootstrap";

// noinspection JSUnusedLocalSymbols
const mapStateToProps = (state) => {
    return { };
};

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <h1>Home Page</h1>
                            <p>This might be the home page of your app.</p>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(HomePage));