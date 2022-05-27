import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTicketsUserAction } from '../../redux/actions/UserLoginAction'
import { TOKEN_CYBER } from '../../ulti/constants/Settings'
import BookTickets from '../Checkout/BookTickets/BookTickets'


export default function HistoryBooking() {
    const { userInfo } = useSelector(state => state.UserLoginReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!userInfo.taiKhoan) {
            console.log(userInfo)
            dispatch(GetTicketsUserAction(JSON.parse(localStorage.getItem(TOKEN_CYBER))))
        }
    }, [])
    return (
        <div className="container">
            <h1 className="text-2xl text-orange-main font-bold text-center pt-5">HISTORY BOOKING</h1>
            <BookTickets userInfo={userInfo} />
        </div>
    )
}
