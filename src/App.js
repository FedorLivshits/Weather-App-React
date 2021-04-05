import React from "react";
import './App.css';
import WeatherAppContainer from "./Components/WeatherAppContainer";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <WeatherAppContainer/>
        </Provider>

    );
}


export default App;
