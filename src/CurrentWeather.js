import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

import "./CurrentWeather.css";



export default function CurrentWeather(props){
        return(
            <div className="CurrentWeather">
              <h1> {props.weatherData.cityName} </h1>
                <ul>
                <li>
                    Last update: <FormattedDate date={props.weatherData.date} /> 
                </li>
                <li> {props.weatherData.description}</li>
                </ul>
                <div className="row">
                <div className="col-7">
                    <div className="clearfix WeatherTemperature">
                    <img
                        src={props.weatherData.icon}
                        alt={props.weatherData.description} 
                        className="float-left"
                    />
                    <strong>{props.weatherData.temp}</strong>
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
                <div className="col-5">
                    <ul>
                    <li>
                        Humidity: {props.weatherData.humidity}<span className="humidity-wind">%</span>
                    </li>
                    <li>
                        Wind: {props.weatherData.wind}<span className="humidity-wind">km/h</span>
                    </li>
                    </ul>
                </div>
                </div>  
                
            </div>
        );  


}