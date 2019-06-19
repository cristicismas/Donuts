import React, {Component, Fragment} from 'react';
import '../../css/Donuts.css';

import DonutsCreate from './DonutsCreate';
import DonutsList from './DonutsList';
import DonutsRecent from './DonutsRecent';
import Header from '../home/Header';
import Footer from '../home/Footer';

class Donuts extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main id="donuts">
                    <div className="donuts-create-container">
                        <DonutsCreate />
                    </div>
                    <DonutsList />
                    <DonutsRecent />
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default Donuts;