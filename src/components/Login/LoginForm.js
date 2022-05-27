import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserLoginAction } from '../../redux/actions/UserLoginAction';

import "./loginform.css"
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../App';
import { Col, Row } from 'antd';






export default function LoginForm(props) {
    const [focus, setFocus] = useState({
        account: false,
        pass: false,
    })

    const { userLogin, loginfail } = useSelector(state => state.UserLoginReducer)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            account: '',
            pass: '',

        },
        validationSchema: Yup.object({
            pass: Yup.string()
                .min(6, 'Enter at least 6 characters*')
                .required('Enter Passwork*'),
            account: Yup.string()
                .min(6, 'Enter at least 6 characters*')
                .required('Enter Account*'),
        }),
        onSubmit: async values => {
            let user = {
                taiKhoan: values.account,
                matKhau: values.pass
            }
            const action = UserLoginAction(user)
            await dispatch(action)
        },
    });

    useEffect(() => {
    }, [loginfail])

    const hanldeInput = (e) => {
        if (e.target.value.trim() != '') {
            focus[e.target.name] = true;
        } else {
            focus[e.target.name] = false;
        }
        setFocus(
            { ...focus }
        )
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <Row className="wrap-login100">
                    <Col lg={10} xs={24} className='flex items-center'>
                        <form className="login100-form w-full" onSubmit={formik.handleSubmit}>
                            <h1 className="login100-form-title p-4 font-bold text-orange-main">
                                LOGIN TO CONTINIUE
                            </h1>
                            <div className="mb-5">
                                <div className="wrap-input100 validate-input" data-validate="Valid account is required: ex@abc.xyz">
                                    <input className={`input100 ${focus.account === true ? 'has-val' : ''}`} type="text" name="account"
                                        onChange={(e) => {
                                            formik.handleChange(e)
                                            hanldeInput(e)
                                        }}
                                        value={formik.values.account}
                                        onBlur={(e) => {
                                            formik.handleBlur(e)
                                        }} />

                                    <span className="focus-input100" />
                                    <span className="label-input100">Account</span>
                                </div>
                                {formik.touched.account && formik.errors.account ? (
                                    <div className='pt-2 text-red-600'>{formik.errors.account}</div>
                                ) : null}
                            </div>
                            <div className="mt-6">
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <input className={`input100 ${focus.pass === true ? 'has-val' : ''}`} type="password" name="pass"
                                        onChange={(e) => {
                                            formik.handleChange(e)
                                            hanldeInput(e)
                                        }}
                                        value={formik.values.pass}
                                        onBlur={(e) => {
                                            formik.handleBlur(e)
                                        }} />
                                    <span className="focus-input100" />
                                    <span className="label-input100">Password</span>
                                </div>
                                {formik.touched.pass && formik.errors.pass ? (
                                    <div className='pt-2 text-red-600'>{formik.errors.pass}</div>
                                ) : null}
                            </div>
                            <div className="flex-sb-m w-full pt-3" >
                                <div>
                                    <span className='text-red-600'>{loginfail}</span>
                                </div>
                            </div>
                            <div className="flex-sb-m w-full pt-3 pb-2">
                                <div>
                                    <a href="#" className="txt1">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn font-bold text-2xl text-orange-main border-2 border-orange-main hover:bg-orange-main hover:text-white" type='submit'>
                                    Login
                                </button>
                            </div>
                            <div className="text-center pt-4 pb-4">
                                <span className="txt2">
                                    or sign up using
                                </span>
                            </div>
                            <div className="login100-form-social flex gap-2 justify-center">
                                <a href="#" className="login100-form-social-item flex bg1 m-r-5 items-center justify-center">
                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                </a>
                                <a href="#" className="login100-form-social-item flex bg2 m-r-5 items-center justify-center">
                                    <i className="fab fa-twitter" aria-hidden="true" />
                                </a>
                            </div>
                        </form>
                    </Col>
                    <Col lg={14}>
                        <img src="https://metiz.vn/media/new_offer/KM_SUPER__MONDAY_MEDIA-02.jpg" alt="" className=' h-full' />
                    </Col>
                </Row>
            </div>
        </div>

    )
}
