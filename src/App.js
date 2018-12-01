import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { AuthenticateUser } from './services/authentication';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login {submitLogin: this.submitLogin} />
      </div>
    );
  }

  submitLogin = (user) => {
    return AuthenticateUser(user).then((res) => { console.log('YESSSS') })
  }
}

export default App;
