import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <header>
        My Weather
      </header>
      <App />
      <footer>
        <a href="https://github.com/franciscaconradoneves/react-final-weather-app.git" target="_blank" rel="noreferrer">Open-source</a> code by
        <a href="https://www.linkedin.com/in/francisca-conrado-neves-72878b136" target="_blank" rel="noreferrer"> Francisca Conrado Neves</a>
      </footer>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
