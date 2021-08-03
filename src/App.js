import React from 'react'
import './App.css'
import WeatherAppContainer from './Components/WeatherAppContainer'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
	return (
		<Provider store={store}>
			<div className='app'>
				<WeatherAppContainer />
			</div>
		</Provider>
	)
}

export default App
