import React from "react";
//import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather(props) {
  // let tempHigh = `Temperature is 89℉`;
  //let tempLow = `Temperature is 20℉`;
  let city = "Raleigh";

  // function handleResponse(response) {
  //  setWeatherData({
  //  ready: true,
  //temperature: Response.data.main.temp,
  //humidity: Response.data.main.humidity,
  //date: new Date(response.date.dt * 1000),
  //description: response.data.weather[0].description,
  //iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
  //wind: response.data.wind.speed,
  //city: response.data.name,
  //    });
  // }

  function handleClick(event) {
    event.preventDefault();
    alert("I am functioning!");
  }
  return (
    <div className="SearchBox">
      <form>
        <input type="search" placeholder="Search city..."></input>
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </form>
      <div className="row">
        <div className="col-12">
          <ul>
            <li>Today's Weather for {city} </li>
            <li>Temperature high</li>
            <li>Temperature low</li>
            <li>Image</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//function search(props) {
//let apiKey = "21f347fd627fde024ba524524a760ab9";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather/?q=${city}&appid=${apiKey}&units=metric`;
// axios.get(apiUrl).then(handleResponse);
//}
