import React, { Component } from 'react';


class InputField extends Component {

    render() {
        return (
            <div className="InputField">
                <label>{this.props.name}</label>
                <input name={this.props.name} onChange={this.props.handleChange}></input>
            </div>
        )
    }
}

export default InputField