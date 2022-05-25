import React, { useEffect } from 'react'
import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { hideTrailerAction } from '../../redux/actions/TrailerAction';
import './popuptrailer.css'

export default function PopupTrailer(props) {
    const dispatch = useDispatch()
    const { trailerMovie, isOpen } = useSelector(state => state.TrailerReducer)
    
    const stopTrailer = () => {
        document.querySelector('#trailer').setAttribute('src', '')
    }

    return (
        <>
            <Modal
                centered
                width={'fit-content'}
                visible={isOpen}
                onOk={() => {
                    stopTrailer()
                    dispatch(hideTrailerAction())
                }}
                onCancel={() => {
                    stopTrailer()
                    dispatch(hideTrailerAction())
                }}
            >
                <iframe
                    id='trailer'
                    width={800} height={450} src={`${trailerMovie.trailer}?autoplay=1`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </Modal>
        </>
    )
}
