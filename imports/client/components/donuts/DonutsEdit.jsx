import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';
import '../../css/DonutsEdit.css';

import DonutRadio from './DonutRadio';
import IsComestible from './IsComestible';

export default class DonutsEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            donut: null,
            donutImages: [
                '/images/donut-1.jpg',
                '/images/donut-2.jpg',
                '/images/donut-3.jpg'
            ],
            selectedDonutImage: '',
            isComestible: true,
            loading: true
        }
    }

    componentDidMount() {
        Meteor.call('donut.find', this.props.donutId, (err, donut) => {
            this.setState({
                donut,
                selectedDonutImage: donut.imageUrl,
                loading: false
            })
        })
    }

    onSubmit = (data) => {
        const { selectedDonutImage, isComestible } = this.state;

        const imageUrl = selectedDonutImage;

        const submitData = {
            ...data, 
            imageUrl,
            isComestible
        };

        Meteor.call('donut.edit', this.props.donutId, submitData, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
                this.props.closeOverlay();
            }
        });
    }

    handleImageSelection = index => {
        const { donutImages } = this.state;
        this.setState({ selectedDonutImage: donutImages[index] });
    }

    render() {
        const {loading, donut, donutImages, selectedDonutImage} = this.state;

        if (loading) {
            return <div>Loading...</div>
        }
        
        return (
            <section id="donuts-edit">
                <h2 className="form-title">Edit your Donut!</h2>

                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit} model={donut}>
                    <div className="form-group">
                        <h4 className="radio-title">Select a donut:</h4>
                        <DonutRadio
                            donuts={donutImages} 
                            selectedBorderColor='#440e62'
                            selectedImage={selectedDonutImage}
                            handleImageSelection={url => this.handleImageSelection(url)} />
                    </div>

                    <div className="form-group">
                        <AutoField name="name"/>
                        <ErrorField name="name"/>
                    </div>

                    <div className="form-group">
                        <AutoField name="price"/>
                        <ErrorField name="price"/>  
                    </div>

                    <IsComestible isComestible={donut.isComestible} handleChange={isComestible => this.setState({ isComestible })} />

                    <button type="submit" className="fill-space">
                        Edit donut
                    </button>
                </AutoForm>
            </section>
        )
    }
}