import React, {Component} from 'react';
import '../../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <div className="flex">
                    <p>Don't forget to call for a donut or subscribe!</p>
                    <div className="contact">
                        <p id="phone-number">+ 008 045 0477 045</p>
                        <div className="fill-space email-group">
                            <input type="email" name="email" id="email" placeholder="Email" />
                            <button id="subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
                <h4 className="trademark">donut</h4>
            </section>
        )
    }
}

export default Footer;
