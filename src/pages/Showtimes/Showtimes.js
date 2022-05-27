import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ListCinemaAction } from '../../redux/actions/CinemaSystemAction';
import { ListMoviesAction } from '../../redux/actions/ListMoviesAction';
import CinemaList from '../Home/CinemaList/CinemaList';

export default function Showtimes() {
    const { cinemaCyber } = useSelector(state => state.CinemaReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ListMoviesAction('GP03'))
        dispatch(ListCinemaAction('GP03'))
    }, [])

    return (
        <>
            {/* <div className="m-[-40px]"></div> */}
            <CinemaList cinemaCyber={cinemaCyber} />
        </>
    )
}
