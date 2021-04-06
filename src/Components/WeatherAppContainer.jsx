import React from "react";
import {connect} from "react-redux";
import {setWeather, updateInputText} from "../redux/weather-reducer";
import {setFiveDaysWeather} from "../redux/fiveDaysWeather-reducer";
import WeatherApp from "./WeatherApp";
import preloader from "../assets/images/preloader.svg"
import {getFiveDaysWeather, getWeather} from "../api/api";


class WeatherAppContainer extends React.Component {
    componentDidMount() {
        getWeather().then(response => {
                    this.props.setWeather(response.data)
                })
        getFiveDaysWeather().then(response => {
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
            <WeatherApp {...this.props} />
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
