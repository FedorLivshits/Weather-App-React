import React from "react";
import  classes from "./WeatherImage.module.css"


function WeatherImage({weatherDescription}) {
    switch (weatherDescription) {
        case "Clear":
            return <div className={classes["weather-sun"]}>
                <div className={classes.sun}>
                    <div className={classes.rays}></div>
                    <div className={classes.rays}></div>
                    <div className={classes.rays}></div>
                    <div className={classes.rays}></div>
                </div>
            </div>
        case "Clouds":
            return <div className={classes["weather-cloud"]}>
                <div className={classes.cloud}></div>
                <div className={classes.cloud}></div>
            </div>
        case "Rain":
            return <div className={classes["weather-rain"]}>
                <div className={classes.cloud}></div>
                <div className={classes.rain}></div>
                <div className={classes.rain}></div>
                <div className={classes.rain}></div>
                <div className={classes.rain}></div>
            </div>
        case "Snow":
            return <div className={classes["weather-snow"]}>
                <div className={classes.snow}>
                    <div className={classes.f}></div>
                </div>
            </div>
        default:
            return ""
    }
}
export default WeatherImage;