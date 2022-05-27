import { BOOK_TICKETS_MOVIE } from "../types/TicketType"



const initialState = {
    isLoading: false
}

export const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_LOADING":
            state.isLoading = true
            // console.log(state.isLoading)
            return { ...state }
        case "HIDE_LOADING":
            state.isLoading = false
            // console.log(state.isLoading)
            return { ...state }
        default:
            return state
    }
}
