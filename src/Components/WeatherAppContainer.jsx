import React from "react";
import {connect} from "react-redux";
import {
    getAllWeatherTC,
    setWeather,
    toggleIsFetching,
    updateInputText
} from "../redux/weather-reducer";
import {setFiveDaysWeather} from "../redux/fiveDaysWeather-reducer";
import WeatherApp from "./WeatherApp";


function WeatherAppContainer({weather, fiveDaysWeather, updateInputText, isFetching, getAllWeatherTC, cityName}) {

    const getAllWeather = () => {
        getAllWeatherTC(cityName)
    }

    const isNotEmptyObj = (obj) => {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return (
        <WeatherApp getAllWeather={getAllWeather} isNotEmptyObj={isNotEmptyObj} weather={weather}
                    fiveDaysWeather={fiveDaysWeather} updateInputText={updateInputText} isFetching={isFetching}/>
    );

}

let mapStateToProps = (state) => {
    return {
        weather: state.weatherPage.weather,
        cityName: state.weatherPage.updateTextInput,
        fiveDaysWeather: state.fiveDaysWeather.fiveDaysWeather,
        isFetching: state.weatherPage.isFetching
    }
}


export default connect(mapStateToProps, {
    setWeather,
    setFiveDaysWeather,
    updateInputText,
    toggleIsFetching,
    getAllWeatherTC
})(WeatherAppContainer)
