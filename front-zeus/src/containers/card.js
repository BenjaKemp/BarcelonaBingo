import { connect } from "react-redux";
import React, { Component } from "react";
import './containers.css'

export class Card extends Component {
  render() {
    let colour = (this.props.seen) ? "seen" : "card"

    return <img className={colour} src={ this.props.pic } />;

  }
}
function mapDispatchToProps(dispatch) {
}
export default connect(mapDispatchToProps)(Card);
