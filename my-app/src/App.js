import React from "react";
import Weather from "./Weather";
import "./App.css";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="card">
        <div className="card-body">
          <Weather city="Raleigh" />
          <hr />
          <div className="row">
            <Forecast />
          </div>
        </div>
      </div>
      <footer>
        <p>Coded by Stephanie Durocher</p>
        <p>Open sourced on GitHub</p>
      </footer>
    </div>
  );
}
