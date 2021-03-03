import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperatureScale from "./WeatherTemperatureScale";

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
                        <div className="float-left">    
                            <WeatherIcon code ={props.weatherData.icon} />
                        </div>
                        <WeatherTemperatureScale celsius={props.weatherData.temp}/>
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