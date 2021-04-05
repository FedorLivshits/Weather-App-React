import React from "react";
import WeatherImage from "./WeatherImage/WeatherImage";
import WeatherForm from "./WeatherForm/WeatherForm";
import WeatherCityAndDate from "./WeatherCityAndDate/WeatherCityAndDate";
import WeatherInfo from "./WeatherInfo/WeatherInfo";


function WeatherApp({weather}) {

    return (
        <>
            <header>Weather App</header>
            <div className="container">
                <WeatherForm/>
                <WeatherCityAndDate city={weather.name} country={weather.sys.country}/>

                <div className="weather__content">
                    <div className="weather__image">
                        <WeatherImage weatherDescription={weather.weather[0].main}/>
                       <WeatherImageInfo temp={weather.main.temp} description={weather.weather[0].description}/>

                    </div>
                    <WeatherInfo temp_max={weather.main.temp_max} temp_min={weather.main.temp_min}
                                 feels_like={weather.main.feels_like} wind={weather.wind.speed}
                                 sunrise={weather.sys.sunrise} sunset={weather.sys.sunset}/>
                </div>
                <div className="weather___for-five-days">
                    <MiniWeatherCard/>
                    <MiniWeatherCard/>
                    <MiniWeatherCard/>
                    <MiniWeatherCard/>
                    <MiniWeatherCard/>
                </div>
            </div>
        </>
    );
}
function WeatherImageInfo({temp, description}) {
    return(
        <div className="weather__image-info">
            <div className="weather__temp">{Math.round(temp)}°</div>
            <div className="weather__sky">{description}</div>
        </div>
    )
}


function MiniWeatherCard() {
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


export default WeatherApp;
