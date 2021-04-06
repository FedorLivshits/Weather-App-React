import React from "react";
import {connect} from "react-redux";
import {setWeather, updateInputText} from "../redux/weather-reducer";
import {setFiveDaysWeather} from "../redux/fiveDaysWeather-reducer";
import WeatherApp from "./WeatherApp";
import * as axios from "axios";
import preloader from "../assets/images/preloader.svg"


class WeatherAppContainer extends React.Component {
    componentDidMount() {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=Saint%20Petersburg&units=metric&appid=9e66b26ecdfc14c9acc56a4db3a671f2")
            .then(response => {
                this.props.setWeather(response.data)
            })
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Saint%20Petersburg&units=metric&appid=9e66b26ecdfc14c9acc56a4db3a671f2")
            .then(response => {
                let result = response.data.list.filter(w => w.dt_txt.includes("12:00:00"))
                let fiveDaysWeather = result.map(d => {
                    return {
                        date: d.dt_txt,
                        temp: d.main.temp,
                        mainDescription: d.weather[0].main,
                        description: d.weather[0].description
                    }
                })
                this.props.setFiveDaysWeather(fiveDaysWeather)
            })
    }

    render() {
        return (
            <WeatherApp {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        weather: state.weatherPage.weather,
        fiveDaysWeather: state.fiveDaysWeather.fiveDaysWeather
    }
}


export default connect(mapStateToProps, {setWeather, setFiveDaysWeather, updateInputText})(WeatherAppContainer)
