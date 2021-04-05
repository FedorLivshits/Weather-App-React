import React from "react";
import {connect} from "react-redux";
import {setWeather} from "../redux/weather-reducer";
import WeatherApp from "./WeatherApp";
import * as axios from "axios";

 class WeatherAppContainer extends React.Component {
     componentDidMount() {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=9e66b26ecdfc14c9acc56a4db3a671f2")
            .then(response => {

                this.props.setWeather(response.data)
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
        weather: state.weatherPage.weather
    }
}



export default connect(mapStateToProps, {setWeather})(WeatherAppContainer)
