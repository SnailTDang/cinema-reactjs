import React from 'react'
import { Row, Col } from 'antd';
import './news.css'
import { NavLink } from 'react-router-dom';

export default function News() {
    return (
        <div id="news">
            <div className="container pb-5">
                <h1 className="text-center text-white text-3xl font-bold p-8">PROMOTIONS &amp; OFFERS</h1>
                <Row >
                    <Col span={12} className='news-item'>
                        <div id="box" className='backdrop-ticket p-12 h-full border-2'>
                            <h2 className='font-bold text-orange-main text-2xl mb-5'>HOT PROMOTIONS</h2>
                            <p className='text-white text-lg'>Discover hundreds of benefits for you in Vision Cinema's Hot Deals and Promotions section.</p>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="news-item">
                            <img className="item-img" src="https://metiz.vn/media/new_offer/NOEL_METIZ_2019_GIANG_SINH_AM_AP_WEB-01.jpg" alt="MĂM COMBO, NHẬN NGAY QUÀ TẶNG ẤM ÁP TẠI METIZ CINEMA" />
                            <NavLink exact to="/home" className="bg_hover word-wrap" href="/new/detail/35/">
                                <h1 className='font-bold text-white'>MĂM COMBO, NHẬN NGAY QUÀ TẶNG ẤM ÁP TẠI VISION CINEMA</h1>
                                <h4 className="detail-btn">DETAILS</h4>
                            </NavLink>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="news-item">
                            <img className="item-img" src="https://metiz.vn/media/new_offer/HALLOWEEN_2019_WEB-01.jpg" alt="XEM PHIM METIZ NHẬN KẸO CÒN KHÔNG BỊ GHẸO DỊP LỄ HALLOWEEN" />
                            <NavLink exact to="/home" className="bg_hover word-wrap" href="/new/detail/34/">
                                <h1 className='font-bold text-white'>XEM PHIM VISION NHẬN KẸO CÒN KHÔNG BỊ GHẸO DP LỄ HALLOWEEN...</h1>
                                <h4 className="detail-btn">DETAILS</h4>
                            </NavLink>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <div className="news-item">
                            <img className="item-img" src="https://metiz.vn/media/new_offer/20.10.2019_WEB-01.jpg" alt="XEM PHIM METIZ, NHẬN QUÀ NGỌT NGÀO DỊP LỄ 20/10" />
                            <NavLink exact to="/home" className="bg_hover word-wrap" href="/new/detail/33/">
                                <h1 className='font-bold text-white'>XEM PHIM VISION, NHẬN QUÀ NGỌT NGÀO DỊP LỄ 20/1</h1>
                                <h4 className="detail-btn">DETAILS</h4>
                            </NavLink>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="news-item">
                            <img className="item-img" src="https://metiz.vn/media/new_offer/METIZ_TRUNG_THU_2019_WEB-01.jpg" alt="XEM PHIM METIZ, RƯỚC LỒNG ĐÈN XINH" />
                            <NavLink exact to="/home" className="bg_hover word-wrap" href="/new/detail/32/">
                                <h1 className='font-bold text-white'>XEM PHIM VISION, RƯỚC LỒNG ĐÈN XINH</h1>
                                <h4 className="detail-btn">DETAILS</h4>
                            </NavLink>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="news-item">
                            <img className="item-img" src="https://metiz.vn/media/new_offer/KM_SUPER__MONDAY_MEDIA-02.jpg" alt="SUPER MONDAY (THỨ HAI SIÊU HẠNG)" />
                            <NavLink exact to="/home" className="bg_hover word-wrap" href="/new/detail/17/">
                                <h1 className='font-bold text-white'>SUPER MONDAY (THỨ HAI SIÊU HẠNG)</h1>
                                <h4 className="detail-btn">DETAILS</h4>
                            </NavLink>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div id="show_more" className="new-img col-lg-3 col-sm-3 col-xs-6">
                            {/* <img id="more" src="https://metiz.vn/media/new_offer/assets/websites/images/news/more.png" />
                            <a href="/news/">
                                <img id="more_hover" src="https://metiz.vn/media/new_offer/assets/websites/images/news/more_hover.png" />
                            </a> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
