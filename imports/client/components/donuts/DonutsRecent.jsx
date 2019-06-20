import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Donuts } from '/imports/db';
import '../../css/DonutsRecent.css';

import Overlay from '../home/Overlay';
import DonutsEdit from './DonutsEdit';

class DonutsRecent extends React.Component {
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

    isDonutOwner = donut => {
        return donut.userId === Meteor.userId()
    };

    editDonut = _id => {
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

    removeDonut = _id => {
        Meteor.call('donut.remove', _id);
    };

    render() {

        const { showDonutEditOverlay, donutToEditId } = this.state;
        const { donuts } = this.props;

        const EditOverlay = showDonutEditOverlay ? (
            <Overlay closeOverlay={this.closeEditOverlay}>
                <DonutsEdit donutId={donutToEditId} closeOverlay={this.closeEditOverlay} />
            </Overlay>
        ) : null;
        
        const recentDonuts = donuts.slice(donuts.length - 3, donuts.length);

        const donutsToRender = recentDonuts.map(donut => {
            const donutDate = donut.createdAt.toLocaleDateString();

            return (
                <div key={donut._id} className="donut-item">
                    {
                        donut.imageUrl &&
                        <img className="donut-image" src={donut.imageUrl} />
                    }
                    <div className="donut-info">
                        <p className="donut-name">{donut.name}</p>
                        <p className="donut-date">{donutDate}</p>
                    </div>
    
                    <div className="donut-price-and-actions">
                        <div className="left-side">
                            <p className="donut-price">{donut.price}</p>
                            <img className="icon donut-price-icon" src="/images/dollar-icon.png" />
                        </div>

                        <div className="right-side">
                            {this.isDonutOwner(donut) &&
                            <a href="" onClick={() => this.editDonut(donut._id)}><img className="icon action-icon" src="/images/pen-icon.png" /></a>}

                            {this.isDonutOwner(donut) &&
                            <a href="" onClick={() => this.removeDonut(donut._id)}><img className="icon action-icon" src="/images/trash-icon.png" /></a>}
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <section id="recent-donuts">
                {EditOverlay}
                {donutsToRender}
            </section>
        );
    }
}


export default withTracker(() => {
    const handle = Meteor.subscribe('donuts');

    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
})(DonutsRecent);
