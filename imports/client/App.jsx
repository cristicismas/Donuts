import React from 'react';
import './css/normailze.css';

export default class App extends React.Component {
    constructor () {
        super();
    }

    render() {
        const {main, routeProps} = this.props;

        return [
            React.createElement(main, {routeProps: routeProps, key: 'main'})
        ]
    }
}