import React, {Component} from 'react';
import '../../css/Header.css';

import Notifications from './Notifications';

class Header extends Component {
    render() {
        const loggedIn = Meteor.userId() ? true : false;

        return (
            <header>
                <a href="/"><h1>donut</h1></a>

                {
                    loggedIn ?
                    (
                        <nav>
                            <Notifications />
                        </nav>
                    ) : (
                        <a href="/login"><h3>Login / Register</h3></a>
                    )
                }
            </header>
        )
    }
}

export default Header;