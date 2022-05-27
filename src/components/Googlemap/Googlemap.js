import React from 'react'

export default function Googlemap(props) {
    return (
        <div className="row text-center h-full">
            <div id="content-map" className='h-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3834.614575476593!2d108.2229524!3d16.0335671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ef0fa97aad%3A0x643afda81dd3012a!2sVision%20Tower!5e0!3m2!1svi!2s!4v1653618446576!5m2!1svi!2s" className='w-full h-full' style={{ border: 0, height: `${props.height}px` }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}
