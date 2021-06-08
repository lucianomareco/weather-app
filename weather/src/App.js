import React, { Component } from "react";
import WeatherForm from "./component/WeatherForm";
import WeatherInfo from "./component/WeatherInfo";
import { WEATHER_KEY } from "./keys";

class App extends Component {

  state = {
    temperature: '',
    description: '',
    humidity: '',
    wind_speed: '',
    city: '',
    country: '',
    error: null
  }


  GetWeather = async e => {
    e.preventDefault();
    const { city, country } = e.target.elements;

    const cityValue = city.value;
    const countryValue = country.value;

    if (cityValue && countryValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(this.state);

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null
      });
    } else { this.setState({ error: 'Please enter a city and country' }) }
  }

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <WeatherForm GetWeather={this.GetWeather} />
            <WeatherInfo {...this.state} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;