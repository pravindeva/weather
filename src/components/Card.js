import React, { Component } from "react";
var moment = require("moment");
export default class Card extends Component {
  render() {
    const { temp, city, region, des, img, country } = this.props.data;
    return (
      <div className="bg-white dib br3 mt4 tc bw3 grow ph5 dark-green b">
        <h1>
          {temp}
          <sup>o</sup>C
        </h1>
        <p>{moment().format("llll")}</p>
        <p>{des}</p>
        <img src={img} alt="weather icon" />
        <h4>{city}</h4>
        <h4>
          {region},{country}
        </h4>
      </div>
    );
  }
}
