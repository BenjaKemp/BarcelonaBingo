import React, { Component } from 'react';
import LoginForm from './loginForm';

import './LogInPage.css';

class LoginPage extends Component {
  render() {
    return (

      <div className="LoginPage">
        <div className="tracking-in-expand-fwd-top"><h1> Welcome To Bens Boozy Barcelona Bingo</h1></div> 
        <LoginForm />
      </div>

    );
  }
}

export default LoginPage;
