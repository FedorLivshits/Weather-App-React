import React from "react";


function WeatherApp() {
    return (
        <>
            <header>Weather App</header>
            <div className="container">
                <div className="inputField">
                    <input type="text" placeholder="Enter city"/>
                </div>
                <div className="city__and__date">
                    <div className="city-name">St-Petersburg, RU</div>
                    <div className="date">Thursday 1 April</div>
                </div>

            <div className="weather__content">
                <div className="weather__image">
                    <div className="weather-sun">
                        <div className="sun">
                            <div className="rays"></div>
                            <div className="rays"></div>
                            <div className="rays"></div>
                            <div className="rays"></div>
                        </div>
                    </div>
                    <div className="weather__image-info">
                        <div className="weather__temp">5°</div>
                        <div className="weather__sky">sunny</div>
                    </div>

                </div>

                {/*<div className="weather-cloud">*/}
                {/*    <div className="cloud"></div>*/}
                {/*    <div className="cloud"></div>*/}
                {/*</div>*/}
                {/*<div className="weather-snow">*/}
                {/*    <div className="snow">*/}
                {/*        <div className="f"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="weather-cloudAndSun">*/}
                {/*    <div className="cloud"></div>*/}
                {/*    <div className="sun">*/}
                {/*        <div className="rays"></div>*/}
                {/*        <div className="rays"></div>*/}
                {/*        <div className="rays"></div>*/}
                {/*        <div className="rays"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="weather-rain">*/}
                {/*    <div className="cloud"></div>*/}
                {/*    <div className="rain"></div>*/}
                {/*    <div className="rain"></div>*/}
                {/*    <div className="rain"></div>*/}
                {/*    <div className="rain"></div>*/}
                {/*</div>*/}

            <div className="weather__info">

                <ul className="todoList">
                    <li>High:</li>
                    <li>Low:</li>
                    <li>Wind:</li>
                    <li>Sunset:</li>
                    <li>Sunrise:</li>
                </ul>
            </div>
            </div>
                <div className="weather___for-five-days">
                    <div className="weather__day">
                        <div className="weatherIcon">
                            <div className="sunny">
                                <div className="inner"></div>
                            </div>
                        </div>
                        <div className="day-temp">5°</div>
                        <div className="day-sky">sunny</div>
                    </div>
                    <div className="weather__day">
                        <div className="weatherIcon">
                            <div className="sunny">
                                <div className="inner"></div>
                            </div>
                        </div>
                        <div className="day-temp">5°</div>
                        <div className="day-sky">sunny</div>
                    </div>
                    <div className="weather__day">
                        <div className="weatherIcon">
                            <div className="sunny">
                                <div className="inner"></div>
                            </div>
                        </div>
                        <div className="day-temp">5°</div>
                        <div className="day-sky">sunny</div>
                    </div>
                    <div className="weather__day">
                        <div className="weatherIcon">
                            <div className="sunny">
                                <div className="inner"></div>
                            </div>
                        </div>
                        <div className="day-temp">5°</div>
                        <div className="day-sky">sunny</div>
                    </div>
                    <div className="weather__day">
                        <div className="weatherIcon">
                            <div className="sunny">
                                <div className="inner"></div>
                            </div>
                        </div>
                        <div className="day-temp">5°</div>
                        <div className="day-sky">sunny</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherApp;
