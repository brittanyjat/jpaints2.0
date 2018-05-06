import React from 'react';

export default function Hero(props) {
    return (
        <div>
            <div className='hero hero-subtitle' style={{ backgroundImage: `url(${props.img})` }}>
                {props.title}
            </div>
            <div className='partition'><i className="fas fa-chevron-down"></i></div>
        </div>
    )
}
