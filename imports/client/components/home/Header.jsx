import React, {Component} from 'react';
import '../../css/Header.css';

import Notifications from './Notifications';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>donut</h1>
                <Notifications />
            </header>
        )
    }
}

export default Header;