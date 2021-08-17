import React from 'react'
import DayWeatherCard from './DayWeatherCard/DayWeatherCard'
import WeatherCityAndDate from './WeatherCityAndDate/WeatherCityAndDate'
import WeatherForm from './WeatherForm/WeatherForm'
import {WeatherImage, WeatherImageInfo} from './WeatherImage/WeatherImage'
import WeatherInfo from './WeatherInfo/WeatherInfo'


function WeatherApp({weather, fiveDaysWeather, getAllWeather, isNotEmptyObj}) {
    return (
        <>
            <header>
                <h1>
                    Weather App
                </h1>
            </header>
            <div className="container">
                <WeatherForm getAllWeather={getAllWeather}/>
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
                                             gust={weather.wind.gust} humidity={weather.main.humidity}/>
                            </div>
                            <div className='weather___for-five-days-wrapper'>
                                <div className="weather___for-five-days">
                                    {fiveDaysWeather.map(day => <DayWeatherCard key={day.date} day={day}
                                                                                fiveDaysWeather={fiveDaysWeather}/>)}
                                </div>
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
