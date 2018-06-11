import { connect } from "react-redux";
import React, { Component } from "react";
import './containers.css'

export class SingleCard extends Component {
  render() {

    return <img className="card shadow-drop-2-center" src={ this.props.pic } alt="img.img"/>;

  }
}
function mapDispatchToProps(dispatch) {
}
export default connect(mapDispatchToProps)(SingleCard);
