import {combineReducers, createStore} from "redux";
import weatherReducer from "./weather-reducer";

let reducers = combineReducers({
    weatherPage: weatherReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;