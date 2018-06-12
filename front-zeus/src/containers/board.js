import React, { Component } from "react";
import { connect } from "react-redux";
import { selectWord } from "../actions/index";
import { SingleCard } from "./SingleCard";

import "./containers.css";
import { Link } from "react-router-dom";


class Board extends Component {

  renderList() {
    return this.props.words.map((word, index) => {
      return (


        <Link
          to={{ pathname: `/detail/${word.title}`, state: { index, word } }}
        >
          <SingleCard
            key={index}
            title={word.title}
            info={word.info}
            pic={word.pic}
            seen={word.seen}
          />
        </Link>
      );
    });
  }
  render() {
    return (
      <div className="bingoBoard shadow-drop-2-center">
        <div className="background">
          <div className="wrapper">{this.renderList()}</div>
        </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    words: state.sightSeen.words
  };
}
function mapDispatchToProps(dispatch) {
  return {
    selectWord: (word, index) => dispatch(selectWord(word, index))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
