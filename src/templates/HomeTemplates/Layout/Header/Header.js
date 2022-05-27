import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'
import { USER_LOGIN, TOKEN_CYBER } from '../../../../ulti/constants/Settings'
// import { Drawer, Button } from "antd";
// import { Menu } from "antd";

// import "antd/dist/antd.css";

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const isActiveMenu = (isActive) => {
    if (!isActive) {
        return "nav-link flex items-center p-5 text-white text-lg unselected font-semibold hover:text-orange-main"
    } else {
        return "nav-link flex items-center p-5 text-white text-lg font-semibold border-b-2 dark:border-transparent dark:text-orange-main dark:border-orange-main hover:text-orange-main"
    }
}

const renderUser = (user) => {
    if (!user) {
        return (
            <div className="items-center flex-shrink-0 hidden lg:flex">
                <NavLink to='/login' exact
                    className={isActive => {
                        return isActiveMenu(isActive) + " border-none"
                    }}>
                    Sign in
                </NavLink>
                <span className='text-3xl'>/</span>
                <NavLink exact to='/register'
                    className={isActive => {
                        return isActiveMenu(isActive) + " border-none"
                    }}>
                    Sign up
                </NavLink>
            </div>
        )
    } else {
        return (
            <div className="items-center flex-shrink-0 hidden lg:flex">
                <button className="text-lg self-center px-3 rounded" >{user.hoTen}</button>
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
            </div>
        )
    }
}

export default function Header(props) {
    let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
    return (
        <>
            <header className="pb-5 bg-blue-main bg-opacity-500/75 dark:text-coolGray-100 w-100 z-10000 text-white">
                <div className="header-info hidden-xs">
                    <div className="header-container container">
                        <div className="header-right">
                            <div className="header-phone text-right">
                                Hotline: <a href="tel:02363630689">0236 3630 689</a>
                            </div>
                            <div className="header-top-time text-right">
                                <div className="time-header">
                                    Working-time: 8:00 - 22:00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-strong-blue bg-opacity-500/75 sticky top-0">
                    <div className="container flex justify-between mx-auto relative">
                        <a href='/' className="block w-fit items-center absolute -top-14 left-4 -bottom-4 bg-strong-blue bg-opacity-500/75">
                            <img src={'https://snailtdang.github.io/cyberphone/img/Brandlogo.png'} alt="" className='w-32' />
                        </a>
                        <ul className="items-stretch space-x-3 flex mb-0 ml-40 lg:ml-72">
                            <li className="flex">
                                <NavLink to="/" exact
                                    className={isActive => isActiveMenu(isActive)}
                                >HOME</NavLink>
                            </li>
                            <li className="flex">
                                <NavLink exact to="/showtimes" className={isActive => isActiveMenu(isActive)}>SHOWTIMES</NavLink>
                            </li>
                            <li className="flex">
                                <NavLink to="/news" exact
                                    className={isActive => isActiveMenu(isActive)}
                                >PROMOTIONS</NavLink>
                            </li>
                            <li className="flex">
                                <NavLink to="/contact" exact
                                    className={isActive => isActiveMenu(isActive)}
                                >CONTACT</NavLink>
                            </li>
                        </ul>
                        {renderUser(userLogin)}
                        <button className="p-4 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header >
        </>
    )
}
