import React from 'react'
import { useSelector } from 'react-redux'
import "./loadingmini.css"

export default function LoadingMini() {
    const { isLoading } = useSelector(state => state.LoadingReducer)
    console.log(isLoading)
    return (
        <>
            {isLoading ?
                <div className="body-loader">
                    <div className="container-loading">
                        <h3 className='text-orange-main text-3xl font-bold'>LOADING...</h3>
                        <div className="loader">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div> : ""
            }
        </>
    )
}
