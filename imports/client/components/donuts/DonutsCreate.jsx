import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import {DonutRadio} from './DonutRadio'
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
            isComestible: true
        };
    }

    onSubmit = (data) => {
        const { donutImages, isComestible } = this.state;

        const activeDonutIndex = this.findSelectedDonutIndex();
        const activeDonut = donutImages[activeDonutIndex];

        const submitData = {
            ...data, 
            imageUrl: activeDonut,
            isComestible
        };

        Meteor.call('donut.create', submitData, (err) => {
            if (!err) {
                FlowRouter.go('donuts');
            }
        });
    };

    makeSelected = donutIndex => {
        images = document.getElementsByClassName('donut-image');

        for (let i = 0; i < images.length; i++) {
            if (i === donutIndex) {
                images[i].classList.add('selected');
            } else {
                images[i].classList.remove('selected');
            }
        }
    }

    findSelectedDonutIndex = () => {
        const donuts = document.getElementsByClassName('donut-image');
        
        let index = null;

        for (let i = 0; i < donuts.length; i++) {
            if (donuts[i].classList.contains('selected')) {
                index = i;
                break;
            }
        }

        return index;
    }

    render() {
        const { donutImages, isComestible } = this.state;

        return (
            <main>
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit} id='create-donut-form'>
                    <h1 className="form-title">Add a donut</h1>
                    <h4 className="form-subtitle">don't take too long</h4>

                    <div className="form-group">
                        <h4 className="radio-title">Select a donut:</h4>
                        <DonutRadio donuts={donutImages} makeSelected={index => this.makeSelected(index)}/>
                    </div>

                    <div className="form-group">
                        <AutoField name="name"/>
                        <ErrorField name="name"/>
                    </div>

                    <div className="form-group">
                        <AutoField name="price"/>
                        <ErrorField name="price"/>  
                    </div>

                    <IsComestible handleChange={isComestible => this.setState({ isComestible })} />

                    <button type="submit" className="fill-space">
                        Create donut
                    </button>
                </AutoForm>
            </main>
        )
    }
}