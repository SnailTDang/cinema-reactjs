import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'
import { GetTicketsUserAction } from '../../../redux/actions/UserLoginAction'
import { TOKEN_CYBER } from '../../../ulti/constants/Settings'



export default function BookTickets() {
    const { userInfo } = useSelector(state => state.UserLoginReducer)
    console.log(userInfo)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(GetTicketsUserAction(JSON.parse(localStorage.getItem(TOKEN_CYBER))))
    }, [])
    console.log(_.sortBy(userInfo.thongTinDatVe, "ngayDat"))

    const renderTicketBooking = () => {
        if (userInfo.thongTinDatVe.length) {
            return _.reverse(userInfo.thongTinDatVe, "ngayDat")?.map((ticket, index) => {
                let cost = ticket.giaVe * ticket.danhSachGhe.length
                return (
                    <div className="p-2 lg:w-1/2 sm:w-full w-full" key={index}>
                        <div className="h-full flex flex-col lg:flex-row gap-5 justify-center border-gray-800 border p-4 rounded-lg backdrop-ticket">
                            <div className="img h-350 lg:max-w-2/5 lg:basis-[40%] basis-[100%] max-w-full">
                                <img alt="movie" className="w-full h-full bg-gray-100 object-cover object-center flex-shrink-0 mr-4" src={ticket.hinhAnh} />
                            </div>
                            <div className="lg:max-w-3/5 lg:basis-[60%] basis-[100%] max-w-full">
                                <div className="id-ticket mb-2">
                                    <span className="text-orange-main text-lg">Ticket ID:  </span>
                                    <span className="text-orange-main text-xl font-bold">{ticket.maVe}</span>
                                </div>
                                <div className="name mb-2">
                                    <h2 className="text-white text-2xl font-bold mb-2 ">{ticket.tenPhim}</h2>
                                </div>
                                <div className="time-book mb-2">
                                    <span className='text-gray-200 text-base'>Date: </span>
                                    <p className="text-white font-bold text-lg">{moment(ticket.ngayDat).format('hh:mm A - DD/MM/YYYY')}</p>
                                </div>
                                <div className="time-book mb-2">
                                    <span className='text-gray-200 text-base'>Pricing: </span>
                                    <p className="text-white font-bold text-lg">{cost.toLocaleString()} VNĐ</p>
                                </div>
                                <div className="cinema-book mb-2">
                                    <p className='text-gray-200 text-base'>Cinema: </p>
                                    <span className="text-white font-bold text-lg">{ticket.danhSachGhe[0].tenHeThongRap}</span>
                                    <span className='text-yellow-200 text-bold text-lg'> - {ticket.danhSachGhe[0].tenCumRap}</span>
                                </div>
                                <div className="seats">
                                    <p className='text-gray-200 text-base'>SEATS: </p>
                                    <div className="list  grid grid-cols-5 gap-3">
                                        {_.sortBy(ticket.danhSachGhe, 'tenGhe').map((seat, index) => {
                                            return <Fragment key={index}>
                                                <h4 className='text-lg text-green-400 font-bold'>{seat.tenGhe}</h4>
                                            </Fragment>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            })
        } else {
            return <>
                <div className="text-orange-main text-2xl font-bold">BẠN CHƯA ĐẶT PHIM</div>
            </>
        }
    }


    return (
        <>
            <section className="container text-gray-400 body-font">
                <div className="px-5 py-5 mx-auto">
                    <div className="flex flex-row flex-wrap -m-2 min-h-60vh">
                        {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium">Holden Caulfield</h2>
                                    <p className="text-gray-600">UI Designer</p>
                                </div>
                            </div>
                        </div> */}
                        {renderTicketBooking()}
                    </div>
                </div>
            </section>

        </>
    )
}
