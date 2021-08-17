import React from 'react'
import './App.css'
import WeatherAppContainer from './Components/WeatherAppContainer'
import {Provider} from 'react-redux'
import store from './redux/store'

const App = () => (
    <Provider store={store}>
        <div className='app'>
            <WeatherAppContainer/>
        </div>
    </Provider>
)

export default App
