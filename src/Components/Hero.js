import React from 'react';
import lisa3 from '../assets/lisa3.png';

export default function Hero() {
    return (
        <div id='hero' style={{ background: `linear-gradient(to right, rgba(125, 125, 125, 0.3), rgba(125, 125, 125, 0.3)), url(${lisa3})` }}>
        </div>
    )
}