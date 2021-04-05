const SET_WEATHER = 'SET_WEATHER';

let initialState = {
    weather: {
        name: undefined,
        sys: {
            country: undefined,
            sunrise: undefined,
            sunset: undefined,
        },
        main:{
            temp: undefined,
            temp_max: null,
            temp_min: null,
            feels_like: null,
        },
        wind: {
            speed: null,
        },
        weather: [{ description: ""}]
        },
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

