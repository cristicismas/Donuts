import React, {Component, Fragment} from 'react';
import '../../css/Auth.css';

import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';
import Login from '../../components/users/Login';
import Register from '../../components/users/Register';

class Auth extends Component {
    render() {
        return (
            <Fragment>
                <Header />

                <main id="auth">
                    <h1 id="welcome-message">Welcome!</h1>

                    <div className="forms">
                        <Login />
                        <Register />
                    </div>
                </main>

                <Footer />
            </Fragment>
        )
    }
}

export default Auth;
