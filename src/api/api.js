import * as axios from "axios";

const baseURL = `http://api.openweathermap.org/data/2.5/`
const API_KEY = `9e66b26ecdfc14c9acc56a4db3a671f2`

export const getWeather = (city) => {
   return axios.get(baseURL + `weather?q=${city}&units=metric&appid=${API_KEY}`)
       .then(response => response.data)
}

export const getFiveDaysWeather = (city) => {
    return  axios.get(baseURL + `forecast?q=${city}&units=metric&appid=${API_KEY}`)
        .then(response => response.data)
}
