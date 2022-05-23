import { GET_LIST_CINEMA } from "../types/CinemaType"
import { cinemaServices } from "../../services/CinemaServices";



export const ListCinemaAction = (maNhom = 'GP01') => {
    return dispatch => {
        let promise = cinemaServices.getListCinema(maNhom)
        promise.then(result => {
            let action = {
                type: GET_LIST_CINEMA,
                value: result.data.content
            }
            dispatch(action)
        })
        promise.catch(error => {
            console.log(error)
        })
    }
}