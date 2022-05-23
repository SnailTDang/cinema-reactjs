import React, { memo } from 'react'
import { Tabs, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs;

const renderCinemeList = (list) => {
    return list?.map((cinemas, index) => {
        return <TabPane tab={<img className='w-20' src={cinemas.logo} />} key={index}>
            <Tabs tabPosition={'left'}>
                {cinemas.lstCumRap.slice(0, 6).map((cine, index) => {
                    return <TabPane
                        className='w-fit border-b-2'
                        tab={
                            <div className='flex items-center justify-center'>
                                <img className='w-20' src={cine.hinhAnh} />
                                <div className="text-left ml-4 w-80 text-white ">
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
                                        <div className="flex">
                                            <div>
                                                <img src={movies.hinhAnh} alt="" className='w-20' />
                                            </div>
                                            <div className="ml-8">
                                                <h1 className='text-xl font-bold text-orange-400'>{movies.tenPhim.toUpperCase()}</h1>
                                                <div className="grid grid-cols-5 gap-3">
                                                    {movies.lstLichChieuTheoPhim?.slice(0, 10).map((shTimes, index) => {
                                                        return (
                                                            <NavLink to={`/cinema-reactjs/checkout/${shTimes.maLichChieu}`} key={index} className='text-lg font-bold p-2 bg-btn-home text-white'>
                                                                {moment(shTimes.ngayChieuGioChieu).format('hh:mm A')}
                                                            </NavLink>
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
    console.log(props.cinemaCyber)
    return (
        <div className='' style={{
            background: `url('https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg')`,
            color: "#fff",
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="backdrop" >
                <div className='container pt-28 pb-20' id='showtimes-cinema'>
                    <h1 className="text-orange-main font-bold text-3xl text-center">CINEMAS NETWORK</h1>
                    <Space style={{ marginBottom: 24 }}>
                    </Space>
                    <Tabs tabPosition={'top'}>
                        {renderCinemeList(props.cinemaCyber)}
                    </Tabs>
                </div>
            </div>
        </div >
    )
}

export default memo(CinemasList)
