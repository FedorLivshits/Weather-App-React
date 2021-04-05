import React from "react";
import icon from "../../assets/images/search-icon.svg"

function WeatherForm() {
    return (
        <form className="inputField">

                <input type="text" placeholder="Enter city" />
                <img src={icon} alt=""/>

        </form>
    )
}

export default WeatherForm;