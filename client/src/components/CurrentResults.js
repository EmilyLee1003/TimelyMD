import React from "react";

function CurrentResults(props) {
  if (!props.currentData) {
    return null;
  }
  return (
    <div className="current">
      <p>{props.currentData.temp}</p>
      <p>{props.currentData.sunrise}</p>
      <p>{props.currentData.sunset}</p>
      <p>{props.currentData.humidity}</p>
    </div>
  );
}

export default CurrentResults;
