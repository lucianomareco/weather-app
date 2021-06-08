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
    const { country } = e.target.elements;

    const countryValue = country.value;
    console.log(countryValue);

    if (countryValue) {
      const API_COUNTRY_URL = `https://restcountries.eu/rest/v2/name/${countryValue}`;
      const country_response = await fetch(API_COUNTRY_URL);
      const country_data = await country_response.json();
      const country_capital = country_data[0].capital;
      const API_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${country_capital}&appid=${WEATHER_KEY}&units=metric`;
      const weather_response = await fetch(API_WEATHER_URL);
      const weather_data = await weather_response.json();

      this.setState({
        temperature: weather_data.main.temp,
        description: weather_data.weather[0].description,
        humidity: weather_data.main.humidity,
        wind_speed: weather_data.wind.speed,
        city: weather_data.name,
        country: weather_data.sys.country,
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