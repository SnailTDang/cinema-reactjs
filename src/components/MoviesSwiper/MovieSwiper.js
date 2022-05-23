import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import MoviesItem from '../MovieItems/MoviesItem';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";



const renderListMovies = (list) => {
    return list.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <MoviesItem movie={item} />
            </SwiperSlide>
        )
    })
}

export default function MovieSwiper(props) {
    // console.log(first)
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="movies-swiper"
        >
            {renderListMovies(props.moviesList)}
        </Swiper>
    )
}
