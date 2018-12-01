import React, { Component } from 'react';
import InputField from '../inputField';

class Login extends Component {

    render() {
        return (
            <div className="Login">
                <InputField name="email" />
                <InputField name="password" />
                <button>Login</button>
                <button>Register</button>
                
            </div>
        )
    }
}

export default Login
