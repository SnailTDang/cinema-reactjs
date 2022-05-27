import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import ChecoutTickets from './CheckoutTickets/CheckoutTickets';
import BookTickets from './BookTickets/BookTickets';
import { useDispatch, useSelector } from 'react-redux';
import { LEAVE_TAB } from '../../redux/types/TicketType';
import LoadingMini from '../../components/Loadingmini/LoadingMini';
import './checkout.css'
import { TOKEN_CYBER } from '../../ulti/constants/Settings';
import { GetTicketsUserAction } from '../../redux/actions/UserLoginAction';



const { TabPane } = Tabs;

export default function Checkout(props) {
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.UserLoginReducer)
    const { tabDefault } = useSelector(state => state.TicketsRoomReducer)
    useEffect(() => {
        dispatch({ type: LEAVE_TAB, value: "1" })
    }, [])
    return (
        <>
            <LoadingMini />
            <Tabs activeKey={tabDefault} defaultActiveKey="1" onChange={(key) => {
                dispatch({ type: LEAVE_TAB, value: key })
            }}>
                <TabPane tab={<h3 className='text-xl text-white p-3'>BOOK TICKETS</h3>} key="1">
                    <ChecoutTickets {...props} />
                </TabPane>
                <TabPane tab={<h3 className='text-xl text-white p-3'>HISTORY BOOKING</h3>} key="2">
                    <BookTickets userInfo={userInfo} />
                </TabPane>
            </Tabs>
        </>
    )
}
