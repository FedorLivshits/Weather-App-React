import * as axios from "axios";

const baseURL = `http://api.openweathermap.org/data/2.5/`
const API_KEY = `5ecd4a82632c598bb30c30079ae66fdf`

export const getWeather = (city) => {
   return axios.get(baseURL + `weather?q=${city}&units=metric&appid=${API_KEY}`)
       .then(response => response.data)
}

export const getFiveDaysWeather = (city) => {
    return  axios.get(baseURL + `forecast?q=${city}&units=metric&appid=${API_KEY}`)
        .then(response => response.data)
}
export const getWeatherByCoordinates = (lat, lon) => {
    return axios.get(`${baseURL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(response => response.data)
}