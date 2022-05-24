import { BOOK_TICKETS_MOVIE, GET_TICKET_ROOM, POST_SELECT_SEAT } from "../types/TicketType"

const initialState = {
    roomTickets: {},
    selectingSeats: []
}


export const TicketsRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKET_ROOM:
            state.selectingSeats = []
            state.roomTickets = action.value
            console.log(state.selectingSeats)
            return { ...state }
        case POST_SELECT_SEAT:
            let selectSeatUppdate = [...state.selectingSeats]
            let index = selectSeatUppdate.findIndex(seat =>
                seat.maGhe === action.value.maGhe
            )
            if (index != -1) {
                selectSeatUppdate.splice(index, 1)
            } else {
                selectSeatUppdate.push(action.value)
            }
            return { ...state, selectingSeats: selectSeatUppdate }
        default:
            return state
    }
}
