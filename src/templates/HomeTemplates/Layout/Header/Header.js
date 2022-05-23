import React from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'
import { USER_LOGIN } from '../../../../ulti/constants/Settings'


const isActiveMenu = (isActive) => {
    if (!isActive) {
        return "nav-link flex items-center px-4 -mb-1 text-white text-lg unselected font-semibold hover:text-orange-main"
    } else {
        return "nav-link flex items-center px-4 -mb-1 text-white text-lg font-semibold border-b-2 dark:border-transparent dark:text-orange-main dark:border-orange-main hover:text-orange-main"
    }
}

const renderUser = (user) => {
    if (!user) {
        return (
            <div className="items-center flex-shrink-0 hidden lg:flex">
                <NavLink to='/cinema-reactjs/login' exact
                    className={isActive => {
                        return isActiveMenu(isActive) + " border-none"
                    }}>
                    Sign in
                </NavLink>
                <span className='text-3xl'>/</span>
                <NavLink exact to='/cinema-reactjs/register'
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
                        history.push('/cinema-reactjs/')
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
            <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-strong-blue bg-opacity-500/75 w-100 z-10000 text-white sticky top-0 left-0 right-0">
                <div className="container flex justify-between h-16 mx-auto">
                    <a href='/cinema-reactjs/' className="flex items-center p-2">
                        <img src={'https://snailtdang.github.io/cyberphone/img/Brandlogo.png'} alt="" className='w-20' />
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex mb-0">
                        <li className="flex">
                            <NavLink to="/cinema-reactjs/home" exact
                                className={isActive => isActiveMenu(isActive)}
                            >HOME</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink exact to="/cinema-reactjs/home/#showtimes-cinema" className="nav-link flex items-center px-4 -mb-1 text-white text-lg unselected font-semibold hover:text-orange-main">SHOWTIMES</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/cinema-reactjs/news" exact
                                className={isActive => isActiveMenu(isActive)}
                            >NEWS</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/cinema-reactjs/contact" exact
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
            </header >
        </>
    )
}
