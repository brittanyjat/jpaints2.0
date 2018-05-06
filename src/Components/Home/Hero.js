import React from 'react';

export default function Hero(props) {
    return (
        <div className='hero hero-subtitle' style={{ backgroundImage: `url(${props.img})` }}>
            {props.title}
        </div>
    )
}
