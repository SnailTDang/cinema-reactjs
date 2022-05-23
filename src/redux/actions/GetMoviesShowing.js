import { POST_MOVIES_LIST, GET_MOVIES_SHOWING } from "../types/ListMoviesType"
import { bannerManager } from "../../services/BannerManager";



export const ListMoviesAction = (maNhom = 'GP01') => {
    return dispatch => {
        let promise = bannerManager.getListBanner(maNhom)
        promise.then(result => {
            let action = {
                type: GET_MOVIES_SHOWING,
                value: result.data.content
            }
            dispatch(action)
        })
        promise.catch(error => {
            console.log(error)
        })
    }
}