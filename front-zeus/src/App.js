import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from "react-redux";
import { setWords } from "./actions/index";
import Board from "./containers/board";
import Navigation from "./containers/navigation";
import Detail from "./containers/detail";
import LoginPage from "./component/loginpage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  const getAll = () => { fetch("http://localhost:3000/getall")
      .then(res => res.json())
      .then(words => {
        this.props.setWords(words);
      })
      .catch(e => console.log(e));
    }
    getAll();
  }
  render() {
    return (
      <Router>
        <div>
          <ReactCSSTransitionGroup
            transitionAppear={true}
            transitionAppearTimeout={600}
            transitionEnterTimeout={600}
            transitionLeaveTimeout={200}
            transitionName="SlideIn"
          > 
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/board" component={Board} />

            <Route path="/detail/:id" component={Detail} />
          </Switch>
          </ReactCSSTransitionGroup>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    view: state.sightSeen
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setWords: word => dispatch(setWords(word))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
