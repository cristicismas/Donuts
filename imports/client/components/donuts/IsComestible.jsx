import React from 'react';
import '../../css/IsComestible.css';

export class IsComestible extends React.Component {
    render() {
        const { isComestible } = this.props;

        return (
          <div className="is-comestible-radio">
            <label>Can you eat this?</label>
            <br />
            
            <div className="radios">
                <div className="radio-group">
                    <label htmlFor="is-comestible">Yes</label>
                    <input 
                        type="radio" 
                        name="is-comestible" 
                        value="yes" 
                        defaultChecked={isComestible ? true : false}
                        onClick={() => this.props.handleChange(true)} />
                </div>

                <div className="radio-group">
                    <label htmlFor="is-comestible">No</label>
                    <input 
                        type="radio" 
                        name="is-comestible" 
                        value="no"
                        defaultChecked={isComestible ? false : true}
                        onClick={() => this.props.handleChange(false)} />
                </div>
            </div>
          </div>
        );
    }
}

export default IsComestible;
