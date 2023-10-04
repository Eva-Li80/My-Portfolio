

import React, { useState } from "react";
import "./weatherstyle.css"

const api = {
  key: "1ea8bb138d4561028b49eab57b22c08f",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [theme, setTheme] = useState("light");

  const fetchWeather = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);

    });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <div id="weather" className={`fix w-full h-screen  ${theme}`}>
      <div className={`switch ${theme}`}>
        <label className="labelett" style={{marginRight: 30, fontSize: 30}}>
          Light
          <input
          style={{marginLeft: 5}}
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
        </label>
        <label className="labeltvå" style={{ fontSize: 30, color: "black"}}>
          Dark
          <input
          style={{marginLeft: 5}}
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </label>
      </div>
      <div className="center-content">
        <div className={`search-box ${theme}`}>
          <h3 style={{marginLeft: 30, marginBottom: 20 , fontSize: 20}}>The weather today? 🤔</h3>
          <input
          style={{padding: 10, borderRadius: 7, background: "rgb(399, 250, 230)"}}
            type="text"
            placeholder="Skriv stadens namn.."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="button" onClick={fetchWeather}>Search</button>
        </div>
        {weather.main ? (
          <div className={`ruta ${theme}`}>
            <p>Wheather in {weather.name} is:</p>
            <p>{weather.main.temp} *C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
         <p></p>
        )}
      </div>
    </div>
  );
};

export default Weather;
