import { POST_MOVIE_BANNER } from "../types/BannerType"
import { moviesManager } from "../../services/MoviesManager";



export const BannerAction = (maNhom = 'GP01') => {
    return dispatch => {
        let promise = moviesManager.getListBanner(maNhom)
        promise.then(result => {
            let action = {
                type: POST_MOVIE_BANNER,
                value: result.data.content
            }
            dispatch(action)
            // setMovieList(result.data.content)
        })
        promise.catch(error => {
            console.log(error)
        })
    }
}