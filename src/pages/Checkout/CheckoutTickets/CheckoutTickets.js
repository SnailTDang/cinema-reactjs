import React, { Fragment, useEffect, useState } from 'react'
import { Row, Col, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { TicketRoomAction, BookTicketsAction } from "../../../redux/actions/TicketRoomAction"
import { POST_SELECT_SEAT } from "../../../redux/types/TicketType"
import "./checkout.css"
import { TicketInfo } from '../../../core/models/BookTicketsInfo';
import { USER_LOGIN } from '../../../ulti/constants/Settings';
import { hideLoadingAction, showLoadingAction } from '../../../redux/actions/LoadingAction';




export default function ChecoutTickets(props) {
    const { userLogin } = useSelector(state => state.UserLoginReducer)
    const { roomTickets, selectingSeats } = useSelector(state => state.TicketsRoomReducer)
    const dispatch = useDispatch()
    const { thongTinPhim, danhSachGhe } = roomTickets


    useEffect(() => {
        const id = props.match.params.id
        const action = TicketRoomAction(id)
        dispatch(action)
    }, [])


    const renderSeats = () => {
        return danhSachGhe?.map((seat, index) => {
            let seatType = ''
            switch (seat.loaiGhe) {
                case "Thuong":
                    seatType = 'seat-normal'
                    break;
                case "Vip":
                    seatType = 'seat-vip'
                    break
                default:
                    break;
            }
            if (seat.daDat) {
                seatType = 'seat-booked'
            }
            let indexSelect = selectingSeats.findIndex(seactSl => seactSl.maGhe === seat.maGhe)
            if (indexSelect != -1) {
                seatType = 'seat-booking'
            }
            if (seat.taiKhoanNguoiDat === JSON.parse(localStorage.getItem(USER_LOGIN)).taiKhoan) {
                seat.stt = <i className="fa fa-user text-gray-300"></i>
                seatType = 'your-seat'
            }
            return (
                <Fragment key={index}>
                    <button
                        disabled={seat.daDat}
                        className={`seat ${seatType}`}
                        onClick={() => {
                            let action = {
                                type: POST_SELECT_SEAT,
                                value: seat
                            }
                            dispatch(action)
                        }}
                    >{seat.stt}</button>
                    {(index + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
            )
        })
    }

    const renderSelectList = () => {
        return _.sortBy(selectingSeats, ['maGhe'])?.map((seat, index) => {
            return <p key={index} className='text-orange-400 text-2xl font-bold p-2 mb-0 text-center'>{seat.tenGhe}</p>
        })
    }

    const renderTotal = () => {
        return selectingSeats?.reduce((total, seat) => {
            return total += seat.giaVe
        }, 0).toLocaleString()
    }

    const bookTickets = () => {
        const bookTickets = new TicketInfo();
        bookTickets.maLichChieu = props.match.params.id
        bookTickets.danhSachVe = selectingSeats;
        let action = BookTicketsAction(bookTickets)
        dispatch(action)
    }
    return (
        <div className="container">
            <div className="py-10">
                <Row>
                    <Col lg={16}>
                        <div className="px-10">
                            <div className="screen-thumb">
                                <h4 className="text-orange-main text-3xl text-center">Màn hình</h4>
                                <img
                                    src={"http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png"}
                                    alt="movie" className='w-full' />
                            </div>
                            <div className="mt-12 text-center">
                                {renderSeats()}
                            </div>
                            <div className="mt-10">
                                <h1 className="text-2xl text-white">
                                    Chú thích ghế
                                </h1>
                                <div className="list-seat flex justify-between">
                                    <div className="text-center">
                                        <button className="seat seat-normal"></button>
                                        <p className="text-yellow-400 text-lg">Standard Seat</p>
                                    </div>
                                    <div className="text-center">
                                        <button className="seat seat-vip"></button>
                                        <p className="text-green-500 text-lg">Vip Seat</p>
                                    </div>
                                    <div className="text-center">
                                        <button className="seat seat-booking"></button>
                                        <p className="text-blue-600 text-lg">Selecting Seat</p>
                                    </div>
                                    <div className="text-center">
                                        <button className="seat seat-booked"></button>
                                        <p className="text-white text-lg">Sold Seat</p>
                                    </div>
                                    <div className="text-center">
                                        <button className="seat your-seat">
                                            <i className="fa fa-user text-gray-300"></i>
                                        </button>
                                        <p className="text-white text-lg">Your Seat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="backdrop p-6 rounded-lg">
                            <h1 className="text-3xl text-orange-main font-bold text-center" >{renderTotal()} VNĐ</h1>
                            <hr />
                            <h3 className="text-2xl text-white font-bold py-3 text-yellow-300 mb-0">{thongTinPhim?.tenPhim.toUpperCase()}</h3>
                            <p className="text-lg text-white">Address:  {thongTinPhim?.tenCumRap} -
                                <span className='text-orange-400'> {thongTinPhim?.tenRap}</span>
                            </p>
                            <p className="text-lg text-white">Time Showing: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                            <hr />
                            <div className="seats">
                                <div className="seat-header flex justify-between py-4">
                                    <h3 className='text-orange-400 font-bold text-2xl'>SEATS</h3>
                                    <h4 className='text-orange-400 font-bold text-2xl'>{renderTotal()} VNĐ</h4>
                                </div>
                                <div className="grid grid-cols-5">
                                    {renderSelectList()}
                                </div>
                            </div>
                            <hr />
                            <div className="email text-white py-2 text-base" >
                                <p className='mb-2 text-gray-300'>Email:</p>
                                <span>{userLogin.email}</span>
                            </div>
                            <hr />
                            <div className="phone text-white py-2 text-base" >
                                <p className='mb-2 text-gray-300'>Phone number:</p>
                                <span>{userLogin.soDT}</span>
                            </div>
                            <hr />
                            <div className="coupon py-2 text-white">
                                <p className='mb-2 text-gray-300'>Coupons</p>
                                <input type='text'
                                    placeholder='Enter coupons'
                                    className='mb-2 text-black p-2' />
                            </div>
                            <div className="btn-checkout text-white">
                                <button className="checkout p-3 bg-orange-main text-xl font-bold"
                                    onClick={() => {
                                        bookTickets()
                                    }}>
                                    CHECK OUT
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
