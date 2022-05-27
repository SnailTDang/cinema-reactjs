import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Googlemap from '../Googlemap/Googlemap'
import "./footer.css"



export default function Footer() {
    const [height, setHeigth] = useState(0)

    const handleIframe = () => {
        if (height != 0) {
            setHeigth(0)
        } else {
            setHeigth(450)
        }
    }
    return (
        <footer className='py-5'>
            <div className="container">
                <Row className="content-1">
                    <Col lg={6} className="col-lg-3 col-md-3 col-sm-3 col-xs-12 marg-top26">
                        <img id="logo-footer" className="img-responsive w-40" src="https://snailtdang.github.io/cyberphone/img/Brandlogo.png" />
                        <h3 className="info address">Floor 1 Vision Building, Xo Viet Nghe Tinh Street, Hai Chau District, Da Nang City
                        </h3>
                        <ul>
                            <li className="clearfix">
                                <img className="map-trigger" src="https://metiz.vn/static//assets/websites/images/map.png" />
                                <button className="map-left map-trigger text-white" onClick={() => { handleIframe() }}>SEE MAPS</button>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={6} className="col-lg-3 col-md-3 col-sm-3 col-xs-6 marg-top30">
                        <h2>VISION CINEMA</h2>
                        <ul className="list">
                            <li><NavLink exact to="/about">ABOUT US</NavLink></li>
                            <li><a href="/">CAREER</a></li>
                            <li><NavLink exact to="/contact/">CONTACT</NavLink></li>
                        </ul>
                    </Col>
                    <Col lg={6} className="col-lg-3 col-md-3 col-sm-3 col-xs-6 marg-top30">
                        <h2>GENERAL INFORMATION</h2>
                        <ul className="list">
                            <li><a href="/">General Terms</a></li>
                            <li><a href="/faqs/">FAQs</a></li>
                            <li><a href="/">Transaction terms</a></li>
                        </ul>
                    </Col>
                    <Col lg={6} className="col-lg-3 col-md-3 col-sm-3 col-xs-12 marg-top30 fb-custom">
                        <div className="fb-page fb_iframe_widget"
                            data-href="https://www.facebook.com/Vision-Cinema-108149348578086" data-small-header={true}
                            data-adapt-container-width={true}
                            data-hide-cover="false"
                            data-show-facepile={true}
                            fb-xfbml-state="rendered" fb-iframe-plugin-query={`adapt_container_width=true&app_id=328570110956197&container_width=254&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FVision-Cinema-108149348578086&locale=vi_VN&sdk=joey&show_facepile=true&small_header=true`}>
                            <span style={{ verticalAlign: 'bottom', width: 254, height: 70 }}>
                                <iframe width="1000px" height="1000px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder={0} allowFullScreen={true} scrolling="no" allow="encrypted-media" src={`https://www.facebook.com/v2.11/plugins/page.php?adapt_container_width=true&app_id=328570110956197&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1ff38d9011fd98%26domain%3Dmetiz.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fmetiz.vn%252Ff249f3d30e45084%26relation%3Dparent.parent&container_width=254&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FVision-Cinema-108149348578086&locale=vi_VN&sdk=joey&show_facepile=true&small_header=true`}
                                    style={{ border: 'none', visibility: 'visible', width: 254, height: 70 }} />
                            </span>
                        </div>
                    </Col>
                </Row>
                <Googlemap height={height} />
                <Row className="row company-info">
                    <Col lg={18} className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                        <h1 className='text-white text-lg'>Tên Doanh Nghiệp: Công Ty TNHH VISION TECHNOLOGY.</h1>
                        <h1 className='text-white text-lg'>Giấy CNĐKKD: 0400668142 - Ngày cấp: 05/5/2022. Đăng ký thay đổi lần thứ 1 ngày 21/5/2022</h1>
                        <h1 className='text-white text-lg'>Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư Thành phố Đà Nẵng</h1>
                        <h1 className='text-white text-lg'>Địa chỉ đăng ký kinh doanh: 22 đường 3/2, Phường Bình Hiên, Q.Hải Châu, Tp.Đà Nẵng, Việt Nam.</h1>
                        <h1 className='text-white text-lg'>Điện thoại: <a href="tel:0236 3630 689">0236 3730 889</a></h1>
                    </Col>
                    <Col lg={6} className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-notify">
                        <a className="icon-notify" href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=56402" target="_blank"><img className="icon-notify" src="https://metiz.vn/static//assets/websites/images/icon-notify.png" /></a>
                    </Col>
                </Row>
            </div>
        </footer >

    )
}
