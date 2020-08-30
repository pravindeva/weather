import React, { Component } from "react";
import "tachyons";

class Location extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="Enter your city"
          onChange={(e) => this.props.getLocation(e)}
          className="pv1 tc mr2 shadow-4 bg-white w-40"
          onKeyDown={(event) =>
            event.keyCode === 13 ? this.props.getWeather() : ""
          }
        />
        <button
          onClick={() => this.props.getWeather()}
          className="grow shadow-4 pv1"
        >
          search
        </button>
      </div>
    );
  }
}
export default Location;
