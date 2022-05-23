import { GET_LIST_CINEMA } from "../types/CinemaType"



const initialState = {
    cinemaCyber: []
}

export const CinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_CINEMA:
            state.cinemaCyber = action.value
            return { ...state }
        default:
            return state
    }
}
