import React from 'react'
import { Tabs } from 'antd';
import ChecoutTickets from './CheckoutTickets/CheckoutTickets';
import BookTickets from './BookTickets/BookTickets';



const { TabPane } = Tabs;

export default function Checkout(props) {

    return (
        <>
            <Tabs defaultActiveKey="1">
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
