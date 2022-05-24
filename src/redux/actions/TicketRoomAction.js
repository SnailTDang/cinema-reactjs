import { GET_TICKET_ROOM, BOOK_TICKETS_MOVIE } from '../types/TicketType'
// import { ticketsServices } from '../../services/TicketsServices'
import { ticketsServices } from '../../services/TicketsServices'
import { hideLoadingAction, showLoadingAction } from './LoadingAction'



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
    return async dispatch => {
        // dispatch(showLoadingAction)
        //     let promise = ticketsServices.postTicketMovie(ticketInfo)
        //     promise.then(result => {
        //         let action = {
        //             type: BOOK_TICKETS_MOVIE,
        //             value: result.data.content
        //         }
        //         dispatch(TicketRoomAction(ticketInfo.maLichChieu))
        //         // dispatch(hideLoadingAction)
        //     })
        //     promise.catch(error => {
        //         console.log(error)
        //         dispatch(hideLoadingAction)
        //     })
        try {
            dispatch(showLoadingAction)
            const result = await ticketsServices.postTicketMovie(ticketInfo)
            console.log(result.data.content)
            await dispatch(TicketRoomAction(ticketInfo.maLichChieu))
            dispatch(hideLoadingAction)
        }
        catch (error) {

        }
    }
}