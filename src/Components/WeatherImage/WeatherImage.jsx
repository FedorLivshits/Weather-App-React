import React from "react";
import  classes from "./WeatherImage.module.css"


export const WeatherImage = ({weatherDescription}) => {

        switch (weatherDescription) {
            case "Clear":
                return <div className={classes["weather-sun"]}>
                    <div className={classes.sun}>
                        <div className={classes.rays}/>
                        <div className={classes.rays}/>
                        <div className={classes.rays}/>
                        <div className={classes.rays}/>
                    </div>
                </div>
            case "Clouds":
                return <div className={classes["weather-cloud"]}>
                    <div className={classes.cloud}/>
                    <div className={classes.cloud}/>
                </div>
            case "Rain":
                return <div className={classes["weather-rain"]}>
                    <div className={classes.cloud}/>
                    <div className={classes.rain}/>
                    <div className={classes.rain}/>
                    <div className={classes.rain}/>
                    <div className={classes.rain}/>
                </div>
            case "Snow":
                return <div className={classes["weather-snow"]}>
                    <div className={classes.snow}>
                        <div className={classes.f}/>
                    </div>
                </div>
            default:
                return ""
        }
}

export function WeatherImageInfo({temp, description}) {
    return (
        <div className="weather__image-info">
            <div className="weather__temp">{Math.round(temp)}°</div>
            <div className="weather__description">{description}</div>
        </div>
    )
}

