// Adapted from https://stackoverflow.com/a/54911693
import { Component } from 'react';
import ReactDOM from 'react-dom';
import propTypes from "prop-types";

export default class Title extends Component {

    constructor(props) {
        super(props);
        this.titleEl = document.getElementsByTagName("title")[0];
    }

    static propTypes = {
        pageTitle: propTypes.string,
        siteTitle: propTypes.string
    };

    static defaultProps = {
        pageTitle: null,
        siteTitle: "Okanjo Boilerplate", // TODO: change app title
    };

    render() {
        const { pageTitle, siteTitle } = this.props;
        let fullTitle;
        if (pageTitle) {
            fullTitle = pageTitle + " - " + siteTitle;
        } else {
            fullTitle = siteTitle;
        }

        return ReactDOM.createPortal(
            fullTitle || "",
            this.titleEl
        );
    }
}