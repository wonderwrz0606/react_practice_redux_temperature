import axios from 'axios';

const API_KEY = "85330c565d35b18a7ba7b83e35ef462e";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creator
// These two ways are identical same
// Traditonal way
// function fetchWeather(city) {
// ES6 way
const fetchWeather = (city) => {
  // These two are the same url
  // const url = ROOT_URL + 'q=' + city + ',us';
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url, null, {}); // This will return a promise
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

// Note:
// When export functions as default, do not use { abc } from '' when import it,
// use directly `abc` from '' instead
// export default fetchWeather;

export default fetchWeather;
