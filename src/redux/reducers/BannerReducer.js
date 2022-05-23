import { POST_MOVIE_BANNER } from "../types/BannerType"
const initialState = {
    bannerList: []
}

export const BannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_MOVIE_BANNER:
            state.bannerList = [...action.value];
            // console.log(state)
            return { ...state }
        default:
            return state
    }
}
