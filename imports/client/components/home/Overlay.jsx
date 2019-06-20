import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/Overlay.css';

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        // Make a React Portal so the element renders outside its parent.
        return ReactDOM.createPortal((
            <div className="overlay">
                <div className="overlay-content" role="overlay" aria-label="Edit Donut Overlay">
                    <button 
                        className="close-overlay" 
                        onClick={this.props.closeOverlay}>
                        &#10799;
                    </button>

                    {this.props.children}
                </div>
            </div>
        ), this.el);
    }
}

export default Overlay;