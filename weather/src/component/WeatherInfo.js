import React from "react";
import "../assets/styles/components/Card.css";

const WeatherInfo = (props) => {
    const ICON_URL = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;
    return (
        <div>
            {
                props.error &&
                <div className="card card-body card-alert">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <div className="card card-body">
                    <div className="row">
                        <div className="col-6">
                            <p> Location: {props.city}, {props.country} </p>
                            <p> Temperature: {props.temperature} °C </p>
                            <p> Humidity: {props.humidity} </p>
                            <p> Description: {props.description} </p>
                            <p> Wind speed: {props.wind_speed} </p>
                        </div>
                        <div className="col-6">
                            <img src={ICON_URL} alt="icon weather" width="150px" />
                        </div>
                    </div>
                </div>
                :
                <div className="card card-body">
                    <p>No request yet</p>
                </div>
            }
        </div>
    )
}

export default WeatherInfo;