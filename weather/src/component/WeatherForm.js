import React from 'react';
import Button from './Button';
import "../assets/styles/components/Card.css";
import "../assets/styles/components/Input.css";
import logo from "../assets/imgs/logo.png";



const WeatherForm = props => {
    return (
        <div className="card card-body">
            <img src={logo} alt="weather logo" width="200px" className="m-auto"></img>
            <p>Enter a country to obtain the climate of its capital</p>
            <form onSubmit={props.GetWeather} >
                <div className="form-group">
                    <input type="text" name="country" placeholder=" Your country name" className="input-text" autoFocus />
                </div>
                <Button text="Get weather" />
            </form>
        </div>
    )
}

export default WeatherForm;