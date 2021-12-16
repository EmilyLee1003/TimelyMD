import React, { useState } from "react";

function CurrentResults(props) {
  if (!props.currentData) {
    return null;
  }

  return (
    <div className="current">
      {/* <div className="icon"> */}
      {/* <img url={props.image}></img> */}
      {/* </div> */}
      <p> Today in</p>
      <h1> {props.cityName}</h1>

      <p>
        {props.currentData.weather[0].description}
        <br></br>
        {props.currentData.temp}°F
      </p>
      <p>{props.timestamp}</p>
    </div>
  );
}

export default CurrentResults;
