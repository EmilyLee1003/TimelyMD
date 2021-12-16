import React from "react";

function ForecastResults(props) {
  return (
    <div className="forecastResult">
      <br></br>
      <br></br>
      <br></br>
      <p>{props.fromNow} day/s from today</p>
      <p>
        {props.forecastData.weather[0].description}
        <br></br>
        day: {props.forecastData.temp.day}°F
        <br></br>
        night: {props.forecastData.temp.night}°F
      </p>
    </div>
  );
}

export default ForecastResults;
