import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
    getAllWeatherTC,
    setWeather,
    toggleIsFetching,
    updateInputText
} from "../redux/reducers/weather-reducer";
import {setFiveDaysWeather} from "../redux/reducers/fiveDaysWeather-reducer";
import WeatherApp from "./WeatherApp";
import {getCityName, getFiveDaysWeather, getIsFetching, getWeather} from "../redux/selectors/selectors";
import {usePosition} from './Hook/usePosition'
import {getWeatherByCoordinates} from '../api/api'


function WeatherAppContainer({weather, fiveDaysWeather, updateInputText, isFetching, getAllWeatherTC, cityName, watch, settings}) {
    const {
        latitude,
        longitude,
        timestamp,
        accuracy,
        speed,
        error,
    } = usePosition(watch, settings)


    useEffect(() => {
        if (latitude !== undefined && longitude !== undefined) {
            getWeatherByCoordinates(latitude, longitude)
                .then(data => {
                    let city = data.name
                    getAllWeatherTC(city)
                })
        }
    }, [latitude, longitude])

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
        weather: getWeather(state),
        cityName: getCityName(state),
        fiveDaysWeather: getFiveDaysWeather(state),
        isFetching: getIsFetching(state)
    }
}


export default connect(mapStateToProps, {
    setWeather,
    setFiveDaysWeather,
    updateInputText,
    toggleIsFetching,
    getAllWeatherTC
})(WeatherAppContainer)
