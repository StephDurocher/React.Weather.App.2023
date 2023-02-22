import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="card">
        <div className="card-body">
          <Weather defaultCity="Raleigh" />
          <hr />
          <div className="row"></div>
        </div>
      </div>
      <footer>
        <p>Coded by Stephanie Durocher</p>
        <p>Open sourced on GitHub</p>
      </footer>
    </div>
  );
}
