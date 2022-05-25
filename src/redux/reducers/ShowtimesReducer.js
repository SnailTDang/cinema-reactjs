    import { GET_SHOWTIMES_MOVIE } from "../types/ShowtimesType"

    const initialState = {
        showTimeMovie: {}
    }

    export const ShowtimesReducer = (state = initialState, action) => {
        switch (action.type) {
            case GET_SHOWTIMES_MOVIE:
                state.showTimeMovie = action.value
                console.log(state.showTimeMovie)
                return { ...state }
            default:
                return state
        }
    }
