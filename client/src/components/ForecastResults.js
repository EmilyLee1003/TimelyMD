import React from "react";

function ForecastResults(props) {
  return (
    <div className="forecast">
      <p>{props.forecastData.weather[0].description}</p>
      <p>{props.forecastData.humidity}</p>
      <p>{props.forecastData.sunrise}</p>
      <p>{props.forecastData.sunset}</p>
      <p>{props.forecastData.temp.day}</p>
      <p>{props.forecastData.temp.night}</p>
    </div>
  );
}

export default ForecastResults;
