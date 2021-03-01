import React, { useState } from "react";
import axios from "axios"
import { PointSpreadLoading } from 'react-loadingg';
import CurrentWeather from "./CurrentWeather";




export default function SearchEngine(props){
    const [weatherData, setWeatherData] = useState({ready: false})
    const [city, setCity] = useState(props.defaultCity)

    function displayCurrentInformation(response){
        setWeatherData({
            ready: true,
            cityName: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            temp: Math.round(response.data.main.temp),
            humidity: Math.round(response.data.main.humidity),
            wind: Math.round(response.data.wind.speed),
        })
    }

    function calling(apiUrl){
        axios.get(apiUrl).then(displayCurrentInformation);
    }

    function search(){
        const apiKey ="6eb07ba03ae42dc9fd0ee53117b1409f"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        calling(apiUrl);
    }

    function handleSubmit(event){
        event.preventDefault();
        search()
    }
    
    function updateCity(event){
        setCity(event.target.value);
    }

    function handlePosition(position){
        let latidude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let unit = "metric";
        let apiKey = "6eb07ba03ae42dc9fd0ee53117b1409f";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latidude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
        calling(apiUrl)
    }

    function handleLocation(event){
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(handlePosition);

    }

    if(weatherData.ready){
        return(
            <div className="SearchEngine">
                <form className="mb-3" onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col-8">
                            <input
                                type="search"
                                placeholder="Change city"
                                autoComplete="off"
                                className="form-control"
                                onChange={updateCity}
                            />
                            </div>
                            <div className="col-2">
                            <input
                                type="submit"
                                value = "Search"
                                className="btn btn-outline-light btn-sm"
                            />
                            </div>
                            <div className="col-2">
                            <button
                                type="submit"
                                className="btn btn-outline-light btn-sm"
                                onClick={handleLocation}
                            >
                                <i className="fas fa-map-marker-alt"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <CurrentWeather weatherData={weatherData} />
            </div>
        );  
    } else{
        search();
        return <PointSpreadLoading />
    }


}