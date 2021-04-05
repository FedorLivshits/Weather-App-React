import React from "react";


function WeatherApp({weather}) {
        return (
            <>
                <header>Weather App</header>
                <div className="container">
                    <div className="inputField">
                        <input type="text" placeholder="Enter city"/>
                        <button>Find</button>
                    </div>
                    <div className="city__and__date">
                        <div className="city-name">{weather.name}, {weather.sys.country}</div>
                        <div className="date">
                            {new Date().toLocaleString('en', {weekday: 'long'})} {new Date().getDay()} April
                        </div>
                    </div>

                    <div className="weather__content">
                        <div className="weather__image">
                            <WeatherImage/>
                            <div className="weather__image-info">
                                <div className="weather__temp">{Math.round(weather.main.temp)}°</div>
                                <div className="weather__sky">{weather.weather[0].description}</div>
                            </div>

                        </div>
                        <div className="weather__info">

                            <div className="column-1">
                                <ul className="todoList">
                                    <li>
                                        <span> Max-temp: </span>
                                        {weather.main.temp_max}°
                                    </li>
                                    <li> <span> Min-temp: </span>{weather.main.temp_min}°</li>
                                    <li> <span> Feels like: </span>{weather.main.feels_like}°</li>
                                </ul>
                            </div>
                            <div className="column-2">
                                <ul className="todoList">
                                    <li><span> Wind: </span> {weather.wind.speed}m/s</li>
                                    <li><span> Sunset: </span> {weather.sys.sunset} </li>
                                    <li><span> Sunrise: </span> {weather.sys.sunrise}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="weather___for-five-days">
                        <MiniWeatherDay/>
                        <MiniWeatherDay/>
                        <MiniWeatherDay/>
                        <MiniWeatherDay/>
                        <MiniWeatherDay/>
                    </div>
                </div>
            </>
        );
}

function MiniWeatherDay() {
    return (
        <div className="weather__day">
            <div className="weatherIcon">
                <div className="sunny">
                    <div className="inner"></div>
                </div>
            </div>
            <div className="day-temp">5°</div>
            <div className="day-sky">sunny</div>
        </div>
    )
}

function WeatherImage() {
    return (

        <div className="weather-sun">
            <div className="sun">
                <div className="rays"></div>
                <div className="rays"></div>
                <div className="rays"></div>
                <div className="rays"></div>
            </div>
        </div>
        // <div className="weather-cloud">
        //     <div className="cloud"></div>
        //     <div className="cloud"></div>
        // </div>
        // <div className="weather-snow">
        //     <div className="snow">
        //         <div className="f"></div>
        //     </div>
        // </div>
        // <div className="weather-cloudAndSun">
        //     <div className="cloud"></div>
        //     <div className="sun">
        //         <div className="rays"></div>
        //         <div className="rays"></div>
        //         <div className="rays"></div>
        //         <div className="rays"></div>
        //     </div>
        // </div>
        // <div className="weather-rain">
        //     <div className="cloud"></div>
        //     <div className="rain"></div>
        //     <div className="rain"></div>
        //     <div className="rain"></div>
        //     <div className="rain"></div>
        // </div>
    )
}

export default WeatherApp;
