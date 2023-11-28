import React, { useEffect, useState } from "react";
import "./styles.css";
import rain from "../assets/rain.png";
import temp from "../assets/temp.png";
import humid from "../assets/humid.png";
import wind from "../assets/wind.png";

import DateCard from "./DateCard";
const WeatherCard = () => {
  let [curWeather, setCurWeather] = useState({});
  const getWeather = async () => {
    const resp = await fetch(
      "https://api.weatherapi.com/v1/current.json?key= 58c357911740417481780130232811&q=Belagavi&aqi=no"
    );
    const data = await resp.json();
    data && setCurWeather(data.current);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <DateCard />
      <div className="weather-container">
        <div className="rain">
          <img src={curWeather?.condition?.icon || rain} alt="" width={70} />
          <p>{curWeather?.condition?.text}</p>
        </div>
        <div className="sep-line"></div>
        <div className="temp">
          <p>{curWeather?.temp_c} &deg;C</p>
          <div className="pressure">
            <img src={temp} height={30} alt="temp" />
            <p>
              {curWeather?.pressure_mb} mbar <br /> pressure
            </p>
          </div>
        </div>
        <div className="sep-line"></div>
        <div className="wind">
          <div className="wind-div">
            <img src={wind} width={25} alt="wind" />
            <p>
              {curWeather?.wind_kph}
              km/h <br /> wind
            </p>
          </div>
          <div className="wind-div">
            <img src={humid} width={25} alt="humid" />
            <p>
              {curWeather?.humidity}% <br /> humidity
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
