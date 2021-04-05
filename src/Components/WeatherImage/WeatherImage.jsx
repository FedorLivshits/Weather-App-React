import React from "react";
import "./WeatherImage.css"


function WeatherImage({weatherDescription}) {
    switch (weatherDescription) {
        case "Clear":
            return <div className="weather-sun">
                <div className="sun">
                    <div className="rays"></div>
                    <div className="rays"></div>
                    <div className="rays"></div>
                    <div className="rays"></div>
                </div>
            </div>
        case "Clouds":
            return <div className="weather-cloud">
                <div className="cloud"></div>
                <div className="cloud"></div>
            </div>
        case "Rain":
            return <div className="weather-rain">
                <div className="cloud"></div>
                <div className="rain"></div>
                <div className="rain"></div>
                <div className="rain"></div>
                <div className="rain"></div>
            </div>
        case "Snow":
            return <div className="weather-snow">
                <div className="snow">
                    <div className="f"></div>
                </div>
            </div>
        default:
            return ""
    }
}
export default WeatherImage;