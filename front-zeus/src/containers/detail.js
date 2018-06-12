import { connect } from "react-redux";
import React, { Component } from "react";
import { sightSeen } from "../actions/index";
import { Link } from "react-router-dom";
import "./containers.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

export class Detail extends Component {
  render() {
    const word = this.props.location.state.word;
    const props = this.props;
    return (
      <div className="super-container">

      <Card className="infoCard">
        <h3>Details for: {word.title}</h3>
        <img className="pic" src={word.pic} />
        <h4>{word.info}</h4>
        <div />
        <div className="buttons">
        <Link
          to="/board"
          onClick={() => {
            props.sightSeen(props.match.params.id, props.location.state.index);
          }}
        >
          <button class="btn btn-success">Yup</button>
        </Link>
        <Link to="/Board">
          <button class="btn btn-danger"> Nope</button>
        </Link>
        </div>
      </Card>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    word: state.selectedWord.selectedWord,
    sightSeen: state.sightSeen
  };
}
function mapDispatchToProps(dispatch) {
  return {
    sightSeen: (value, index) => dispatch(sightSeen(value, index))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
