import React, { useEffect, useState } from "react";
import Instance from "../Axios/Instance";
import SearchInput from "./searchInput";
import CurrentResults from "./CurrentResults";
import ForecastResults from "./ForecastResults";
import SaveButton from "./SaveButton";
import {
  useLazyGetLatLongQuery,
  useLazyGetCurrentForecastQuery,
} from "../Redux/Weather";

import "./style.css";

function Home() {
  const apiKey = "a4a90310c5798c25f8cf1b53c610e354";
  const [searchCity, setSearchCity] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [timestamp, setTimestamp] = useState("");
  const [savedCities, setSavedCities] = useState([]);

  const [getLatLong, result] = useLazyGetLatLongQuery();
  const [getCurrentForecast, forecastResult] = useLazyGetCurrentForecastQuery();
  console.log(forecastResult);
  const handleClick = () => {
    const date = new Date();
    setTimestamp(date);
    getLatLong(searchCity).then((result) => {
      console.log(result.data.coord);
      getCurrentForecast(result.data.coord);
    });
    // Instance.get("data/2.5/weather?q=" + searchCity + "&appid=" + apiKey).then(
    //   (response) => {
    //     setLongitude(response.data.coord.lon);
    //     setLatitude(response.data.coord.lat);
    //   }
    // );

    // Instance.get(
    //   "data/2.5/onecall?lat=" +
    //     latitude +
    //     "&lon=" +
    //     longitude +
    //     "&exclude=minutely,hourly&appid=" +
    //     apiKey
    // )

    //   .then((response) => {
    //     setCurrent(response.data.current);
    //     setForecast(response.data.daily);
    //   })

    //   .catch((err) => console.log(err));
  };

  const saveCity = () => {
    setSavedCities((previous) => [...previous, searchCity]);
  };

  const showSavedCity = (data) => {
    console.log("saved city has been clicked", data);

    // const date = new Date();

    // Instance.get("data/2.5/weather?q=" + data + "&appid=" + apiKey).then(
    //   (response) => {
    //     setLongitude(response.data.coord.lon);
    //     setLatitude(response.data.coord.lat);
    //   }
    // );

    // Instance.get(
    //   "data/2.5/onecall?lat=" +
    //     latitude +
    //     "&lon=" +
    //     longitude +
    //     "&exclude=minutely,hourly&appid=" +
    //     apiKey
    // )

    //   .then((response) => {
    //     setCurrent(response.data.current);
    //     setForecast(response.data.daily);
    //   })

    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <SearchInput
        onChange={(e) => setSearchCity(e.target.value)}
        onClick={handleClick}
      />
      <SaveButton button={saveCity}> </SaveButton>
      {savedCities.map((data, key) => {
        return (
          <li
            className="list"
            key={key}
            onClick={() => {
              showSavedCity(data);
            }}
          >
            {data}
          </li>
        );
      })}

      <CurrentResults
        currentData={forecastResult?.data?.current}
      ></CurrentResults>

      {forecastResult?.data?.daily.map((data, key) => {
        return (
          <ForecastResults key={key} forecastData={data}></ForecastResults>
        );
      })}
    </div>
  );
}

export default Home;
