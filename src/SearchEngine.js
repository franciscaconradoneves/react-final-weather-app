import React from "react";

import "./SearchEngine.css";

export default function SearchEngine(){
    return(
        <div>
            <form className="mb-3" id="weather-form">
            <div className="row">
                <div className="col-8">
                <input
                    type="search"
                    id="city-input"
                    placeholder="Change city"
                    autoComplete="off"
                    className="form-control"
                />
                </div>
                <div className="col-2">
                <input
                    type="submit"
                    id="search"
                    value = "Search"
                    className="btn btn-outline-light btn-sm"
                />
                </div>
                <div className="col-2">
                <button
                    type="submit"
                    className="btn btn-outline-light btn-sm"
                    id="current-location-button"
                >
                    <i class="fas fa-map-marker-alt"></i>
                </button>
                </div>
            </div>
            </form>
        </div>
    );
}