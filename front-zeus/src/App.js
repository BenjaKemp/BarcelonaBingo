import React, { Component } from "react";
import { connect } from "react-redux";
import { setWords, reset } from "./actions/index";
import Board from "./containers/Board";
import VictoryScreen from "./components/VictoryScreen";
import Detail from "./containers/Detail";
import LoginPage from "./LogDetails/loginpage";
import "./App.css";
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import { Switch, Link } from "react-router-dom";
import MyModal from './Modal/modal'



class App extends Component {
  constructor(props) {
    super(props);



  const getAll = () => {
    fetch("http://localhost:3000/getall")
      .then(res => res.json())
      .then(words => {
        this.props.setWords(words);
      })
      .catch(e => console.log(e));
    }
    if (!props.log){
    getAll();
  }
  }
  render() {
    return (
      <Router>

        <div className="fullscreen">
          <MyModal/>
          <button  onClick={()=>{localStorage.clear(); this.props.reset('resetting')}}>
            <Link  to="/" />reset</button>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/board" component={Board} />
            <Route path="/VictoryScreen" component={VictoryScreen} />

            <Route path="/detail/:id" component={Detail} />
          </Switch>

        </div>
    </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    log: state.credentials.logged,
    view: state.sightSeen
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setWords: word => dispatch(setWords(word)),
    reset: ()=> dispatch(reset())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
