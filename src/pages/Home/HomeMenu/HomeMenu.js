import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import { GET_MOVIES_COMING, GET_MOVIES_SHOWING } from '../../../redux/types/ListMoviesType';

import MovieSwiper from '../../../components/MoviesSwiper/MovieSwiper';


const HomeMenu = (props) => {
    const dispatch = useDispatch()
    let activeButtonShowing = props.moviesList.showing === true ? 'active-button-film' : '';
    let activeButtonComing = props.moviesList.coming === true ? 'active-button-film' : '';
    return (
        <div className="bg-[url('https://metiz.vn/static/assets/websites/images/bg-session-movie.png')] py-10">
            <div className="container mx-auto">
                <div className="flex justify-center py-5">
                    <button type="button" className={`${activeButtonShowing} text-lg text-white border-white border-2 px-8 py-3 font-semibold rounded-full hover:bg-orange-main mr-4`} onClick={() => {
                        const action = {
                            type: GET_MOVIES_SHOWING,
                        }
                        dispatch(action)
                    }}>SHOWING MOVIES</button>
                    <button type="button" className={`${activeButtonComing} text-lg text-white border-white border-2 px-8 py-3 font-semibold rounded-full hover:bg-orange-main`} onClick={() => {
                        const action = {
                            type: GET_MOVIES_COMING,
                        }
                        dispatch(action)
                    }}>COMING MOVIES</button>
                </div>
                <MovieSwiper moviesList={props.moviesList.arrayMovieDefault} />
            </div>
        </div >
    )
}

export default HomeMenu
