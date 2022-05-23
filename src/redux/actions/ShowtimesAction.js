import { GET_SHOWTIMES_MOVIE } from '../types/ShowtimesType'
import { cinemaServices } from '../../services/CinemaServices'



export const ShowtimesAction = (fimID) => {
    return dispatch => {
        let promise = cinemaServices.getShowtimeMovie(fimID)
        promise.then(result => {
            let action = {
                type: GET_SHOWTIMES_MOVIE,
                value: result.data.content
            }
            dispatch(action)
        })
        promise.catch(error => {
            console.log(error)
        })
    }
}