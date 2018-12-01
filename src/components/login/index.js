import React, { Component } from 'react';
import InputField from '../inputField';

class Login extends Component {

    render() {
        return (
            <div className="Login">
                <InputField name="email" />
                <InputField name="password" />
            </div>
        )
    }
}

export default Login
