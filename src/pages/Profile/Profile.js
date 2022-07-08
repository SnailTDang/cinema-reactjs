import React from 'react'
import './profile.css'

export default function Profile() {
    return (
        <div className='container' >
            <div className="tabs">
                <div className="tab-item active">
                    <i className="tab-icon fas fa-code" />
                    React
                </div>
                <div className="tab-item">
                    <i className="tab-icon fas fa-cog" />
                    Angular
                </div>
                <div className="tab-item">
                    <i className="tab-icon fas fa-plus-circle" />
                    Ember
                </div>
                <div className="tab-item">
                    <i className="tab-icon fas fa-pen-nib" />
                    Vue.JS
                </div>
                <div className="line" />
            </div>
            {/* Tab content */}
            <div className="tab-content">
                <div className="tab-pane active">

                </div>
                <div className="tab-pane">

                </div>
                <div className="tab-pane">

                </div>
                <div className="tab-pane">

                </div>
            </div>
        </div >

    )
}
