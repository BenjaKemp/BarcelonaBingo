import React, { Component } from "react";
import { connect } from "react-redux";
import { selectWord } from "../actions/index";
import { Card } from "./card";
import Navigation from "./navigation";
import "./containers.css";
import { Link } from "react-router-dom";


class Board extends Component {


  renderList() {
    return this.props.words.map((word, index) => {
      return (


        <Link
          to={{ pathname: `/detail/${word.title}`, state: { index, word } }}
        >
          <Card
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

      //   </div>
      <div className="bingoBoard">
        <Navigation/>
        <ul className="wrapper">{this.renderList()}</ul>
      </div>
      // </div>
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
