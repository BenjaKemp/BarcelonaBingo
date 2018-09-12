import React, { Component } from 'react';
import LoginForm from './loginForm';

import './LogInPage.css';

class LoginPage extends Component {
  render() {
    return (

      <div className="LoginPage">
        <h3 className="future">Barcelona</h3>
        <h1 className="cop">Bingo</h1>
      <br/>
        <LoginForm />
      </div>

    );
  }
}

export default LoginPage;
