import React, { Component } from 'react';
import '../../css/DonutRadio.css';

export class DonutRadio extends Component {
    makeSelected = donutIndex => {
        this.props.handleImageSelection(donutIndex);
    }

    render() {
        const {selectedImage, selectedBorderColor} = this.props;

        const donuts = this.props.donuts.map((image, index) => {
            const style = image === selectedImage ? {
                border: `2px solid ${selectedBorderColor}`
            } : null;

            return (
                <img
                    src={image}
                    className='donut-image'
                    style={style}
                    key={`donut-image-${index}`}
                    onClick={() => this.makeSelected(index)}
                />
            )
        });

        return <div id="donut-radio">{donuts}</div>;
    }
}

export default DonutRadio;
