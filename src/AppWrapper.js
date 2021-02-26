import React from "react";
import SearchEngine from "./SearchEngine";

import "./AppWrapper.css"

export default function AppWrapper(){
    return( 
    <div className="AppWrapper">
        <SearchEngine defaultCity="Porto"/>
    </div>
    );
}