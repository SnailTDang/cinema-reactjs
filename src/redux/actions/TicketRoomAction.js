import { GET_TICKET_ROOM, BOOK_TICKETS_MOVIE } from '../types/TicketType'
// import { ticketsServices } from '../../services/TicketsServices'
import { ticketsServices } from '../../services/TicketsServices'



export const TicketRoomAction = (roomID) => {
    return dispatch => {
        let promise = ticketsServices.getTicketCinema(roomID)
        promise.then(result => {
            let action = {
                type: GET_TICKET_ROOM,
                value: result.data.content
            }
            dispatch(action)
        })
        promise.catch(error => {
            console.log(error)
        })
    }
}

export const BookTicketsAction = (ticketInfo) => {
    return dispatch => {
        let promise = ticketsServices.postTicketMovie(ticketInfo)
        promise.then(result => {
            let action = {
                type: BOOK_TICKETS_MOVIE,
                value: result.data.content
            }
        })
        promise.catch(error => {
            console.log(error)
        })
    }
}