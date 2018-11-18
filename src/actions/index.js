const key = "your_key";
// const url = `http://samples.openweathermap.org/data/2.5/forecast?appid=${key}`;

import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  // const finalUrl = `${url}&q=${city},us`;
  const url =
    "http://samples.openweathermap.org/data/2.5/forecast?q=" +
    city +
    ",us&appid=" +
    key;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
