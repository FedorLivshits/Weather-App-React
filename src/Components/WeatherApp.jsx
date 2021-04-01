import React from "react";


function WeatherApp() {
    return (
        <>
            <header>Weather App</header>
            <div className="container">

                <div className="inputField">
                    <input type="text" placeholder="find a city"/>
                    <button><i className="fas fa-plus">+</i></button>
                </div>

            <div className="weather__content">
            <div className="weather-sun">
                <div className="sun">
                    <div className="rays"></div>
                    <div className="rays"></div>
                    <div className="rays"></div>
                    <div className="rays"></div>
                </div>
            </div>
                {/*<div className="weather-cloud">*/}
                {/*    <div className="cloud"></div>*/}
                {/*    <div className="cloud"></div>*/}
                {/*</div>*/}
                {/*<div className="weather-snow">*/}
                {/*    <div className="snow">*/}
                {/*        <div className="f"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="weather-cloudAndSun">*/}
                {/*    <div className="cloud"></div>*/}
                {/*    <div className="sun">*/}
                {/*        <div className="rays"></div>*/}
                {/*        <div className="rays"></div>*/}
                {/*        <div className="rays"></div>*/}
                {/*        <div className="rays"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="weather-rain">*/}
                {/*    <div className="cloud"></div>*/}
                {/*    <div className="rain"></div>*/}
                {/*    <div className="rain"></div>*/}
                {/*    <div className="rain"></div>*/}
                {/*    <div className="rain"></div>*/}
                {/*</div>*/}

            <div className="weather__info">

                <ul className="todoList">

                </ul>
                <div className="footer">

                </div>
            </div>
            </div>
            </div>
        </>
    );
}

export default WeatherApp;
