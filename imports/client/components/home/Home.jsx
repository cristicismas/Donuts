import React, {Component, Fragment} from 'react';
import '../../css/Home.css';

import Header from '../../components/home/Header';
import Login from '../../components/users/Login';
import Register from '../../components/users/Register';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main id="home">
                    <h1 id="welcome-message">Welcome!</h1>

                    <div className="forms">
                        <Login />
                        <Register />
                    </div>
                </main>
            </Fragment>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
