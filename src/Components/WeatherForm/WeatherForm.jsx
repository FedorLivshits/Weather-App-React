import React from "react";
import icon from "../../assets/images/search-icon.svg"


function WeatherForm({updateInputText}) {

    const inputCity = (event) => {
        let city = event.target.value
        updateInputText(city)
    }
    const searchCity = () => {

    }

    return (
        <form className="inputField">
            <input type="text" placeholder="Enter city" onChange={inputCity}/>
            <img src={icon} alt="" onClick={searchCity}/>

        </form>
    )
}

export default WeatherForm;