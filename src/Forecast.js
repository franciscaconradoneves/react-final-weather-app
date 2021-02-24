import React from "react";

import "./Forecast.css";

export default function Forecast(){
    return(
        <div className="row Forecast">
            <div className="col-2">
                <h3>Monday</h3>
                    <img
                        src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                        alt=""
                    />
                <div className="ForecastTemperature">
                <strong>25°/</strong> 10°
                </div>
            </div>
        </div>
    );
}