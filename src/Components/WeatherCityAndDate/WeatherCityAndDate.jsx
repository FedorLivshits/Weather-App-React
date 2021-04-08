import React from "react";


function WeatherCityAndDate({city, country}) {
    return (
        <div className="city__and__date">
            <div className="city-name">{city}, {country}</div>
            <div className="date">
                {new Date().toLocaleString('en', {weekday: 'long'})}
                {" "}
                {new Date().getDate()}
                {" "}
                {new Date().toLocaleString('en', {month: 'long'})}
                {" "}
                <div className="time">

                </div>

            </div>
        </div>
    )

}

export default WeatherCityAndDate