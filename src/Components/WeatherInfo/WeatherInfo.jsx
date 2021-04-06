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
                <li><span> Wind: </span> {wind}m/s </li>
                <li><span> Sunset: </span> {getSunsetTime()} </li>
                <li><span> Sunrise: </span> {getSunriseTime()} </li>
            </ul>
        </div>
    </div>
)
}
export default WeatherInfo