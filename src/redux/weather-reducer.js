const CHANGE_FILTER = 'my-app/ToDo-reducer/CHANGE_FILTER';

let initialState = {
    city: undefined,
    country: undefined,
    sunrise: 1617418501,
    sunset: 1617466215,
    main: undefined,
    temp: undefined,
    temp_max: null,
    temp_min: null,
    feels_like: null,
    description: ""
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const changeFilterAC = (activeFilter) => ({type: CHANGE_FILTER, activeFilter});

export default weatherReducer;

