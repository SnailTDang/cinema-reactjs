import { SHOW_TRAILER, HIDE_TRAILER } from "../types/TrailerType"

const initialState = {
    trailerMovie: {},
    isOpen: false
}

export const TrailerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_TRAILER:
            state.trailerMovie = action.value
            state.isOpen = true
            console.log(state.trailerMovie)
            return { ...state }
        case HIDE_TRAILER:
            state.trailerMovie = {}
            state.isOpen = false
            console.log(state.trailerMovie)
            return { ...state }
        default:
            return state
    }
}
