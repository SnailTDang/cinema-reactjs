import moment from 'moment'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { showTrailerAction } from '../../redux/actions/TrailerAction'


const styleName = {
    "display": "-webkit-box",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": "1",
}

export default function MoviesItem(props) {
    const dispatch = useDispatch()

    return (
        <div className="shadow-md overflow-hidden w-full rounded-md">
            <NavLink to={`/movie/${props.movie.maPhim}`}>
                <img className="h-385" src={props.movie.hinhAnh} alt="" />
            </NavLink>
            <div className="p-5 backdrop">
                <NavLink to={`/movie/${props.movie.maPhim}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white overflow-hidden hover:text-orange-500" style={styleName} title={props.movie.tenPhim}>{props.movie.tenPhim.toUpperCase()}</h5>
                </NavLink>
                <p className="mb-3 font-normal text-white text-white">PREMIERES ON: {moment(props.movie.ngayKhoiChieu).format("MMM DD, YYYY")}</p>
                <div className="">
                    <NavLink to={`/movie/${props.movie.maPhim}`} className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded-lg mr-4 border-orange-600 border-2 hover:bg-orange-500 hover:text-white">
                        TICKET
                    </NavLink>
                    <button className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded-lg border-orange-600 border-2 hover:bg-orange-500 hover:text-white"
                        onClick={() => {
                            dispatch(showTrailerAction(props.movie))
                        }}
                    >
                        TRAILER
                    </button>
                </div>
            </div>
        </div >
    )
}
