import React from "react";


function WeatherApp() {
    return (
        <>
            <header>Weather App</header>
            <div className="wrapper">
                <div className="inputField">
                    <input type="text" placeholder="find a city"/>
                    <button><i className="fas fa-plus">+</i></button>
                </div>
                <ul className="todoList">

                </ul>
                <div className="footer">

                </div>
            </div>
        </>
    );
}

export default WeatherApp;
