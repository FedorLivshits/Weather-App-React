import React from "react";
import classes from "./DayWeatherCard.module.css"
import preloader from "../../assets/images/preloader.svg"

function DayWeatherCard({day, fiveDaysWeather}) {
    if (fiveDaysWeather.length) {
        let temp = Math.round(day.temp)
        let date = day.date.slice(5,10).split("-").reverse().join(".")
        switch (day.mainDescription) {
            case "Clear":
                return <ClearSun temp={temp} description={day.description} date={date}/>
            case "Clouds":
                return <Clouds temp={temp} description={day.description} date={date}/>
            case "Rain":
                return <Rain temp={temp} description={day.description} date={date}/>
            case "Snow":
                return <Snow temp={temp} description={day.description} date={date}/>
            default:
                return ""
        }
    }
    if (!fiveDaysWeather.length) {
        return <div className={classes.weather__day}>
            <div className={classes.weatherIcon}>
                <img src={preloader} alt=""/>
            </div>
        </div>
    }
}

function ClearSun({temp, description, date}) {
    return (
        <div className={classes.weather__day}>
            <div className={classes["day-date"]}>{date}</div>
            <div className={classes.weatherIcon}>
                <div className={classes.sunny}>
                    <div className={classes.inner}></div>
                </div>
            </div>
            <div className={classes["day-temp"]}>{temp}°</div>
            <div className={classes["day-sky"]}>{description}</div>
        </div>
    )
}

function Clouds({temp, description, date}) {
    return (
        <div className={classes.weather__day}>
            <div className={classes["day-date"]}>{date}</div>
            <div className={classes.weatherIcon}>
                <div className={classes.cloudy}>
                    <div className={classes.inner}></div>
                </div>
            </div>
            <div className={classes["day-temp"]}>{temp}°</div>
            <div className={classes["day-sky"]}>{description}</div>
        </div>
    )
}
function Rain({temp, description, date}) {
    return (
        <div className={classes.weather__day}>
            <div className={classes["day-date"]}>{date}</div>
            <div className={classes.weatherIcon}>
                <div className={classes.rain}>
                    <div className={classes.inner}></div>
                </div>
            </div>
            <div className={classes["day-temp"]}>{temp}°</div>
            <div className={classes["day-sky"]}>{description}</div>
        </div>
    )
}
function Snow({temp, description, date}) {
    return (
        <div className={classes.weather__day}>
            <div className={classes["day-date"]}>{date}</div>
            <div className={classes.weatherIcon}>
                <div className={classes.snow}>
                    <div className={classes.inner}></div>
                </div>
            </div>
            <div className={classes["day-temp"]}>{temp}°</div>
            <div className={classes["day-sky"]}>{description}</div>
        </div>
    )
}


export default DayWeatherCard;