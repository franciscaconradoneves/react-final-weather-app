import React, { useState } from "react";
import axios from "axios"
import { PointSpreadLoading } from 'react-loadingg';

import "./CurrentWeather.css";

export default function CurrentWeather(props){
    const [weatherData, setWestherData] = useState({ready: false})
    
    function displayCurrentInformation(response){
        setWestherData({
            ready: true,
            cityName: response.data.name,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            temp: Math.round(response.data.main.temp),
            humidity: Math.round(response.data.main.humidity),
            wind: Math.round(response.data.wind.speed),
        })
    }

    if(weatherData.ready){
        return(
            <div className="CurrentWeather">
                <h1> {weatherData.cityName} </h1>
                <ul>
                <li>
                    Last updated: <span> Sunday </span>
                </li>
                <li> {weatherData.description}</li>
                </ul>
                <div className="row">
                <div className="col-7">
                    <div className="clearfix WeatherTemperature">
                    <img
                        src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                        alt=""
                        className="float-left"
                    />
                    <strong>{weatherData.temp}</strong>
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
                        Humidity: {weatherData.humidity}<span className="humidity-wind">%</span>
                    </li>
                    <li>
                        Wind: {weatherData.wind}<span className="humidity-wind">km/h</span>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        );  
    } else{
        const apiKey ="6eb07ba03ae42dc9fd0ee53117b1409f"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayCurrentInformation);
        return <PointSpreadLoading />
    }


}