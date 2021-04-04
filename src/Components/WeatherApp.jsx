import React from "react";
import * as axios from 'axios'

class WeatherApp extends React.Component {
    componentDidMount() {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=9e66b26ecdfc14c9acc56a4db3a671f2")
            .then(response => {
                debugger
                console.log(response.data)
            })
    }

    render() {
        return (
            <>
                <header>Weather App</header>
                <div className="container">
                    <div className="inputField">
                        <input type="text" placeholder="Enter city"/>
                    </div>
                    <div className="city__and__date">
                        <div className="city-name">St-Petersburg, RU</div>
                        <div className="date">
                            {new Date().toLocaleString('en', {weekday: 'long'})} {new Date().getDay()} April
                        </div>
                    </div>

                    <div className="weather__content">
                        <div className="weather__image">
                            <WeatherImage/>
                            <div className="weather__image-info">
                                <div className="weather__temp">5°</div>
                                <div className="weather__sky">sunny</div>
                            </div>

                        </div>
                        <div className="weather__info">

                            <div className="column-1">
                                <ul className="todoList">
                                    <li>Max-temp:</li>
                                    <li>Min-temp:</li>
                                    <li>Feels like:</li>
                                </ul>
                            </div>
                            <div className="column-2">
                                <ul className="todoList">
                                    <li>Wind:</li>
                                    <li>Sunset:</li>
                                    <li>Sunrise:</li>
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
