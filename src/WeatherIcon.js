import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props){
    const iconId = {
        "01d": "CLEAR_DAY" ,
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "CLOUDY",
        "11n": "CLOUDY",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG"
    }
    return(
        <ReactAnimatedWeather
            icon = {iconId[props.code]}
            color = {'#f5f4f4'}
            size = {45}
            animate= {true}
        />
    )
} 
