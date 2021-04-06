import React from "react";
import classes from "./DayWeatherCard.module.css"


function DayWeatherCard({day, fiveDaysWeather}) {
    if (fiveDaysWeather.length) {
        let temp = Math.round(day.temp)
        switch (day.mainDescription) {
            case "Clear":
                return   <div className={classes.weather__day}>
                    <div className={classes.weatherIcon}>
                        <div className={classes.sunny}>
                            <div className={classes.inner}></div>
                        </div>
                    </div>
                    <div className={classes["day-temp"]}>{temp}°</div>
                    <div className={classes["day-sky"]}>{day.description}</div>
                </div>
            case "Clouds":
                return <div className={classes.weather__day}>
                    <div className={classes.weatherIcon}>
                        <div className={classes.cloudy}>
                            <div className={classes.inner}></div>
                        </div>
                    </div>
                    <div className={classes["day-temp"]}>{temp}°</div>
                    <div className={classes["day-sky"]}>{day.description}</div>
                </div>
            case "Rain":
                return <div className={classes.weather__day}>
                    <div className={classes.weatherIcon}>
                        <div className={classes.rain}>
                            <div className={classes.inner}></div>
                        </div>
                    </div>
                    <div className={classes["day-temp"]}>{temp}°</div>
                    <div className={classes["day-sky"]}>{day.description}</div>
                </div>
            case "Snow":
                return <div className={classes.weather__day}>
                    <div className={classes.weatherIcon}>
                        <div className={classes.snow}>
                            <div className={classes.inner}></div>
                        </div>
                    </div>
                    <div className={classes["day-temp"]}>{temp}°</div>
                    <div className={classes["day-sky"]}>{day.description}</div>
                </div>
            default:
                return ""
        }
    } else {
        return <div className={classes.weather__day}>
            <div className={classes.weatherIcon}>
                <div className={classes.sunny}>
                    <div className={classes.inner}></div>
                </div>
            </div>
            <div className={classes["day-temp"]}>load</div>
            <div className={classes["day-sky"]}>load</div>
        </div>
    }
}
export default DayWeatherCard;