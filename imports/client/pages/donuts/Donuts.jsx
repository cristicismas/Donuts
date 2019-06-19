import React from 'react';
import '../../css/Donuts.css';

import DonutsCreate from './DonutsCreate';
import DonutsList from './DonutsList';
import DonutsRecent from './DonutsRecent';

class Donuts extends React.Component {
    render() {
        return (
            <main id="donuts">
                <div className="donuts-create-container">
                    <DonutsCreate />
                </div>
                <DonutsList />
                <DonutsRecent />
            </main>
        );
    }
}

export default Donuts;