import * as axios from "axios";

export const getWeather = () => {
   return axios.get("http://api.openweathermap.org/data/2.5/weather?q=Saint%20Petersburg&units=metric&appid=9e66b26ecdfc14c9acc56a4db3a671f2")
}

export const getFiveDaysWeather = () => {
    return  axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Saint%20Petersburg&units=metric&appid=9e66b26ecdfc14c9acc56a4db3a671f2")
}
