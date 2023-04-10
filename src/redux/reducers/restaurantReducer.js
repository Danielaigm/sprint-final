import { restaurantsTypes } from "../types/types";

const initialValues = {
    restaurants: [],
    menu: [],
    error: {
        status: null,
        message: ''
    },
    loading: false,
    error: null,
}

export const restaurantReducer = (state = initialValues, action) =>{
    switch (action.type) {
        case restaurantsTypes.GET_RESTAURANT:
            return {
                ...state,
                restaurants: [...action.payload]
            }
        case restaurantsTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case restaurantsTypes.GET_MENU:
            return {
                ...state,
                menu: [...action.payload]
            }
        default:
           return state;
    }
}