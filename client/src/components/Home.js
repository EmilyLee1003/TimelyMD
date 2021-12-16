import React, { useEffect, useState } from "react";
import Instance from "../Axios/Instance";
import SearchInput from "./searchInput";
import CurrentResults from "./CurrentResults";
import ForecastResults from "./ForecastResults";
import SavedList from "./SavedList";
import {
  useLazyGetLatLongQuery,
  useLazyGetCurrentForecastQuery,
} from "../Redux/Weather";

import "./style.css";

function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [savedCities, setSavedCities] = useState([]);
  const [getLatLong, result] = useLazyGetLatLongQuery();
  const [getCurrentForecast, forecastResult] = useLazyGetCurrentForecastQuery();
  // const [iconID, setIConID] = useState([]);
  const [show, setShow] = useState(false);
  const [cityTitle, setCityTitle] = useState("");
  // console.log(show);
  // const url = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
  // console.log("url", url);
  // console.log("icon id", iconID);
  const handleClick = () => {
    let date = new Date();
    var now_utc = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );

    let nowdate = new Date(now_utc).toISOString();
    setTimestamp(nowdate);

    //redux to get weather forecast
    getLatLong(searchCity).then((result) => {
      // setIConID(result.data.weather[0].icon);
      console.log(result);
      getCurrentForecast(result.data.coord);
    });
    setCityTitle(searchCity);
  };

  const saveCity = () => {
    setSavedCities((previous) => [...previous, searchCity]);
    setShow(true);
  };

  const showSavedCity = (data) => {
    console.log("saved city has been clicked", data);
    let date = new Date();
    var now_utc = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );

    let nowdate = new Date(now_utc).toISOString();
    setTimestamp(nowdate);

    getLatLong(data).then((result) => {
      console.log(result.data.coord);
      getCurrentForecast(result.data.coord);
    });

    setCityTitle(data);
  };

  return (
    <div>
      <div className="searchInput">
        <SearchInput
          onChange={(e) => setSearchCity(e.target.value)}
          onClick={handleClick}
          onClick1={saveCity}
        />
      </div>

      <div className="forecast">
        <CurrentResults
          cityName={cityTitle}
          // image={url}
          timestamp={timestamp}
          currentData={forecastResult?.data?.current}
        ></CurrentResults>

        {forecastResult?.data?.daily.map((data, key) => {
          return (
            <ForecastResults
              key={key}
              fromNow={key + 1}
              forecastData={data}
            ></ForecastResults>
          );
        })}
      </div>

      {show ? (
        <div className="savedCities">
          <div> Saved Cities: </div>
          {savedCities.map((data, key) => {
            return (
              <SavedList
                key={key}
                onClick={() => {
                  showSavedCity(data);
                }}
                list={data}
              ></SavedList>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
export default Home;
