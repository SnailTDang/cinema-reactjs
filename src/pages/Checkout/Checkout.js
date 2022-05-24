import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import ChecoutTickets from './CheckoutTickets/CheckoutTickets';
import BookTickets from './BookTickets/BookTickets';
import { useDispatch, useSelector } from 'react-redux';
import { LEAVE_TAB } from '../../redux/types/TicketType';


const { TabPane } = Tabs;

export default function Checkout(props) {
    const dispatch = useDispatch()
    const { tabDefault } = useSelector(state => state.TicketsRoomReducer)
    useEffect(() => {
        dispatch({ type: LEAVE_TAB, value: "1" })
    }, [])
    return (
        <>
            <Tabs activeKey={tabDefault} defaultActiveKey="1" onChange={(key) => {
                dispatch({ type: LEAVE_TAB, value: key })
            }}>
                <TabPane tab="Đặt vé" key="1">
                    <ChecoutTickets {...props} />
                </TabPane>
                <TabPane tab="Thông tin đặt vé" key="2">
                    <BookTickets />
                </TabPane>
            </Tabs>
        </>
    )
}
