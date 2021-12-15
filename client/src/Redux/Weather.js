import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = "a4a90310c5798c25f8cf1b53c610e354";
// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.openweathermap.org/" }),
  endpoints: (builder) => ({
    getLatLong: builder.query({
      query: (searchCity) => `data/2.5/weather?q=${searchCity}&appid=${apiKey}`,
    }),
    getCurrentForecast: builder.query({
      query: (coord) =>
        `data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,hourly&appid=${apiKey}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetLatLongQuery,
  useLazyGetLatLongQuery,
  useLazyGetCurrentForecastQuery,
} = weatherApi;
console.log(weatherApi);
