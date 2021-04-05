const SET_WEATHER = 'SET_WEATHER';

let initialState = {
    weather: {},
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    main: undefined,
    temp: undefined,
    temp_max: null,
    temp_min: null,
    feels_like: null,
    description: ""
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

