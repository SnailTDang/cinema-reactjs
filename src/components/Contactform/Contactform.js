import React from 'react'
import Googlemap from '../Googlemap/Googlemap'
import { Row, Col } from 'antd'
import { history } from '../../App'


export default function Contactform() {
    const onSubmit = () => {
        history.push('/home')
    }
    return (
        <div className="container">
            <div className="py-8">
                <Row className="mb-5 md:p-8 p-6">
                    <Col lg={12} md={24} className="px-3">
                        <div className="contact-wrap w-full md:p-10 p-8 text-white">
                            <h3 className="mb-4 text-white text-2xl font-bold">CONTACT US</h3>
                            <div id="form-message-warning" className="mb-4" />
                            <div id="form-message-success" className="mb-4">
                                Your message was sent, thank you!
                            </div>
                            <form id="contactForm" name="contactForm" className="contactForm" onSubmit={onSubmit}>
                                <Row className="row">
                                    <Col lg={12} md={12} xs={24} className="px-3">
                                        <div className="form-group mb-4">
                                            <label className="label" htmlFor="name">Full Name</label>
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                        </div>
                                    </Col>
                                    <Col lg={12} md={12} xs={24} className="px-3">
                                        <div className="form-group mb-4">
                                            <label className="label" htmlFor="email">Email Address</label>
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                        </div>
                                    </Col>
                                    <Col lg={24} md={24} xs={24} className="px-3">
                                        <div className="form-group mb-4">
                                            <label className="label" htmlFor="subject">Subject</label>
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                        </div>
                                    </Col>
                                    <Col lg={24} md={24} xs={24} className="px-3">
                                        <div className="form-group mb-4">
                                            <label className="label" htmlFor="#">Message</label>
                                            <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} />
                                        </div>
                                    </Col>
                                    <Col lg={24} md={24} className="px-3">
                                        <div className="form-group">
                                            <button className='p-3 bg-orange-main rounded-lg' type='submit'>Send Message</button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                    <Col lg={12} md={24} xs={24} className="px-3 hidden md:block">
                        <Googlemap />
                    </Col>
                </Row>
                <Row className="row">
                    <Col lg={6} md={12} xs={24} className="px-3 mb-5">
                        <div className="dbox w-100 text-center">
                            <div className="icon  bg-orange-main flex items-center justify-center">
                                <span className="fa text-white text-2xl fa-map-marker" />
                            </div>
                            <div className="text-white">
                                <p className='text-lg'><span>Address:</span> Floor 1 Vision Building, Xo Viet Nghe Tinh Street, Hai Chau District, Da Nang City</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={24} className="px-3 mb-5">
                        <div className="dbox w-100 text-center">
                            <div className="icon  bg-orange-main flex items-center justify-center">
                                <span className="fa text-white text-2xl fa-phone" />
                            </div>
                            <div className="text-white">
                                <p className='text-lg'><span>Phone:</span> <a href="tel://1234567920" className='text-lg'>0236 3730 889</a></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={24} className="px-3 mb-5">
                        <div className="dbox w-100 text-center">
                            <div className="icon  bg-orange-main flex items-center justify-center">
                                <span className="fa text-white text-2xl fa-paper-plane" />
                            </div>
                            <div className="text-white">
                                <p className='text-lg'><span>Email:</span> <a href="mailto:contact@vision.com" className='text-lg' >contact@vision.com</a></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={24} className="px-3 mb-5">
                        <div className="dbox w-100 text-center">
                            <div className="icon  bg-orange-main flex items-center justify-center">
                                <span className="fa text-white text-2xl fa-globe" />
                            </div>
                            <div className="text-white">
                                <p className='text-lg'><span>Website</span> <a href='/' className='text-lg'>cinema-reactjs.vercel.app</a></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
