import React, { Fragment } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Donuts} from '/imports/db';
import '../../css/DonutsList.css';

import Overlay from '../home/Overlay';
import DonutsEdit from './DonutsEdit';

class DonutsList extends React.Component {
    constructor() {
        super();

        this.state = {
            showDonutEditOverlay: false,
            donutToEditId: null
        };

        this.removeDonut = this.removeDonut.bind(this);
        this.editDonut = this.editDonut.bind(this);
    }

    isDonutOwner = (donut) => {
        return donut.userId === Meteor.userId()
    };

    editDonut = (_id) => {
        this.setState({
            showDonutEditOverlay: true,
            donutToEditId: _id
        });
    };

    closeEditOverlay = () => {
        this.setState({
            showDonutEditOverlay: false,
            donutToEditId: null
        });
    }

    removeDonut = (_id) => {
        Meteor.call('donut.remove', _id);
    };

    render() {
        const {showDonutEditOverlay, donutToEditId} = this.state;
        const {isLoading, donuts} = this.props;

        if (isLoading) {
            return <div>Loading...</div>
        }

        const EditOverlay = showDonutEditOverlay ? (
            <Overlay closeOverlay={this.closeEditOverlay}>
                <DonutsEdit donutId={donutToEditId} closeOverlay={this.closeEditOverlay} />
            </Overlay>
        ) : null;

        return (
            <Fragment>
                {EditOverlay}
                <div id="donuts-list">
                    {
                        donuts.map(donut => {
                            const donutDate = donut.createdAt.toLocaleDateString();
                            return (
                                <div key={donut._id} className="donut-item">
                                    <div className="left-side side">
                                        {
                                            donut.imageUrl &&
                                            <img className="donut-image" src={donut.imageUrl} />
                                        }
                                        <div className="donut-info">
                                            <p className="donut-name">{donut.name}</p>
                                            <p className="donut-date">{donutDate}</p>
                                        </div>
                                    </div>

                                    <div className="right-side side">
                                        <p className="donut-price">{donut.price}</p><img className="icon donut-price-icon" src="/images/dollar-icon.png" />
                                        <div className="donut-comestible">
                                            {
                                                donut.isComestible ? (
                                                    <img className="icon donut-comestible-icon" src="/images/check-icon.png" />
                                                ) : <div className="icon-placeholder donut-comestible-icon" />
                                            }
                                        </div>

                                        <div className="action-buttons">
                                            {this.isDonutOwner(donut) &&
                                            <a href="" onClick={() => this.editDonut(donut._id)}><img className="icon action-icon" src="/images/pen-icon.png" /></a>}

                                            {this.isDonutOwner(donut) &&
                                            <a href="" onClick={() => this.removeDonut(donut._id)}><img className="icon action-icon" src="/images/trash-icon.png" /></a>}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default withTracker(() => {
    const handle = Meteor.subscribe('donuts');

    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
})(DonutsList);

