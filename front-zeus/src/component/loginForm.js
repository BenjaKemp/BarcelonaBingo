import React, { Component } from "react";
import { Panel, Form, FormGroup, FormControl, Button } from "react-bootstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      logged: false,
      newUser: true
    };
  }

  handleClick = input => {
    let user = [
      {
        method: "POST",
        body: JSON.stringify({
          playername: this.state.username,
          password: this.state.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      {
        method: "GET",
        headers: {
          Authorization:
            "Basic " + btoa(this.state.username + ":" + this.state.password)
        }
      }
    ];

    if (this.state.newUser) {
      fetch(`http://localhost:3000/users`, user[0]).then(res => {
        console.log("you have saved a person");
        this.setState({ logged: true });
      });
    } else {
      fetch(`http://localhost:3000/sign-in`, user[1]).then(res => {
        console.log("you are signed in");
        this.setState({ logged: true });
      });
    }
  };

  render() {
    if (!this.state.logged) {
      return (
        <div>
          <MuiThemeProvider>
            <div>
              <AppBar title="Login" />
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
              <RaisedButton
                label="New User?"
                primary={true}
                style={style}
                onClick={event =>
                  this.setState({ newUser: !this.state.newUser })
                }
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
export default Login;
