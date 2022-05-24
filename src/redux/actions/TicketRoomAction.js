import { GET_TICKET_ROOM, LEAVE_TAB } from '../types/TicketType'
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
        try {
            dispatch(showLoadingAction)
            const result = await ticketsServices.postTicketMovie(ticketInfo)
            console.log(result.data.content)
            await dispatch(TicketRoomAction(ticketInfo.maLichChieu))
            await dispatch(hideLoadingAction)
            dispatch({ type: LEAVE_TAB, value: "2" })
        }
        catch (error) {
            dispatch(hideLoadingAction)
        }
    }
}