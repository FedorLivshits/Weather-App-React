import React from "react";
import icon from "../../assets/images/search-icon.svg"
import preloader from "../../assets/images/preloader.svg"
import classes from "./WeatherForm.module.css"


function WeatherForm({updateInputText, getAllWeather, isFetching}) {

    const inputCity = (event) => {
        let city = event.target.value
        updateInputText(city)
    }
    const searchCity = () => {
        getAllWeather()
    }
    const enterCity = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            getAllWeather()
        }
    }

    return (
        <form className={classes.inputField}>
            <input type="text" placeholder="Enter city" onChange={inputCity} onKeyPress={enterCity}/>
            {
                isFetching
                    ?
                <img className={classes.preloader} src={preloader} alt=""/>
                    :
                <img src={icon} alt="" onClick={searchCity}/>
            }
        </form>
    )
}

export default WeatherForm;