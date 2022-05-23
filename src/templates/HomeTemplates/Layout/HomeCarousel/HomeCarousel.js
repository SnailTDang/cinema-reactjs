import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import { BannerAction } from '../../../../redux/actions/BannerAction';
// import BannerItem from '../../../../components/BannerItem/BannerItem';

import { Autoplay, FreeMode, Navigation, Thumbs, EffectFade } from "swiper";


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import '../HomeCarousel/swiper.css'



export default function HomeCarousel() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { bannerList } = useSelector(state => state.BannerReducer);
    const dispatch = useDispatch()
    useEffect(() => {
        const action = BannerAction('GP04')
        dispatch(action)
    }, [])
    const renderBanner = () => {
        return bannerList.map(item => {
            return (
                <SwiperSlide key={item.maPhim} >
                    <img src={item.hinhAnh} alt="" className='w-full max-h-450 object-cover' />
                </SwiperSlide>
            )

        })
    }
    return (
        <div className="container mx-auto">
            <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectFade]}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={"fade"}
                navigation={true}
                pagination={{ dynamicBullets: true, }}
                className="mySwiper2"
            >
                {renderBanner()}
            </Swiper >
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mySwiper"
            >
                {renderBanner()}
            </Swiper>
        </div>
    )
}
