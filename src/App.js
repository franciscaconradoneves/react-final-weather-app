import React from "react";
import SearchEngine from "./SearchEngine";

import "./App.css";

export default function App(){
  return(
    <div className="App">
      <SearchEngine defaultCity="Porto"/>
    </div>
  );
}
