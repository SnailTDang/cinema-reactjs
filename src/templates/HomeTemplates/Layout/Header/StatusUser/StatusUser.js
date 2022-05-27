import Tippy from '@tippyjs/react/headless';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { history } from '../../../../../App';
import { TOKEN_CYBER, USER_LOGIN } from '../../../../../ulti/constants/Settings';


const isActiveMenu = (isActive) => {
    if (!isActive) {
        return "nav-link block text-center py-3 px-2 text-white hover:text-white text-lg unselected font-semibold hover:bg-orange-main bg-gray-200 text-orange-main mb-1"
    } else {
        return "nav-link block text-center py-3 px-2 text-white hover:text-white text-lg font-semibold dark:border-transparent dark:border-orange-main hover:bg-orange-main bg-gray-200 text-orange-main mb-1"
    }
}

const isActiveRegister = (isActive) => {
    if (!isActive) {
        return "nav-link flex items-center p-5 text-white text-lg unselected font-semibold hover:text-orange-main"
    } else {
        return "nav-link flex items-center p-5 text-white text-lg font-semibold border-b-2 dark:border-transparent dark:text-orange-main dark:border-orange-main hover:text-orange-main"
    }
}

export default function StatusUser(props) {

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const renderUser = (user) => {
        if (!user) {
            return (
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <NavLink to='/login' exact
                        className={isActive => {
                            return isActiveRegister(isActive) + " border-none"
                        }}>
                        Sign in
                    </NavLink>
                    <span className='text-3xl'>/</span>
                    <NavLink exact to='/register'
                        className={isActive => {
                            return isActiveRegister(isActive) + " border-none"
                        }}>
                        Sign up
                    </NavLink>
                </div>
            )
        } else {
            return (
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <Tippy
                        // visible={visible}
                        interactive
                        render={(attrs, content) => (
                            <div className="box" tabIndex="0" {...attrs}>
                                <div className='bg-white w-60 p-4 bg-gray-600 user-submenu relative'>
                                    <NavLink exact to="/history-booking" className={isActive => isActiveMenu(isActive)}>History Booking</NavLink>
                                    <NavLink exact to="/home" className={isActive => isActiveMenu(isActive)}>Profile</NavLink>
                                </div>
                                {content}
                            </div>
                        )}
                        // onClickOutside={hide}
                        placement="bottom">
                        <button className="text-lg self-center px-3 rounded"
                            onClick={() => {
                                if (visible) {
                                    hide()
                                } else {
                                    show()
                                }
                            }}
                        >{user.hoTen}
                        </button>
                    </Tippy>
                    <span className='text-3xl'>/</span>
                    <button className="text-lg self-center font-semibold px-3 rounded hover:text-orange-main"
                        onClick={() => {
                            localStorage.removeItem(USER_LOGIN)
                            localStorage.removeItem(TOKEN_CYBER)
                            history.push('/')
                            window.location.reload()
                        }}
                    >
                        Log Out
                        <i className="fa fa-sign-out-alt pl-2"></i>
                    </button>
                </div >
            )
        }
    }
    return (
        <>
            {renderUser(props.user)}
        </>
    )
}
