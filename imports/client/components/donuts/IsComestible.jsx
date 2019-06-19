import React, { Component } from 'react';

export class IsComestible extends Component {
    render() {
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
                        defaultChecked
                        onClick={() => this.props.handleChange(true)} />
                </div>

                <div className="radio-group">
                    <label htmlFor="is-comestible">No</label>
                    <input 
                        type="radio" 
                        name="is-comestible" 
                        value="no"
                        onClick={() => this.props.handleChange(false)} />
                </div>
            </div>
          </div>
        )
    }
}

export default IsComestible;
