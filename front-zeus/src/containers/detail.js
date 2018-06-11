import { connect } from "react-redux";
import React, { Component } from "react";
import { sightSeen } from "../actions/index";
import { Link } from "react-router-dom";
import "./containers.css";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


export class Detail extends Component {
  render() {
    const word = this.props.location.state.word;
    const props = this.props;
    console.log(word)
    return (
      <Card className="infoCard" >
          <CardMedia
          image={word.pic}
          title="Contemplative Reptile"
        />
          <h3>Details for:</h3>
          <img className="pic" src={word.pic} />
          <div>{props.match.params.id}</div>
          <h5>{word.info}</h5>
          <h5>{props.info}</h5>
          <div />
          <button size="small" color="primary">
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
          <button size="small" color="primary">
            <Link to="/Board">no</Link>
          </button>
      </Card>
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
