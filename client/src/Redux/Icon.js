import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "a4a90310c5798c25f8cf1b53c610e354";

export const weatherIcon = createApi({
  reducerPath: "weatherIcon",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://openweathermap.org/img/wn/",
  }),
  endpoints: (builder) => ({
    getCurrentIcon: builder.query({
      query: (weather) => `${weather.icon}@2x.png`,
    }),
  }),
});

export const { useGetCurrentICon } = weatherIcon;
