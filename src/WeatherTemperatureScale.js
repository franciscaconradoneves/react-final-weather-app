import React, { useState } from "react";

export default function WeatherTemperatureScale(props){
    const [unit, setUnit] = useState('celsius');
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit('celsius')
    }

    if(unit === 'celsius'){
    return(
        <div className="WeatherTemperatureScale">
            <strong>{props.celsius}</strong>
            <span className="units">
               ºC |
                <a href=" " onClick={showFahrenheit}>
                    ºF
                </a>
            </span>
        </div>
    )} else{
        let fahrenheit = Math.round((props.celsius * 9) /5 +32)
        return(
        <div className="WeatherTemperatureScale">
            <strong>{fahrenheit}</strong>
            <span className="units">
                <a href=" " onClick={showCelsius}>
                    ºC
                </a>| ºF
            </span>
        </div>)
    }
}