import { SHOW_TRAILER, HIDE_TRAILER } from '../types/TrailerType'


export const showTrailerAction = (movie) => {
    return ditpatch => {
        let action = {
            type: SHOW_TRAILER,
            value: movie
        }
        ditpatch(action)
    }
}


export const hideTrailerAction = () => {
    return ditpatch => {
        let action = {
            type: HIDE_TRAILER,
        }
        ditpatch(action)
    }
}