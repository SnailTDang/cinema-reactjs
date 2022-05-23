import { POST_MOVIES_LIST } from '../types/ListMoviesType'
import { moviesManager } from "../../services/MoviesManager";



export const ListMoviesAction = (maNhom = 'GP01') => {
    return dispatch => {
        let promise = moviesManager.getListMovies(maNhom)
        promise.then(result => {
            let action = {
                type: POST_MOVIES_LIST,
                value: result.data.content
            }
            dispatch(action)
        })
        promise.catch(error => {
            console.log(error)
        })
    }
}