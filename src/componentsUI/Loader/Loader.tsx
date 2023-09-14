import React from 'react';

import './Loader.scss'

export const Loader = () => {
    return (
        <div className="loading-dots">
            <div className="loading-dots--dot "></div>
            <div className="loading-dots--dot "></div>
            <div className="loading-dots--dot "></div>
        </div>
    )
}
