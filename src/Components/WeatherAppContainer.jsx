import React from "react";
import {connect} from "react-redux";
import {setWeather, updateInputText} from "../redux/weather-reducer";
import {setFiveDaysWeather} from "../redux/fiveDaysWeather-reducer";
import WeatherApp from "./WeatherApp";
import {getFiveDaysWeather, getWeather} from "../api/api";


class WeatherAppContainer extends React.Component {

    getAllWeather = () => {
        getWeather(this.props.updateTextInput).then(data => {
            this.props.setWeather(data)
        })
        getFiveDaysWeather(this.props.updateTextInput).then(data => {
            let result = data.list.filter(w => w.dt_txt.includes("12:00:00"))
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
    isNotEmpty = (obj) => {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <WeatherApp {...this.props} getAllWeather={this.getAllWeather} isNotEmpty={this.isNotEmpty}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        weather: state.weatherPage.weather,
        updateTextInput: state.weatherPage.updateTextInput,
        fiveDaysWeather: state.fiveDaysWeather.fiveDaysWeather
    }
}


export default connect(mapStateToProps, {setWeather, setFiveDaysWeather, updateInputText})(WeatherAppContainer)
