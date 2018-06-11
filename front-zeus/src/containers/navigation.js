import React from "react";
import { Component } from "react";
import "./containers.css";

export default class Navigation extends Component {
  render() {

    return (
      <div className="button-bar">
        <button type="button" className="btn btn-primary">
          Reset
        </button>

        <button type="button" className="btn btn-success">
          Quit
        </button>

        <button type="button" className="btn btn-warning">
          I'm sad about something
        </button>
      </div>
    );
  }
}
