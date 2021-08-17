const SET_FIVE_DAYS_WEATHER = 'SET_FIVE_DAYS_WEATHER'

let initialState = {
    fiveDaysWeather: []
}

const fiveDaysWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIVE_DAYS_WEATHER: {
            return {...state, fiveDaysWeather: action.fiveDaysWeather}
        }
        default:
            return state
    }
}

export const setFiveDaysWeather = (fiveDaysWeather) => ({type: SET_FIVE_DAYS_WEATHER, fiveDaysWeather})

export default fiveDaysWeatherReducer

