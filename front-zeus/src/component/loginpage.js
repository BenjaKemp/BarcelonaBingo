import React, { Component } from 'react';
import LoginForm from './loginForm';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './LogInPage.css';

class LoginPage extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
  transitionName="example"
  transitionAppear={true}
  transitionAppearTimeout={500}
  transitionEnter={false}
  transitionLeave={false}>
      <div className="LoginPage">
        <LoginForm />
      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default LoginPage;
