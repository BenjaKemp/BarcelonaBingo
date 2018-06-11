import React, { Component } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Redirect } from "react-router-dom";
import { password, username, newUser, logged } from "../actions/index";

class Login extends Component {


  handleClick = input => {
    let user = [
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
            "Basic " + btoa(this.state.username + ":" + this.state.password)
        }
      }
    ];

    if (this.state.newUser) {
      fetch(`http://localhost:3000/users`, user[0]).then(res => {
        if (res.status === 400) {
          alert("this username already exists!, you have to pick another ");
        } else if (res.status === 201) {
          this.props.logged()
        }
      });
    } else {
      fetch(`http://localhost:3000/sign-in`, user[1]).then(res => {
        if (res.status === 401) {
          alert("your username and password was not recognised");
        } else if (res.status === 201) {
          console.log('you are good to go')
          this.props.logged()
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
              <AppBar title={'log in'} />
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, username) =>{
                  this.props.username({username})
                }
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, password) =>{
                  this.props.password({password})
                }
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
                onClick={() =>
                  this.props.newUser()
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

function mapStateToProps(state) {
  return {
credentials: state.credentials
  };
}
function mapDispatchToProps(dispatch) {
  return {
    username: (value) => dispatch(username(value)),
    password: (value) => dispatch(password(value)),
    newUser: () => dispatch(newUser()),
    logged: () => dispatch(logged()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
