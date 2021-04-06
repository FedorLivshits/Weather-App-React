const SET_FIVE_DAYS_WEATHER = 'SET_FIVE_DAYS_WEATHER';

let initialState = {
    fiveDaysWeather: []
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            return {...state, weather: action.weather}
        }
        default:
            return state;
    }
}

export const setWeather = (weather) => ({type: SET_WEATHER, weather});

export default weatherReducer;

