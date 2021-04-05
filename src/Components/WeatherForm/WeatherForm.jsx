import React from "react";


function WeatherForm() {
    return (
        <form className="inputField">
            <input type="text" placeholder="Enter city"/>
            <button>Find</button>
        </form>
    )
}

export default WeatherForm;