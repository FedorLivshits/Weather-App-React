import React from "react";
import icon from "../../assets/images/search-icon.svg"


function WeatherForm({updateInputText, getAllWeather}) {

    const inputCity = (event) => {
        let city = event.target.value
        updateInputText(city)
    }
    const searchCity = () => {
        getAllWeather()
    }

    return (
        <form className="inputField">
            <input type="text" placeholder="Enter city" onChange={inputCity}/>
            <img src={icon} alt="" onClick={searchCity}/>

        </form>
    )
}

export default WeatherForm;