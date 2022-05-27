import React, { memo } from 'react'
import { Tabs, Space, Row, Col } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import moment from 'moment';
import './home.css'


const { TabPane } = Tabs;

const renderCinemeList = (list) => {
    return list?.map((cinemas, index) => {
        return <TabPane tab={<img className='w-20 m-auto' src={cinemas.logo} />} key={index}>
            <Tabs tabPosition={'left'}>
                {cinemas.lstCumRap.slice(0, 6).map((cine, index) => {
                    return <TabPane
                        className='w-full'
                        tab={
                            <div className='flex items-center justify-center'>
                                <img className='w-20' src={cine.hinhAnh} />
                                <div className="text-left ml-4 lg:w-80 w-full text-white ">
                                    <p className='text-lg mb-0 break-words whitespace-pre-wrap hover:text-orange-300'>{cine.tenCumRap}</p>
                                    <p className='break-words whitespace-pre-wrap'>{cine.diaChi}</p>
                                    <a href={`https://www.google.com/maps/search/${cine.diaChi}?transaction_id=`} target='_blank' className='py-1 px-2 bg-orange-main text-white hover:text-white inline-block mt-2'>
                                        <span className='pr-1'>Xem bản đồ</span>
                                        <i className="fa fa-map-marker-alt"></i>
                                    </a>
                                </div>
                            </div>}
                        key={index}>
                        <div className="h-80vh overflow-auto">
                            {cine.danhSachPhim.map((movies, index) => {
                                return (
                                    <div className="flex border-b-2 p-4" key={index}>
                                        <div className="grow flex">
                                            <div className=''>
                                                <img src={movies.hinhAnh} alt="" className='w-20' />
                                            </div>
                                            <div className="ml-4 grow">
                                                <NavLink exact to={`/movie/${movies.maPhim}`}>
                                                    <h1 className='text-xl font-bold text-orange-400 mb-3 hover:text-white'>{movies.tenPhim.toUpperCase()}</h1>
                                                </NavLink>
                                                <div className="grid xs:grid-cols-2 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
                                                    {movies.lstLichChieuTheoPhim?.slice(0, 10).map((shTimes, index) => {
                                                        return (
                                                            <Link to={`/checkout/${shTimes.maLichChieu}`} key={index} className='text-lg font-bold p-2 bg-btn-home text-white'>
                                                                {moment(shTimes.ngayChieuGioChieu).format('hh:mm A')}
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </TabPane>
                })
                }

            </Tabs >
        </TabPane >
    })
}

const CinemasList = (props) => {
    // console.log(props.cinemaCyber)
    return (
        <div className="" >
            <div className='container pt-10 pb-20' id='showtimes-cinema'>
                <h1 className="text-orange-500 font-bold text-3xl text-center">CINEMAS NETWORK</h1>
                <Space style={{ marginBottom: 24 }}>
                </Space>
                <Tabs tabPosition={'top'}>
                    {renderCinemeList(props.cinemaCyber)}
                </Tabs>
            </div>
        </div>
    )
}

export default memo(CinemasList)
