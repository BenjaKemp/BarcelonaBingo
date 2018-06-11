import { connect } from "react-redux";
import React, { Component } from "react";
import { sightSeen } from "../actions/index";
import { Link } from "react-router-dom";
import "./containers.css";
export class Detail extends Component {
  render() {
    const word = this.props.location.state.word;
    const props = this.props;
    return (
      <div className="detail">
        <div className="inner-detail">
          <h3>Details for:</h3>
          <div>{props.match.params.id}</div>
          <h5>{word.info}</h5>
          <h5>{props.info}</h5>
          <div />
          <button>
            <Link
              to="/board"
              onClick={() => {
                props.sightSeen(
                  props.match.params.id,
                  props.location.state.index
                );
              }}
            >
              yes
            </Link>
          </button>
          <button>
            <Link to="/">no</Link>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("this.props", this.props);
  console.log("this is the state", state);
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
