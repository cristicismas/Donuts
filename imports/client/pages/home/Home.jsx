import React, {Component, Fragment} from 'react';
import Header from '../../components/Header';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    Welcome!
                    <a href={FlowRouter.url('login')}>Login</a>
                    <a href={FlowRouter.url('register')}>Register</a>
                </main>
            </Fragment>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
