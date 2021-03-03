import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./ForecastPreview.css";

export default function ForecastPreview(props){
    const days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri","Sat"];

    function date(){
       let dateInfo = new Date(props.data.dt * 1000)
        return (days[dateInfo.getDay()])
    }


    return(
        <div className="col-2 ForecastPreview">
            <h3> {date()}  </h3>
                <WeatherIcon code={props.data.weather[0].icon} />
            <div className="ForecastTemperature">
                <strong>{Math.round(props.data.temp.max)}°/</strong>{Math.round(props.data.temp.min)}°
            </div>
        </div>
            
    )
}
