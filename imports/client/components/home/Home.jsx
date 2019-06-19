import React, {Component, Fragment} from 'react';
import '../../css/Home.css';

import Header from './Header';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main id="home">
                    <section id="hero">
                        <div className="hero-text">
                            <h3 className="hero-title">Best donut in the city!</h3>
                            <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat felis sit amet libero mattis, ac tempus justo dictum. Quisque lacinia pretium tellus eu dapibus. Integer lacinia orci risus, imperdiet lobortis ipsum semper at.</p>
                            <button id="scroll-down-arrow" onClick={() => {
                                document.getElementById('features').scrollIntoView({behavior: "smooth"});
                            }}>
                                <img src="/images/arrow.png" />
                            </button>
                        </div>
                    </section>

                    <section id="features">
                        <div className="feature">
                            <h3 className="feature-title">Aliquam pulvinar ex varius, sagittis. </h3>
                            <p className="feature-text">Nulla facilisi. Proin ullamcorper est a pretium pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu scelerisque est. Duis sodales hendrerit ipsum, quis pharetra nulla placerat a.</p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title">Phasellus a hendrerit est. Duis. </h3>
                            <p className="feature-text">Aenean vulputate neque erat, ut vestibulum augue elementum id. Vestibulum ac commodo nisi. Nullam sed ornare dui, nec posuere tortor. Vestibulum orci est, imperdiet id enim at, tincidunt laoreet ipsum. </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title">Proin nec tristique justo, ut. </h3>
                            <p className="feature-text">Pellentesque in urna a tortor pretium euismod. Maecenas venenatis commodo dolor a feugiat. Vestibulum sollicitudin sapien et ante sagittis rutrum. Cras sed pellentesque justo, sit amet dapibus est. Duis vel enim vel sapien luctus pharetra eget vitae orci.</p>
                        </div>
                    </section>
                </main>
                <Footer />
            </Fragment>
        )
    }
}

export default Home;
