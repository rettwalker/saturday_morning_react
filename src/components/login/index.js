import React, { Component } from 'react';
import InputField from '../inputField';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        let loginFn = (e) => {
            console.log('hello')
            e.preventDefault()
            return this.props.submitLogin({ email: this.state.email, password: this.state.password })
        }
        return (
            <div className="Login">
                <InputField name="email" handleChange={this.handleChange} />
                <InputField name="password" handleChange={this.handleChange} />
                <button onClick={loginFn} >Login</button>
                <button>Register</button>
            </div>
        )
    }
}

export default Login
