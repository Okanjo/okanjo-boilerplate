"use strict";

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from "prop-types";

import App from "./App";
import ScrollToTop from "../common/ScrollToTop";
import NotFound from "../common/NotFound";
import Page1 from "../home/overview/page1/Page1";
import Page2 from "../home/overview/page2/Page2";
import HomePage from "../home/HomePage";
import AppCrashed from "./AppCrashed";
import {Fade} from "react-bootstrap";
import withNavigation from "../common/withNavigation";
import {crashApp} from "./AppActions";

class AppFrame extends React.Component {

    static propTypes = {
        dispatch: propTypes.any,
        appCrashed: propTypes.any,
        appDisabled: propTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            appCrashed: false
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { appCrashed: error };
    }

    componentDidCatch(error, errorInfo) {
        const { dispatch } = this.props;
        dispatch(crashApp(error, errorInfo));
        this.setState({
            appCrashed: {
                error,
                errorInfo
            }
        });
    }

    componentDidMount() {
        // TODO: App startup logic here
    }

    getAppStatus(props = this.props) { // eslint-disable-line no-unused-vars
        // TODO: Return app ready state info here
        return { ready: true };
    }

    componentDidUpdate(prevProps) { // eslint-disable-line no-unused-vars
        // Don't do anything at all if we're stuck
        if (this.props.appCrashed || this.state.appCrashed) return;

        // TODO: Do any navigation that might be necessary when app changes state
    }

    render() {
        const { appDisabled } = this.props;

        // Stop the app if dead
        if (this.props.appCrashed || this.state.appCrashed) {
            return <Fade appear={true} in={true} timeout={25}><AppCrashed /></Fade>;
        }

        // Get the current app status
        const { ready } = this.getAppStatus(this.props);

        // Block the app until ready
        if (ready && !appDisabled) {
            return (
                <ScrollToTop>
                    <App>
                        <Routes>
                            {/* Customer process pages */}
                            <Route exact path="/" element={<HomePage/>}/>

                            <Route exact path="/page1" element={<Page1/>}/>
                            <Route exact path="/page2" element={<Page2/>}/>

                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </App>
                </ScrollToTop>
            );
        } else {
            // TODO: Return a page loading state here
            return null;
        }
    }
}

export default withNavigation(connect(state => {
    const { appCrashed, appDisabled } = state.app;
    return { appCrashed, appDisabled };
})(AppFrame));