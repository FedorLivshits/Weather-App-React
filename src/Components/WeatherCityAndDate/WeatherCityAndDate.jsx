import React from "react";
import classes from "./WeatherCityAndDate.module.css"

function WeatherCityAndDate({city, country}) {
    return (
        <div className={classes.city__and__date}>
            <div className={classes["city-name"]}>{city}, {country}</div>
            <div className={classes.date}>
                {new Date().toLocaleString('en', {weekday: 'long'})}
                {" "}
                {new Date().getDate()}
                {" "}
                {new Date().toLocaleString('en', {month: 'long'})}
                {" "}
            </div>
        </div>
    )

}

export default WeatherCityAndDate