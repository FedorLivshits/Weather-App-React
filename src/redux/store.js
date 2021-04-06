import {combineReducers, createStore} from "redux";
import weatherReducer from "./weather-reducer";
import fiveDaysWeatherReducer from "./fiveDaysWeather-reducer";

let reducers = combineReducers({
    weatherPage: weatherReducer,
    fiveDaysWeather: fiveDaysWeatherReducer
});

let store = createStore(reducers);

window.store = store;

export default store;