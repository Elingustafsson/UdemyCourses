import axios from 'axios';

const API_KEY = 'c3caa494efc29f476c38980010fed0da';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
const url = `${ROOT_URL}&q=${city},us`;
const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };

}
