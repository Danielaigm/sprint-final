import { loginTypes } from "../types/types";

const initialState = {
    user: {
        location: "",
        birthday: "",
        email: "",
        id: "",
        name: "",
        number: "",
        photo: "",
        typeUser: "",
        uid: "",
        orders: [],
        recentSearchs: []
    },
    error: {
        state: undefined,
        message: ""
    },
    loading: false,
    isLogged: false,
   
}


export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginTypes.CREATE_ACCOUNT:
            return {
                ...state,
                user: action.payload.user,
                error: action.payload.error,
                isLogged: true
            }
        case loginTypes.LOGIN:
            return {
                ...state,
                user: action.payload.user,
                error: action.payload.error,
                isLogged: true,
            }
        case loginTypes.TOGGLE_ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    status: action.payload,
                }
            }
        case loginTypes.LOGOUT:
            return {
                ...initialState
            }
        case loginTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case loginTypes.UPDATE_LOCATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    location: action.payload
                }
            }
        case loginTypes.RECENT_SEARCH:
            return {
                ...state,
                user: {
                    ...state.user,
                    recentSearchs: action.payload
                }
            }
       case loginTypes.UPDATE_ORDERS:
        return {
            ...state,
            user: {
                ...state.user,
                orders: action.payload
            }
        }
        default:
            return state;
    }
}