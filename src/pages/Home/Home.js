import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PopupTrailer from '../../components/PopupTrailer/PopupTrailer';
import { ListCinemaAction } from '../../redux/actions/CinemaSystemAction';
import { ListMoviesAction } from '../../redux/actions/ListMoviesAction';
import CinemasList from './CinemaList/CinemaList'
import HomeMenu from './HomeMenu/HomeMenu'



const Home = (props) => {
    const { moviesList } = useSelector(state => state.ListMoviesReducer);
    const { cinemaCyber } = useSelector(state => state.CinemaReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ListMoviesAction('GP03'))
        dispatch(ListCinemaAction('GP03'))
    }, [])

    console.log(moviesList)
    return (
        <>
            <PopupTrailer />
            <HomeMenu moviesList={moviesList} />
            <div className='' style={{
                background: `url('https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg')`,
                color: "#fff",
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat"
            }}>
                <div className="backdrop">
                    <CinemasList cinemaCyber={cinemaCyber} />
                </div>
            </div>
        </>
    )
}

export default memo(Home)
