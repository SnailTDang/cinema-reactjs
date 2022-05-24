import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTicketsUserAction } from '../../../redux/actions/UserLoginAction'
import { TOKEN_CYBER } from '../../../ulti/constants/Settings'




export default function BookTickets() {
    const { userInfo } = useSelector(state => state.UserLoginReducer)
    console.log(userInfo)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetTicketsUserAction(JSON.parse(localStorage.getItem(TOKEN_CYBER))))
    }, [])

    const renderTicketBooking = () => {
        return userInfo.thongTinDatVe?.map((ticket, index) => {
            return (
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                    <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                        <div className="flex-grow">
                            <h2 className="text-white title-font font-medium">Holden Caulfield</h2>
                            <p className="text-gray-600">UI Designer</p>
                        </div>
                    </div>
                </div>
            )
        })
    }


    return (
        <>
            <section className="container text-gray-400 body-font">
                <div className="px-5 py-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">HISTORY BOOKING</h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
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
