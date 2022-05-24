import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { UserLoginAction } from '../../redux/actions/UserLoginAction';

// import "./loginform.css"
import { useDispatch, useSelector } from 'react-redux';
import { UserSignInAction } from '../../redux/actions/UserSignInAction';
import { NavLink } from 'react-router-dom';





export default function RegisterForm(props) {
    const [focus, setFocus] = useState({
        account: false,
        pass: false,
        email: false,
        number: false,
        fullname: false,
    })


    const { signinfail } = useSelector(state => state.UserLoginReducer)
    const [signinMess, setSigninMess] = useState("")

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            account: '',
            pass: '',
            email: '',
            number: '',
            fullname: '',
            idGroup: 'GP04'

        },
        validationSchema: yup.object({
            pass: yup.string()
                .min(6, 'Enter at least 6 characters*')
                .required('Ente Password*'),
            account: yup.string()
                .min(6, 'Enter at least 6 characters*')
                .required('Enter Account*'),
            email: yup.string().email('Invalid email address*').required('Nhập email*'),
            number: yup.string()
                .min(6, 'Invalid Phone Number*')
                .max(11, 'Invalid Phone Number*')
                .matches(
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                    'Invalid Phone Number*'
                )
                .required('Enter your phone number*'),
            fullname: yup.string()
                .required('Enter Your Fullname*')
                .matches(/^["a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s"]+$/, "Invalid Fullname*")
        }),
        onSubmit: values => {
            let user = {
                taiKhoan: values.account,
                email: values.email,
                matKhau: values.pass,
                hoTen: values.fullname,
                soDt: values.number,
                maNhom: values.idGroup
            }
            const action = UserSignInAction(user)
            dispatch(action)
            setSigninMess(signinfail)
            console.log(user)
        },
    });

    useEffect(() => {
        setSigninMess(signinfail)
    }, [signinfail])

    const hanldeInput = (e) => {
        if (e.target.value.trim() != '') {
            focus[e.target.name] = true;
        } else {
            focus[e.target.name] = false;
        }
        setFocus(
            { ...focus }
        )
        setSigninMess('')
    }

    console.log(signinMess)

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form" onSubmit={formik.handleSubmit}>
                        <h1 className="login100-form-title p-4 font-bold text-orange-main">
                            SIGN UP NEW MEMBER
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
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <input className={`input100 ${focus.fullname === true ? 'has-val' : ''}`} type="text" name="fullname"
                                    onChange={(e) => {
                                        formik.handleChange(e)
                                        hanldeInput(e)
                                    }}
                                    value={formik.values.fullname}
                                    onBlur={(e) => {
                                        formik.handleBlur(e)
                                    }} />
                                <span className="focus-input100" />
                                <span className="label-input100">Fullname</span>
                            </div>
                            {formik.touched.fullname && formik.errors.fullname ? (
                                <div className='pt-2 text-red-600'>{formik.errors.fullname}</div>
                            ) : null}
                        </div>
                        <div className="mt-6">
                            <div className="wrap-input100 validate-input" data-validate="Email is required">
                                <input className={`input100 ${focus.email === true ? 'has-val' : ''}`} type="email" name="email"
                                    onChange={(e) => {
                                        formik.handleChange(e)
                                        hanldeInput(e)
                                    }}
                                    value={formik.values.email}
                                    onBlur={(e) => {
                                        formik.handleBlur(e)
                                    }} />
                                <span className="focus-input100" />
                                <span className="label-input100">Email</span>
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <div className='pt-2 text-red-600'>{formik.errors.email}</div>
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
                        <div className="mt-6">
                            <div className="wrap-input100 validate-input" data-validate="Phone number is required">
                                <input className={`input100 ${focus.number === true ? 'has-val' : ''}`} type="text" name="number"
                                    onChange={(e) => {
                                        formik.handleChange(e)
                                        hanldeInput(e)
                                    }}
                                    value={formik.values.number}
                                    onBlur={(e) => {
                                        formik.handleBlur(e)
                                    }} />
                                <span className="focus-input100" />
                                <span className="label-input100">Number Phone</span>
                            </div>
                            {formik.touched.number && formik.errors.number ? (
                                <div className='pt-2 text-red-600'>{formik.errors.number}</div>
                            ) : null}
                        </div>
                        <div className="flex-sb-m w-full pt-3" >
                            <div>
                                <span className='text-red-600'>{signinfail}</span>
                            </div>
                        </div>
                        <div className="flex-sb-m w-full pt-3 pb-2">
                            <div>
                                <NavLink to="/login" className="txt1">
                                    Have an Account?
                                </NavLink>
                            </div>
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn font-bold text-2xl text-orange-main border-2 border-orange-main hover:bg-orange-main hover:text-white" type='submit'>
                                SIGN UP
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
                    <div className="login100-more">
                        <img src="http://starlight.vn/Areas/Admin/Content/Fileuploads/images/POSTER/th%E1%BB%A9%202(1).jpg" alt="" className=' h-full w-full' />
                    </div>
                </div>
            </div>
        </div>

    )
}
