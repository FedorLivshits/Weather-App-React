import React from 'react'
import icon from '../../assets/images/search-icon.svg'
import preloader from '../../assets/images/preloader.svg'
import classes from './WeatherForm.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {getIsFetching} from '../../redux/selectors/selectors'
import {updateInputText} from '../../redux/reducers/weather-reducer'


const WeatherForm = ({getAllWeather}) => {
    const isFetching = useSelector(getIsFetching)

    const dispatch = useDispatch()

    const inputCity = (event) => {
        let city = event.target.value
        dispatch(updateInputText(city))
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

export default WeatherForm