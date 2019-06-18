import React, { Component } from 'react';

export class DonutRadio extends Component {
    render() {
        const donuts = this.props.donuts.map((image, index) => (
            <img
                src={image}
                className="donut-image"
                key={`donut-image-${index}`}
                onClick={() => this.props.makeActive(index)}
            />
        ));

        return <div id="donut-radio">{donuts}</div>;
    }
}

export default DonutRadio;
