import { POST_MOVIES_LIST, GET_MOVIES_SHOWING, GET_MOVIES_COMING } from "../types/ListMoviesType"
const initialState = {
    moviesList: {
        arrayMovie: [],
        arrayMovieDefault: [],
        coming: null,
        showing: null,
    }
}

export const ListMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_MOVIES_LIST:
            state.moviesList.arrayMovie = action.value;
            state.moviesList.arrayMovieDefault = state.moviesList.arrayMovie.filter(item => {
                return item.dangChieu === true
            })
            state.moviesList.showing = true
            state.moviesList.coming = false
            // console.log(state)
            return { ...state }
        case GET_MOVIES_SHOWING:
            state.moviesList.arrayMovieDefault = state.moviesList.arrayMovie.filter(item => {
                return item.dangChieu === true
            })
            state.moviesList.coming = false
            state.moviesList.showing = true
            // console.log(state)
            return { ...state }
        case GET_MOVIES_COMING:
            state.moviesList.arrayMovieDefault = state.moviesList.arrayMovie.filter(item => {
                return item.sapChieu === true
            })
            state.moviesList.showing = false
            state.moviesList.coming = true
            // console.log(state)
            return { ...state }
        default:
            return state
    }
}