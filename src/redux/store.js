import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import weatherReducer from "./weather-reducer";
import fiveDaysWeatherReducer from "./fiveDaysWeather-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    weatherPage: weatherReducer,
    fiveDaysWeather: fiveDaysWeatherReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;