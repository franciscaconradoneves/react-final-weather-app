import React from "react";
import AppWrapper from "./AppWrapper";
import Forecast from "./Forecast";

import "./App.css";

export default function App(){
  return(
    <div className="App">
      <AppWrapper />
      <Forecast />
    </div>
  );
}
