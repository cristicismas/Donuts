import React from 'react';
import { AutoForm, AutoField, ErrorField } from 'uniforms-unstyled';
import { DonutRadio } from './DonutRadio'
import DonutsSchema from '/imports/db/donuts/schema';
import '../../css/DonutsCreate.css';
import IsComestible from './IsComestible';

export default class DonutsCreate extends React.Component {
    constructor() {
        super();

        this.state = {
            donutImages: [
                '/images/donut-1.jpg',
                '/images/donut-2.jpg',
                '/images/donut-3.jpg'
            ],
            selectedDonutImage: '',
            isComestible: true
        };
    }

    onSubmit = data => {
        const { selectedDonutImage, isComestible } = this.state;

        const imageUrl = selectedDonutImage;

        const submitData = {
            ...data, 
            imageUrl,
            isComestible
        };

        Meteor.call('donut.create', submitData, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
        });
    };

    handleImageSelection = index => {
        const { donutImages } = this.state;
        this.setState({ selectedDonutImage: donutImages[index] });
    }

    render() {
        const { donutImages, selectedDonutImage, isComestible } = this.state;

        return (
            <main>
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit} id='create-donut-form'>
                    <h1 className="form-title">Add a donut</h1>
                    <h4 className="form-subtitle">don't take too long</h4>

                    <div className="form-group">
                        <h4 className="radio-title">Select a donut:</h4>
                        <DonutRadio 
                            donuts={donutImages} 
                            selectedImage={selectedDonutImage}
                            selectedBorderColor='#ccc'
                            handleImageSelection={url => this.handleImageSelection(url)} />
                    </div>

                    <div className="form-group">
                        <AutoField name="name"/>
                        <ErrorField name="name" className="error"/>
                    </div>

                    <div className="form-group">
                        <AutoField name="price"/>
                        <ErrorField name="price" className="error"/>  
                    </div>

                    <IsComestible isComestible={isComestible} handleChange={isComestible => this.setState({ isComestible })} />

                    <button type="submit" className="fill-space">
                        Create donut
                    </button>
                </AutoForm>
            </main>
        );
    }
}