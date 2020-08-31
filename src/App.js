import React, { Component } from "react";
import Location from "./components/Location/Location";
import "./App.css";
import "tachyons";
import Card from "./components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cords: { lat: 12.904759, lon: 80.089081 },
      data: {},
      city: "",
    };
  }

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((success) => {
        let newcords = {
          lat: success.coords.latitude,
          lon: success.coords.longitude,
        };
        this.setState({ cords: newcords });
      });
      fetch(
        `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=df621d13cc5f043cf29066caf9832087&query=${this.state.cords.lat},${this.state.cords.lon}`
      )
        .then((Response) => Response.json())
        .then((val) => {
          let weatherData = {
            temp: val.current.temperature,
            des: val.current.weather_descriptions[0],
            img: val.current.weather_icons[0],
            city: val.location.name,
            region: val.location.region,
            country: val.location.country,
          };
          this.setState({ data: weatherData });
        })
        .catch((err) => err.message);
    }
  };

  getLocation = (event) => {
    this.setState({ city: event.target.value });
  };

  getWeatherByCity = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=df621d13cc5f043cf29066caf9832087&query=${this.state.city}`
    )
      .then((Response) => Response.json())
      .then((val) => {
        let weatherData = {
          temp: val.current.temperature,
          des: val.current.weather_descriptions[0],
          img: val.current.weather_icons[0],
          city: val.location.name,
          region: val.location.region,
          country: val.location.country,
        };
        this.setState({ data: weatherData });
      })
      .catch((err) => err.message);
  };

  render() {
    return (
      <div>
        <header className="f1 dark-green tc ma3 b">Weather App</header>
        <Location
          getLocation={this.getLocation}
          getWeather={this.getWeatherByCity}
        />
        <Card data={this.state.data} />
      </div>
    );
  }
}
export default App;
