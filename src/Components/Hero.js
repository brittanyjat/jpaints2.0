import React from 'react';
import room7 from '../assets/room7.jpeg';

export default function Hero() {
    return (
        <div id='hero' style={{ background: `linear-gradient(to right, rgba(125, 125, 125, 0.3), rgba(125, 125, 125, 0.3)), url(${room7})` }}>
        </div>
    )
}