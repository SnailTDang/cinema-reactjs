import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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


    return (
        <>
            <HomeMenu moviesList={moviesList} />
            <CinemasList cinemaCyber={cinemaCyber} />
        </>
    )
}

export default memo(Home)
