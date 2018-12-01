import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import { AuthenticateUser } from './services/authentication';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      user: {}
    }
  }
  render() {
    return (
      <div className="App">
        {(this.state.loggedIn) ? "HELLO WORLD" : <Login submitLogin={this.submitLogin} />}
      </div>
    );
  }

  submitLogin = (user) => {
    console.log(user)
    return AuthenticateUser(user).then((res) => { this.setState({ loggedIn: true, user: res }) })
  }
}

export default App;
