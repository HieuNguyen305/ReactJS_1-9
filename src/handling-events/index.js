import React, { Component } from "react";

export default class HandlingEvents extends Component {
  eventClicks() {
    console.log(123);
  }
  ParamsClicks(user, age) {
    console.log(user, age);
  }
  render() {
    return (
      <div>
        <h3>*HandlingEvents</h3>
        <button className="btn btn-danger" onClick={this.eventClicks}>
          Clicks
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            this.ParamsClicks("Hieu", 20);
          }}
        >
          Clicks Params
        </button>
      </div>
    );
  }
}
