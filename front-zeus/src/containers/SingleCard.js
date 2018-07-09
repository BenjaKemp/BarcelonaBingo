import { connect } from "react-redux";
import React, { Component } from "react";
import { selectWord } from "../actions/index";
import "./containers.css";

export class SingleCard extends Component {
  render() {
    return (
      <div className={(this.props.seen) ? "seen-card shadow-drop-2-center" : "card shadow-drop-2-center"}
        onClick={() => {
        selectWord(this.props.title, this.props.index)}} >
          <img src={this.props.pic} alt="img.img" />
          <div className="overlay">
            <p className="inner-text">{this.props.title}</p>
        </div>
      </div>
    );

  }
}
function mapDispatchToProps(dispatch) {
  return {
    selectWord: (word, index) => dispatch(selectWord(word, index))
  };
}
export default connect(mapDispatchToProps)(SingleCard);
