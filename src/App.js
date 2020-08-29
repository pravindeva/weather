import React, { Component } from "react";
import "./App.css";
import "tachyons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      description: "",
    };
  }
  componentDidMount = () => {
    if (navigator.geolocation.getCurrentPosition) {
      const getlocation = (pos) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=2d6f5be113fc5046489e73c13784963a`;
        fetch(url)
          .then((Response) => Response.json())
          .then((val) => {
            this.setState({
              temperature: val.main.temp,
              description: val.weather[0].description,
            });
            console.log(val);
          })
          .catch((err) => console.log(err));
      };
      navigator.geolocation.getCurrentPosition(getlocation);
    }
  };

  render() {
    return (
      <div>
        <header className="f2 white tc ma4">weather app</header>
        {this.state.description}
        <p>{this.state.temperature}</p>
      </div>
    );
  }
}

export default App;
