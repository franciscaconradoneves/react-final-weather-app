import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(){
    return(
        <div className="CurrentWeather">
            <h1> Porto </h1>
            <ul>
            <li>
                Last updated: <span> Sunday </span>
            </li>
            <li> Sunny </li>
            </ul>
            <div className="row">
            <div className="col-7">
                <div className="clearfix WeatherTemperature">
                <img
                    src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt=""
                    className="float-left"
                />
                <strong>10</strong>
                <span className="units">
                    <a href=" " className="active">
                    ºC
                    </a>
                    |
                    <a href=" ">
                    ºF
                    </a>
                </span>
                </div>
            </div>
            <div className="col-4">
                <ul>
                <li>
                    Humidity: <span>80</span>%
                </li>
                <li>
                    Wind: <span>20</span>km/h
                </li>
                </ul>
            </div>
            </div>
        </div>
    );
}