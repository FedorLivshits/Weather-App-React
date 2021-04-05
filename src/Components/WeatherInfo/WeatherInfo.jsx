import React from "react";


function WeatherInfo({temp_max, temp_min, feels_like, wind, sunset, sunrise}) {
    const getSunsetTime = () => {
        let date = new Date()
        date.setTime(sunset)
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }
    const getSunriseTime = () => {
        let date = new Date()
        date.setTime(sunrise)
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }

    return (
    <div className="weather__info">
        <div className="column-1">
            <ul className="column">
                <li>
                    <span> Max-temp: </span>
                   {temp_max}°
                </li>
                <li><span> Min-temp: </span>{temp_min}° </li>
                <li><span> Feels like: </span>{feels_like}° </li>
            </ul>
        </div>
        <div className="column-2">
            <ul className="column">
                <li><span> Wind: </span> {wind}m/s </li>
                <li><span> Sunset: </span> {getSunsetTime()} </li>
                <li><span> Sunrise: </span> {getSunriseTime()} </li>
            </ul>
        </div>
    </div>
)
}
export default WeatherInfo