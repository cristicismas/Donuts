import React from 'react';
import {AutoForm, AutoField, ErrorField, ErrorsField} from 'uniforms-unstyled';
import {DonutRadio} from './DonutRadio'
import DonutsSchema from '/imports/db/donuts/schema';
import '../../css/DonutsCreate.css';

export default class DonutsCreate extends React.Component {
    constructor() {
        super();

        this.state = {
            donutImages: [
                '/images/donut-1.jpg',
                '/images/donut-2.jpg',
                '/images/donut-3.jpg'
            ]
        };
    }

    onSubmit = (data) => {
        const { donutImages } = this.state;

        const activeDonutIndex = this.findActiveDonutIndex();
        const activeDonut = activeDonutIndex ? donutImages[activeDonutIndex] : '';

        const submitData = {
            ...data, 
            imageUrl: activeDonut
        };

        Meteor.call('donut.create', submitData, (err) => {
            if (!err) {
                FlowRouter.go('donuts');
            }
        });
    };

    makeActive = donutIndex => {
        images = document.getElementsByClassName('donut-image');

        for (let i = 0; i < images.length; i++) {
            if (i === donutIndex) {
                images[i].classList.add('active');
            } else {
                images[i].classList.remove('active');
            }
        }
    }

    findActiveDonutIndex = () => {
        const donuts = document.getElementsByClassName('donut-image');
        
        let index = null;

        for (let i = 0; i < donuts.length; i++) {
            if (donuts[i].classList.contains('active')) {
                index = i;
                break;
            }
        }

        return index;
    }

    render() {
        const { donutImages } = this.state;

        return (
            <main>
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit} id='create-donut-form'>
                    <h1 className="form-title">Add a donut</h1>

                    <h4 className="radio-title">Select a donut:</h4>
                    <DonutRadio donuts={donutImages} makeActive={index => this.makeActive(index)}/>

                    <AutoField name="name"/>
                    <ErrorField name="name"/>

                    <AutoField name="price"/>
                    <ErrorField name="price"/>

                    <AutoField name="isComestible"/>
                    <ErrorField name="isComestible"/>

                    <button type="submit" className="fill-space">
                        Create donut
                    </button>
                </AutoForm>
            </main>
        )
    }
}