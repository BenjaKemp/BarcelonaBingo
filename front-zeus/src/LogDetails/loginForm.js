import React, { Component } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { password, username, newUser, logged } from "../actions/index";
import {


  Redirect

} from "react-router-dom";



class Login extends Component {
  handleClick = input => {
    let options = [
      {
        method: "POST",
        body: JSON.stringify({
          playername: this.props.credentials.username,
          password: this.props.credentials.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      {
        method: "GET",
        headers: {
          Authorization:
            "Basic " +
            btoa(
              this.props.credentials.username +
                ":" +
                this.props.credentials.password
            )
        }
      }
    ];

    if (this.props.credentials.newUser) {
      fetch(`http://localhost:3000/users`, options[0])
      .then(res=> {
        if (res.status === 400) {
          alert("this username already exists!, you have to pick another ");
        } else if (res.status === 201) {
          return res.json();
        }})
      .then(res => {
        console.log('this is response' ,res)
        localStorage.setItem('webToken', res.token);
        localStorage.setItem('username', res.playername);
        this.props.logged();
      });
    } else {
      fetch(`http://localhost:3000/sign-in`, options[1]).then(res => {
        if (res.status === 401) {
          alert("your username and password was not recognised");
        } else if (res.status === 200) {
          console.log("you are good to go");
            localStorage.setItem('webToken', res.token);
            localStorage.setItem('username', res.playername);
          this.props.logged();
        }
      });
    }
  };

  render() {
    if (!this.props.credentials.logged) {
      return (
        <div>
          <MuiThemeProvider>
            <div>
              <AppBar
                title={this.props.credentials.newUser ? "Sign Up" : "Log In"}
              />
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, username) => {
                  this.props.username({ username });
                }}
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, password) => {
                  this.props.password({ password });
                }}
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
              <RaisedButton
                label={
                  this.props.credentials.newUser
                    ? "I Am Not New "
                    : "I'm New Here"
                }
                primary={true}
                style={style}
                onClick={() => this.props.newUser()}
              />
            </div>
          </MuiThemeProvider>
        </div>
      );
    } else {
      return <Redirect to="/board" />;
    }
  }
}
const style = {
  margin: 15
};

function mapStateToProps(state) {
  return {
    credentials: state.credentials
  };
}
function mapDispatchToProps(dispatch) {
  return {
    username: value => dispatch(username(value)),
    password: value => dispatch(password(value)),
    newUser: () => dispatch(newUser()),
    logged: () => dispatch(logged())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
