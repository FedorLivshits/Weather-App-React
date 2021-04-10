import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import weatherReducer from "./reducers/weather-reducer";
import fiveDaysWeatherReducer from "./reducers/fiveDaysWeather-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    weatherPage: weatherReducer,
    fiveDaysWeather: fiveDaysWeatherReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;