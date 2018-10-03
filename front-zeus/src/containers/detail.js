import { connect } from "react-redux";
import React, { Component } from "react";
import { sightSeen } from "../actions/index";
import { Link } from "react-router-dom";
import "./containers.css";
<<<<<<< HEAD
import { score } from "../sockets/index.js";
=======
>>>>>>> a2398b1dbe50a6f46584d28343e129fe72209efa

export class Detail extends Component {
  render() {
    const word = this.props.location.state.word;
    const props = this.props;
    return (
      <div className="super-container">
        <div className="infoCard">
          <h3>Details for: {word.title}</h3>
          <img className="pic" src={word.pic} />
          <h4>{word.info}</h4>
          <div />
          <div className="buttons">
            <Link
              to="/board"
              onClick={() => {
                props.sightSeen(
                  props.match.params.id,
<<<<<<< HEAD
                  props.location.state.key
                );
                score(word.title);
=======
                  props.location.state.index
                );
>>>>>>> a2398b1dbe50a6f46584d28343e129fe72209efa
              }}
            >
              <button className="btn btn-success">Yup</button>
            </Link>
            <Link to="/Board">
              <button className="btn btn-danger"> Nope</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    word: state.selectedWord,
    sightSeen: state.sightSeen
  };
}
function mapDispatchToProps(dispatch) {
  return {
    sightSeen: (value, index) => dispatch(sightSeen(value, index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
