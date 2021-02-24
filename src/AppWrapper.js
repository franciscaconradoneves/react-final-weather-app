import React from "react";
import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";

import "./AppWrapper.css"

export default function AppWrapper(){
    return( 
    <div className="AppWrapper">
        <SearchEngine />
        <CurrentWeather />
    </div>
    );
}