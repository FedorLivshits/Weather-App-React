const SET_WEATHER = 'SET_WEATHER';
const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


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
        weather: [{ description: "", main: ""}]
        },
    updateTextInput: "",
    isFetching: false
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            return {...state, weather: action.weather}
        }
        case UPDATE_INPUT_TEXT: {
            return {...state, updateTextInput: action.text}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const setWeather = (weather) => ({type: SET_WEATHER, weather});
export const updateInputText = (text) => ({type: UPDATE_INPUT_TEXT, text});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default weatherReducer;

