import React, {useEffect} from 'react'
import {WeatherImage, WeatherImageInfo} from './WeatherImage/WeatherImage'
import WeatherForm from './WeatherForm/WeatherForm'
import WeatherCityAndDate from './WeatherCityAndDate/WeatherCityAndDate'
import WeatherInfo from './WeatherInfo/WeatherInfo'
import DayWeatherCard from './DayWeatherCard/DayWeatherCard'
import {usePosition} from './Hook/usePosition'
import {getWeatherByCoordinates} from '../api/api'
import {getAllWeatherTC} from '../redux/reducers/weather-reducer'


function WeatherApp({weather, fiveDaysWeather, updateInputText, getAllWeather, isNotEmptyObj, isFetching}) {
    return (
        <>
            <header>Weather App</header>
            <div className="container">
                <WeatherForm updateInputText={updateInputText} getAllWeather={getAllWeather}
                             fiveDaysWeather={fiveDaysWeather} isFetching={isFetching}/>

                {
                    (fiveDaysWeather.length && isNotEmptyObj(weather))
                        ?
                        <>
                            <WeatherCityAndDate city={weather.name} country={weather.sys.country}/>
                            <div className="weather__content">
                                <div className="weather__image-inner">
                                    <div className="weather__image">
                                        <WeatherImage weatherDescription={weather.weather[0].main}/>
                                    </div>
                                    <WeatherImageInfo temp={weather.main.temp}
                                                      description={weather.weather[0].description}/>

                                </div>
                                <WeatherInfo temp_max={weather.main.temp_max} temp_min={weather.main.temp_min}
                                             feels_like={weather.main.feels_like} wind={weather.wind.speed}
                                             sunrise={weather.sys.sunrise} sunset={weather.sys.sunset}/>
                            </div>
                            <div className="weather___for-five-days">
                                {fiveDaysWeather.map(day => <DayWeatherCard day={day}
                                                                            fiveDaysWeather={fiveDaysWeather}/>)}
                            </div>
                        </>
                        :
                        ''
                }
            </div>
        </>
    )
}

export default WeatherApp
