import React, { Component } from "react";
import "tachyons";

class Location extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="Enter your city"
          onChange={(e) => this.props.getLocation(e)}
          className="pv1 ph2 tc br4 mr2 shadow-4 input outline-0"
          onKeyDown={(event) =>
            event.keyCode === 13 ? this.props.getWeather() : ""
          }
        />
        <button
          onClick={() => this.props.getWeather()}
          className="grow shadow-4 pv1 ma2 br4 outline-0"
        >
          search
        </button>
      </div>
    );
  }
}
export default Location;
