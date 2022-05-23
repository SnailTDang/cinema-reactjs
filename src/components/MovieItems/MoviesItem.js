import moment from 'moment'
import React from 'react'
import { NavLink } from 'react-router-dom'


const styleName = {
    "display": "-webkit-box",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": "1",
}

export default function MoviesItem(props) {
    return (
        <div className="shadow-md overflow-hidden w-full rounded-md">
            <a href="#">
                <img className="h-385" src={props.movie.hinhAnh} alt="" />
            </a>
            <div className="p-5 backdrop">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white overflow-hidden" style={styleName} title={props.movie.tenPhim}>{props.movie.tenPhim.toUpperCase()}</h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-white">PREMIERES ON: {moment(props.movie.ngayKhoiChieu).format("MMM DD, YYYY")}</p>
                <div className="">
                    <NavLink to={`/cinema-reactjs/movie/${props.movie.maPhim}`} className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded-lg mr-4 border-orange-600 border-2 hover:bg-orange-500 hover:text-white">
                        TICKET
                    </NavLink>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded-lg border-orange-600 border-2 hover:bg-orange-500 hover:text-white">
                        TRAILER
                    </a>
                </div>
            </div>
        </div >
    )
}
