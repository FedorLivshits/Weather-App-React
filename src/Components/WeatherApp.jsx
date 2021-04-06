import React from "react";
import WeatherImage from "./WeatherImage/WeatherImage";
import WeatherForm from "./WeatherForm/WeatherForm";
import WeatherCityAndDate from "./WeatherCityAndDate/WeatherCityAndDate";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import DayWeatherCard from "./DayWeatherCard/DayWeatherCard";


function WeatherApp({weather, fiveDaysWeather}) {

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
                    <DayWeatherCard day={fiveDaysWeather[0]} fiveDaysWeather={fiveDaysWeather}/>
                    <DayWeatherCard day={fiveDaysWeather[1]} fiveDaysWeather={fiveDaysWeather}/>
                    <DayWeatherCard day={fiveDaysWeather[2]} fiveDaysWeather={fiveDaysWeather}/>
                    <DayWeatherCard day={fiveDaysWeather[3]} fiveDaysWeather={fiveDaysWeather}/>
                    <DayWeatherCard day={fiveDaysWeather[4]} fiveDaysWeather={fiveDaysWeather}/>
                </div>
            </div>
        </>
    );
}
function WeatherImageInfo({temp, description}) {
    return(
        <div className="weather__image-info">
            <div className="weather__temp">{Math.round(temp)}°</div>
            <div className="weather__description">{description}</div>
        </div>
    )
}



export default WeatherApp;
