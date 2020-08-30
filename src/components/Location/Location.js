import React, { Component } from "react";
import "tachyons";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }
  getlocation = (event) => {
    this.setState({ city: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Enter your city"
          onChange={this.getlocation}
          className="pv1 tc mr2 shadow-4 bg-white w-40" 
          onKeyDown={(event) =>
            event.keyCode === 13
              ? this.props.getLocationByCity(this.state.city)
              : ""
          }

        />
        <button
          onClick={() => this.props.getLocationByCity(this.state.city)}
          className="grow shadow-4 pv1"
        >
          search
        </button>
      </div>
    );
  }
}
export default Location;
