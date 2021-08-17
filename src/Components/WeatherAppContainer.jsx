import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import WeatherApp from './WeatherApp'
import {getCityName, getFiveDaysWeather, getIsFetching, getWeather} from '../redux/selectors/selectors'
import {usePosition} from './Hook/usePosition'
import {getWeatherByCoordinates} from '../api/api'
import {getAllWeatherTC} from '../redux/reducers/weather-reducer'


const WeatherAppContainer = ({watch, settings}) => {
    const weather = useSelector(getWeather)
    const cityName = useSelector(getCityName)
    const fiveDaysWeather = useSelector(getFiveDaysWeather)
    const isFetching = useSelector(getIsFetching)

    const dispatch = useDispatch()

    const {latitude, longitude} = usePosition(watch, settings)

    useEffect(() => {
        if (latitude !== undefined && longitude !== undefined) {
            getWeatherByCoordinates(latitude, longitude)
                .then(data => {
                    let city = data.name
                    dispatch(getAllWeatherTC(city))
                })
        }
    }, [latitude, longitude])

    const getAllWeather = () => {
        dispatch(getAllWeatherTC(cityName))
    }

    const isNotEmptyObj = (obj) => {
        for (let key in obj) {
            return true
        }
        return false
    }

    return (
        <WeatherApp getAllWeather={getAllWeather} isNotEmptyObj={isNotEmptyObj} weather={weather}
                    fiveDaysWeather={fiveDaysWeather} isFetching={isFetching}/>
    )

}


export default WeatherAppContainer
