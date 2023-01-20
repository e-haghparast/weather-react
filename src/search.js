import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./search.css";
export default function Search() {
  let [city, setCity] = useState("Tehran");
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  const callApi = useCallback(() => {
    let apiKey = "bfd67b65e01f8c3751ffb4a48f09d863";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  });

  function handleSubmit(event) {
    event.preventDefault();
    callApi();
  }

  useEffect(() => {
    callApi();
  }, [callApi]);

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        value={city}
        type="search"
        placeholder="Enter a city.."
        onChange={updateCity}
        className=" w-50 p-2 me-2 mb-4 rounded shadow"
      />
      <button type="Submit" className="btn btn-primary submit-button ">
        Search
      </button>
    </form>
  );

  return (
    <div className="container">
      <div className="row">{form}</div>
      <div className="row">
        <div className="col-6">
          <ul className="list-unstyled">
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li className="fs-1">{Math.round(weather.temperature)}°C</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="list-unstyled">
            <li>Wind: {weather.wind}km/h</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
