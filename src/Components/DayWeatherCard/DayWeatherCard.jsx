import React from "react";
import "./DayWeatherCard.css"


function DayWeatherCard({day, fiveDaysWeather}) {
    let temp = Math.round(day.temp)

    if (fiveDaysWeather.length) {
        switch (day.mainDescription) {
            case "Clear":
                return   <div className="weather__day">
                    <div className="weatherIcon">
                        <div className="sunny">
                            <div className="inner"></div>
                        </div>
                    </div>
                    <div className="day-temp">{temp}°</div>
                    <div className="day-sky">{day.description}</div>
                </div>
            case "Clouds":
                return <div className="weather__day">
                    <div className="weatherIcon">
                        <div className="cloudy">
                            <div className="inner"></div>
                        </div>
                    </div>
                    <div className="day-temp">{temp}°</div>
                    <div className="day-sky">{day.description}</div>
                </div>
            case "Rain":
                return <div className="weather__day">
                    <div className="weatherIcon">
                        <div className="rain">
                            <div className="inner"></div>
                        </div>
                    </div>
                    <div className="day-temp">{temp}°</div>
                    <div className="day-sky">{day.description}</div>
                </div>
            case "Snow":
                return <div className="weather__day">
                    <div className="weatherIcon">
                        <div className="snow">
                            <div className="inner"></div>
                        </div>
                    </div>
                    <div className="day-temp">{temp}°</div>
                    <div className="day-sky">{day.description}</div>
                </div>
            default:
                return ""
        }
    } else {
        return <div className="weather__day">
            <div className="weatherIcon">
                <div className="sunny">
                    <div className="inner"></div>
                </div>
            </div>
            <div className="day-temp">load</div>
            <div className="day-sky">load</div>
        </div>
    }
}
export default DayWeatherCard;