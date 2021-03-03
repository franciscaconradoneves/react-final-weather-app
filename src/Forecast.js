import React, { useState } from "react";
import axios from "axios";
import { PointSpreadLoading } from 'react-loadingg';


import ForecastPreview from "./ForecastPreview";
import"./Forecast.css"

export default function Forecast(props){
    const [forecast, setForecast] = useState({loaded:false});
    
    function handleForecast(response){
        setForecast({
            loaded: true,
            data: response.data
        });
    }
    

    if(forecast.loaded && props.lat === forecast.data.lat && props.lon === forecast.data.lon ){
        return(<div className="row Forecast">
            {forecast.data.daily.slice(1,7).map(function(forecastItem){
                return<ForecastPreview data = {forecastItem} />
            })}
        </div>)
    }else{
        let apiKey = "6eb07ba03ae42dc9fd0ee53117b1409f";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleForecast);
        return <PointSpreadLoading  />;
    }
}