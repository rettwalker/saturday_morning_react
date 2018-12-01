import React, { Component } from 'react';
import InputField from '../inputField';

class Login extends Component {

    render() {
        return (
            <div className="Login">
                <InputField name="email" />
            </div>
        )
    }
}

export default Login
