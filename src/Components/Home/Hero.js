import React from 'react';

export default function Hero(props) {
    return (
        <div className='hero' style={{ backgroundImage: `url(${props.img})` }}>
            <div>
                <span>Thumbtack Top Pro</span>
                <span>Interior</span>
                <span>Exterior</span>
                <span>Residential</span>
                <span>Commercial</span>
            </div>
        </div>
    )
}
