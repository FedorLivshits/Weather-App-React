import React from "react";


function WeatherInfo({temp_max, temp_min, feels_like, wind, gust, humidity}) {
    let tempMax = Math.round(temp_max)
    let tempMin = Math.round(temp_min)
    let feelsLike = Math.round(feels_like)

    return (
    <div className="weather__info">
        <div className="column-1">
            <ul className="column">
                <li>
                    <span> Max-temp: </span>
                   {tempMax}°
                </li>
                <li><span> Min-temp: </span>{tempMin}° </li>
                <li><span> Feels like: </span>{feelsLike}° </li>
            </ul>
        </div>
        <div className="column-2">
            <ul className="column">
                <li><span> Wind speed: </span> {wind}m/s </li>
                <li><span> Wind gust: </span> {gust}m/s </li>
                <li><span> Humidity: </span> {humidity}% </li>
            </ul>
        </div>
    </div>
)
}
export default WeatherInfo