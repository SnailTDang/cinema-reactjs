import React, { useEffect } from 'react'
import { Row, Col, Tabs } from 'antd';
import "./detail.css"
import { useDispatch, useSelector } from 'react-redux';
import { ShowtimesAction } from '../../redux/actions/ShowtimesAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;


export default function DeitailMovies(props) {
    const { showTimeMovie } = useSelector(state => state.ShowtimesReducer)
    let { danhGia, heThongRapChieu, hinhAnh, moTa, ngayKhoiChieu, tenPhim, trailer } = showTimeMovie

    const ditpatch = useDispatch()

    useEffect(() => {
        let id = props.match.params.id;
        ditpatch(ShowtimesAction(id))
    }, [])

    return (
        <div style={{ backgroundImage: `url(${hinhAnh})`, backgroundSize: 'cover', backgroundPosition: 'top center', backgroundAttachment: "fixed" }}>
            <div className="backdrop">
                <div className="container py-10">
                    <Row className='backdrop-info'>
                        <Col xs={24} sm={12} md={12} lg={20}>
                            <div className="flex items-end">
                                <div className="image-movie" style={{ flex: '0 0 30%' }}>
                                    <img src={hinhAnh} alt="" className='h-400' />
                                </div>
                                <div className="info-movie text-white ml-5">
                                    <p className='text-lg'>
                                        <span className='text-orange-main font-bold'>Ngày công chiếu: </span>
                                        {moment(ngayKhoiChieu).format("DD/MM/YYYY")}
                                    </p>
                                    <h1 className='text-white font-bold text-3xl uppercase'>{tenPhim}</h1>
                                    <p className='text-base mb-2'>
                                        <span className='text-orange-main font-bold'>Đạo diễn: </span>
                                        Lorem ipsum dolor
                                    </p>
                                    <p className='text-base mb-2'>
                                        <span className='text-orange-main font-bold'>Diễn viên: </span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, libero.
                                    </p>
                                    <p className='text-base mb-2'>
                                        <span className='text-orange-main font-bold'>Thể loại: </span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, libero.
                                    </p>
                                    <p className='text-base mb-2'>
                                        <span className='text-orange-main font-bold'>Chi tiết: </span>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero non ad eum velit distinctio iusto dolorem eaque obcaecati eveniet aliquam dolore ab optio veritatis incidunt, architecto.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={4} >
                            <div className="flex items-end h-full justify-center">
                                <div className="rating">
                                    <h3 className='text-center text-2xl font-bold text-orange-main'>Đánh giá</h3>
                                    <div className={`c100 p${Math.floor(danhGia * 10, 1)} orange`}>
                                        <span>{danhGia}/10</span>
                                        <div className="slice">
                                            <div className="bar"></div>
                                            <div className="fill"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='py-10 bg-white my-10'>
                        <Tabs tabPosition={"left"}>
                            {heThongRapChieu?.map((cinemas, index) => {
                                return (
                                    <TabPane tab={
                                        <img src={cinemas.logo} className='w-20' />
                                    } key={index}>
                                        {cinemas.cumRapChieu.map((cinema, index) => {
                                            return (
                                                <div key={index} className='px-4 border-b-2'>
                                                    <div className='flex flex-row' >
                                                        <img src={cinema.hinhAnh} alt="" className='w-20' />
                                                        <div className='ml-5 flex flex-col justify-end'>
                                                            <h1 className='text-xl font-bold mb-2'>{cinema.tenCumRap}</h1>
                                                            <p className='mb-0'>{cinema.diaChi}</p>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-9 gap-3 py-4">
                                                        {cinema.lichChieuPhim?.map((shTimes, index) => {
                                                            return (
                                                                <NavLink exact to={`/cinema-reactjs/checkout/${shTimes.maLichChieu}`} key={index} className='text-lg font-bold p-2 border-2'>
                                                                    {moment(shTimes.ngayChieuGioChieu).format('hh:mm A')}
                                                                </NavLink>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </TabPane>
                                )
                            })}
                        </Tabs>
                    </Row>
                </div>
            </div>
        </div >
    )
}
